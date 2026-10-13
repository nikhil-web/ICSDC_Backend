/**
 * "Place" custom field input for map pins: two searchable dropdowns.
 *   1. Country — every country in the world (GET /api/geo/countries, filtered as you type)
 *   2. City    — cities in that country, biggest first; typing searches them
 *                (GET /api/geo/cities?country=IN&q=…)
 * Leaving City empty puts the pin in the middle of the country. The stored
 * value is the picked place (label, country, hidden lat/lng); the website
 * reads its lat/lng to place the pin. Editors never see coordinates.
 */
import * as React from 'react';
import { Combobox, ComboboxOption, Field, Grid } from '@strapi/design-system';
import { useField } from '@strapi/strapi/admin';

interface Place {
  id: string;
  type: 'city' | 'country';
  name: string;
  region?: string;
  country: string;
  countryCode: string;
  label: string;
  lat: number;
  lng: number;
}

const api = (path: string) => `${(window as any).strapi?.backendURL || ''}/api/geo/${path}`;

function isPlace(v: unknown): v is Place {
  return !!v && typeof v === 'object' && typeof (v as Place).id === 'string' && typeof (v as Place).lat === 'number';
}

export const PlaceInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  const { name, label, hint, required, disabled, labelAction } = props;
  const field = useField<Place | null>(name);
  const value = isPlace(field.value) ? field.value : null;

  // ── Countries: loaded once, filtered in the browser ──
  const [countries, setCountries] = React.useState<Place[]>([]);
  React.useEffect(() => {
    let alive = true;
    fetch(api('countries'))
      .then((r) => r.json())
      .then((j) => { if (alive) setCountries(Array.isArray(j.data) ? j.data : []); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const countryCode = value ? value.countryCode : '';
  const countryPlace = countries.find((c) => c.countryCode === countryCode) || null;

  // ── Cities in the chosen country: biggest first, searched as you type ──
  const [cityQuery, setCityQuery] = React.useState('');
  const [cities, setCities] = React.useState<Place[]>([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (!countryCode) { setCities([]); return; }
    const ctrl = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const r = await fetch(api(`cities?country=${countryCode}&q=${encodeURIComponent(cityQuery.trim())}`), { signal: ctrl.signal });
        const j = await r.json();
        setCities(Array.isArray(j.data) ? j.data : []);
      } catch (err: any) {
        if (err && err.name !== 'AbortError') setCities([]);
      } finally {
        setLoading(false);
      }
    }, cityQuery ? 200 : 0);
    return () => { clearTimeout(timer); ctrl.abort(); };
  }, [countryCode, cityQuery]);

  const city = value && value.type === 'city' ? value : null;
  // The saved city stays in the list so its name shows in the box.
  const cityOptions = city && !cities.some((c) => c.id === city.id) ? [city, ...cities] : cities;

  return (
    <Field.Root name={name} id={name} error={field.error} hint={hint || 'Leave City empty to put the pin in the middle of the country.'} required={required}>
      <Field.Label action={labelAction}>{label}</Field.Label>
      <Grid.Root gap={4}>
        <Grid.Item col={6} s={12} direction="column" alignItems="stretch">
          <Combobox
            ref={ref}
            aria-label="Country"
            placeholder="Country — type to search"
            disabled={disabled}
            autocomplete={{ type: 'list', filter: 'contains' }}
            value={countryPlace ? countryPlace.id : undefined}
            onChange={(id?: string) => {
              const picked = countries.find((c) => c.id === id) || null;
              setCityQuery('');
              field.onChange(name, picked); // country alone = pin in its middle, until a city is picked
            }}
            onClear={() => { setCityQuery(''); field.onChange(name, null); }}
            noOptionsMessage={() => 'No country found'}
          >
            {countries.map((c) => (
              <ComboboxOption key={c.id} value={c.id}>{c.name}</ComboboxOption>
            ))}
          </Combobox>
        </Grid.Item>
        <Grid.Item col={6} s={12} direction="column" alignItems="stretch">
          <Combobox
            aria-label="City"
            placeholder={countryCode ? 'City — type to search (optional)' : 'Pick a country first'}
            disabled={disabled || !countryCode}
            autocomplete="none"
            value={city ? city.id : undefined}
            onInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setCityQuery(e.currentTarget.value)}
            onChange={(id?: string) => {
              const picked = cityOptions.find((c) => c.id === id);
              if (picked) field.onChange(name, picked);
            }}
            onClear={() => { setCityQuery(''); field.onChange(name, countryPlace); }}
            loading={loading}
            loadingMessage="Searching…"
            noOptionsMessage={() => `No city matching "${cityQuery}" — try the nearest larger city`}
          >
            {cityOptions.map((c) => (
              <ComboboxOption key={c.id} value={c.id}>
                {c.region && c.region !== c.name ? `${c.name}, ${c.region}` : c.name}
              </ComboboxOption>
            ))}
          </Combobox>
        </Grid.Item>
      </Grid.Root>
      <Field.Hint />
      <Field.Error />
    </Field.Root>
  );
});
