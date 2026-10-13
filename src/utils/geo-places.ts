/**
 * Country + city lists for the "Place" custom field the map pins use: editors
 * pick a country from every country in the world, then a city in it (or leave
 * the city empty for a pin in the middle of the country).
 *
 * Data: data/geo-places.json — GeoNames cities15000 + admin1 regions + country
 * list (CC BY 4.0), country centres from Natural Earth. A picked place is
 * stored on the entry as the Place object below; the website reads its
 * lat/lng to put the pin there. Editors never see coordinates.
 */
import fs from 'fs';
import path from 'path';

export interface Place {
  id: string;            // "city:1275339" | "country:IN"
  type: 'city' | 'country';
  name: string;          // Mumbai
  region?: string;       // Maharashtra
  country: string;       // India
  countryCode: string;   // IN
  label: string;         // Mumbai, Maharashtra, India
  lat: number;
  lng: number;
}

type CityRow = [geonameId: number, name: string, region: string, cc: string, lat: number, lng: number, pop: number, alts: string];
type CountryRow = [cc: string, name: string, lat: number, lng: number];
interface City { place: Place; pop: number; key: string; alts: string[]; regionWords: string[] }

let countryList: Place[] | null = null;
let citiesByCountry: Map<string, City[]> | null = null;

/** Accents off, lowercase, punctuation → space: "São Paulo" → "sao paulo". */
export function norm(s: string): string {
  return String(s || '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function load(root: string): void {
  if (countryList && citiesByCountry) return;
  const raw = JSON.parse(fs.readFileSync(path.join(root, 'data', 'geo-places.json'), 'utf8'));
  const names: Record<string, string> = {};
  countryList = (raw.countries as CountryRow[])
    .map(([cc, name, lat, lng]) => {
      names[cc] = name;
      return { id: `country:${cc}`, type: 'country' as const, name, country: name, countryCode: cc, label: name, lat, lng };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  citiesByCountry = new Map();
  for (const [gid, name, region, cc, lat, lng, pop, alts] of raw.cities as CityRow[]) {
    if (!names[cc]) continue;
    const label = [name, region && region !== name ? region : '', names[cc]].filter(Boolean).join(', ');
    const city: City = {
      place: { id: `city:${gid}`, type: 'city', name, region: region || undefined, country: names[cc], countryCode: cc, label, lat, lng },
      pop,
      key: norm(name),
      alts: alts ? alts.split('|') : [],
      regionWords: norm(region).split(' ').filter(Boolean),
    };
    if (!citiesByCountry.has(cc)) citiesByCountry.set(cc, []);
    citiesByCountry.get(cc)!.push(city);
  }
  for (const list of citiesByCountry.values()) list.sort((a, b) => b.pop - a.pop);
}

/** Every country, A–Z, as a Place (pin in the country's middle). */
export function countries(root: string): Place[] {
  load(root);
  return countryList!;
}

/**
 * Cities in one country. No query → the biggest `limit` cities, to browse.
 * With a query → name matches, best first: exact name, name starting with it,
 * then older spellings (Bombay → Mumbai); bigger cities first within each.
 * Extra words narrow by region: "springfield illinois", "hyderabad sindh".
 */
export function cities(root: string, countryCode: string, q = '', limit = 50): Place[] {
  load(root);
  const list = citiesByCountry!.get(String(countryCode || '').toUpperCase()) || [];
  const words = norm(q).split(' ').filter(Boolean);
  if (!words.length) return list.slice(0, limit).map((c) => c.place);

  const query = words.join(' ');
  const tierOf = (c: City): number => {
    if (c.key === query) return 0;
    if (c.key.startsWith(query)) return 1;
    if (c.alts.includes(query)) return 2;
    if (c.alts.some((a) => a.startsWith(query))) return 3;
    // "springfield illinois": first word names the city, the rest its region.
    if (words.length > 1 && c.key.startsWith(words[0]) &&
        words.slice(1).every((w) => c.regionWords.some((r) => r.startsWith(w)))) return 4;
    return -1;
  };
  const hits: Array<{ c: City; tier: number }> = [];
  for (const c of list) {
    const tier = tierOf(c);
    if (tier >= 0) hits.push({ c, tier });
  }
  return hits
    .sort((a, b) => a.tier - b.tier || b.c.pop - a.c.pop)
    .slice(0, limit)
    .map((h) => h.c.place);
}
