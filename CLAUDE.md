# ICSDC Strapi CMS — Claude Notes

This file is read automatically by Claude Code at session start.

**AGENT RULE: After completing any task, update this file immediately.** Add new collections, new components, schema changes, seed patterns, and any gotchas. Keep it comprehensive so any agent can pick up the project cold.

---

## ⚠️ Critical: Correct Component Field Names

These are the **exact** field names required by each `ds.*` component.
Using wrong names causes silent save + failed publish (validation error on publish).

### `ds.cta-link` — Button / CTA link
| Field | Type | Required | ✅ Correct | ❌ Wrong (never use) |
|-------|------|----------|-----------|----------------------|
| `text` | string | yes | `{ text: 'Get Started', link: '/contact' }` | `label`, `name`, `title` |
| `link` | string | yes | | `url`, `href`, `path` |

```js
// ✅ CORRECT
heroCtaPrimary: { text: 'Explore Plans', link: '#plans' }

// ❌ WRONG — saves but fails publish with ValidationError
heroCtaPrimary: { label: 'Explore Plans', url: '#plans' }
```

---

### `ds.cta-band` — CTA banner section
| Field | Type | Required | ✅ Correct | ❌ Wrong (never use) |
|-------|------|----------|-----------|----------------------|
| `title` | string | yes | `title: 'Get Started Today'` | `heading`, `name` |
| `description` | text | no | `description: 'Subtitle text'` | `subtext`, `subtitle`, `body` |
| `ctaPrimary` | ds.cta-link | no | `{ text: '...', link: '...' }` | |
| `ctaSecondary` | ds.cta-link | no | `{ text: '...', link: '...' }` | |

```js
// ✅ CORRECT
ctaBand1: {
  title: 'Ready to get started?',
  description: 'Supporting subtext here.',
  ctaPrimary:   { text: 'Primary CTA',   link: '/contact' },
  ctaSecondary: { text: 'Secondary CTA', link: 'tel:+919810958857' }
}
```

---

### `ds.icon-card` — Icon + title + description card
| Field | Type | Required | Note |
|-------|------|----------|------|
| `title` | string | yes | |
| `desc` | string | yes | ⚠️ `desc` NOT `description` |
| `icon` | string | no | Key resolved on frontend via ICONS map |
| `order` | integer | no | |

```js
// ✅ CORRECT — uses desc (short)
{ title: 'Fast Performance', desc: 'Consistently fast read/write.' }

// ❌ WRONG
{ title: 'Fast Performance', description: 'Consistently fast read/write.' }
```

---

### `ds.numbered-tip` — Numbered step / tip card
| Field | Type | Required | Note |
|-------|------|----------|------|
| `title` | string | yes | |
| `description` | text | yes | ⚠️ `description` NOT `desc` (opposite of icon-card!) |
| `order` | integer | no | |

---

### `ds.pricing-plan` — Plan card with features
| Field | Type | Required | Note |
|-------|------|----------|------|
| `tier` | string | yes | Plan name, e.g. `'Starter'` |
| `price` | string | yes | Numeric string, e.g. `'999'` |
| `currency` | string | no | Default `'&#8377;'` |
| `period` | string | no | Default `'/mo'`; use `'user/mo'` for per-seat |
| `tagline` | text | no | One-line description |
| `isFeatured` | boolean | no | Highlights the card |
| `badge` | string | no | e.g. `'Most Popular'` |
| `features` | ds.plan-feature[] | no | |
| `ctaText` | string | yes | Button label |
| `ctaStyle` | enum | no | `'outline'` or `'primary'` |
| `order` | integer | no | |

### `ds.plan-feature` — Single feature line inside a plan
| Field | Type | Required |
|-------|------|----------|
| `label` | string | yes |

---

### `ds.faq-entry`
| Field | Type | Required | Note |
|-------|------|----------|------|
| `question` | string | yes | |
| `answer` | CKEditor | no | rich HTML, not plain text |
| `order` | integer | no | |

### `ds.testimonial-card`
| Field | Type | Required | Note |
|-------|------|----------|------|
| `name` | string | yes | |
| `title` | string | no | ⚠️ `title` NOT `role` — this is the job title |
| `company` | string | no | |
| `quote` | CKEditor | no | rich HTML |
| `rating` | integer | no | default 5, drives the star count |
| `Avatar` | media | no | ⚠️ capital A — and currently never rendered; `initTestimonials()` draws initials only |

### `ds.seo-meta`
| Field | Type | Required | Note |
|-------|------|----------|------|
| `metaTitle` | string | no | |
| `metaDescription` | text | no | |
| `canonicalUrl` | string | no | absolute URL, or a path resolved against `SITE_URL` |

---

## Seed File Checklist

Before running `node import-pages.js`, verify every seed file has:

- [ ] `heroCtaPrimary` / `heroCtaSecondary` → `{ text, link }` ✅
- [ ] `ctaBand1` / `ctaBand2` → `{ title, description, ctaPrimary: { text, link }, ctaSecondary: { text, link } }` ✅
- [ ] Icon cards (pillars, features, whyCards, etc.) → `{ title, desc }` ✅
- [ ] Numbered tips (whenCards, howSteps) → `{ title, description }` ✅
- [ ] Plan features → `{ label }` ✅
- [ ] Plans → `{ tier, price, ctaText }` all present ✅

## Running the Import

```bash
# Import all pages in import-pages.js
node import-pages.js

# Import specific page(s) by name
node import-pages.js "Microsoft 365"
node import-pages.js "GPU Dedicated Server" "Cloud Storage"
```

Strapi must be running at `http://localhost:1337` before importing.

## ⚠️ `import-pages.js` is currently BROKEN (verified 2026-08-03)

The script `require()`s **16** seed files but only two exist — `seed/footer.js` and `seed/navigation.js`. The other 14 are required eagerly when the `PAGES` array is built, so the script dies at load time:

```
CRASH: MODULE_NOT_FOUND — Cannot find module './seed/firewall-security'
```

Filtering by name does **not** help (`node import-pages.js "Navigation"` fails too) because the `require()` calls run before argument filtering. Only the `Home Page Extras` entry uses a lazy getter.

Missing seed files: `about-us`, `contact-us`, `firewall-security`, `forex-vps`, `home-page-extras`, `linux-dedicated-server`, `managed-dedicated-server`, `pam-mfa`, `shared-hosting`, `ssl-certificate`, `tally-on-cloud`, `vapt`, `vps-cpanel`, `web-hosting`.

They were never committed — the repo has no `seed/*.js` beyond the two above. Fix by either restoring the seed files, or converting every `data:` to a lazy `get data()` so filtering works.

**Until this is fixed, do not promise to "run the import" as part of the page workflow — it cannot succeed.**

## ⚡ Workflow Rule — Run Import After Seeding (once the above is fixed)

After writing or updating any seed file and adding its entry to `import-pages.js`, run the import from the repo root:

```bash
node import-pages.js "<Page Name>"
```

- If Strapi is not running, report the error and remind the user to start Strapi, then re-run.
- Do not wait for the user to ask — run it proactively as part of the page creation workflow.

## Adding a New Page

1. Create `seed/<page-name>.js` using the field names above
2. Add an entry to `PAGES` array in `import-pages.js`:
   ```js
   { name: 'My Page', endpoint: 'my-page-page', uid: 'api::my-page-page.my-page-page', data: require('./seed/my-page') }
   ```
3. Ensure `src/api/my-page-page/` schema exists with matching attribute names
4. Restart Strapi (to pick up new content types), then run `node import-pages.js "My Page"`

---

## Navigation Single Type — Component Slots

`src/api/navigation/content-types/navigation/schema.json`

| Slot | Component | Purpose |
|---|---|---|
| `navLogo` | `menu.main-logo` | Site logo |
| `menus` | `menu.nav-menu` (repeatable) | Nav menu groups |
| `LoginButton` | `buttons.button` | Login CTA in navbar |
| `ctaButton` | `buttons.cta-button` | Optional extra CTA button in navbar |
| `whatsappWidget` | `buttons.whatsapp-widget` | WhatsApp button in navbar + lead-capture popover |

### `buttons.whatsapp-widget` fields
| Field | Type | Notes |
|---|---|---|
| `phoneNumber` | string, required | Digits only, no `+` or spaces e.g. `9616382389` |
| `defaultMessage` | text | Pre-filled chat message |
| `popoverTitle` | string | Popover heading |
| `popoverSubtitle` | string | Popover subheading |
| `enabled` | boolean | Hard kill-switch — false hides button entirely |

> **Note:** `bubblePosition` was removed (2026-05-27). The widget moved from a floating bubble to a navbar button — position is now always anchored to the button element. Do not re-add this field.

## page-schema (JSON-LD) — hardened 2026-10-05
- `src/api/page-schema/content-types/page-schema/lifecycles.ts` normalises `path` on create/update (lowercase, no domain/query/trailing slash) so the `unique` constraint matches how the frontend looks paths up (`schemaNormalisePath` in icsdc_node_fe/server.js — keep the two in sync).
- `seo.schema-block.schemaType` no longer offers `HowTo` (Google dropped HowTo rich results).
- The frontend rejects blocks of types it generates itself (Organization/Corporation/WebSite/WebPage; BlogPosting/Article/BreadcrumbList on blog posts) — see icsdc_node_fe CLAUDE.md "Per-page JSON-LD schema".
- `page-schemas` is not readable through the public `/api/strapi` proxy any more; the frontend server reads it directly with its token.

## Map pins — "Place" custom field: Country + City dropdowns (2026-10-13)
- Custom field **`global::place`** (type json): registered server-side in `src/index.ts` `register()` and admin-side in `src/admin/app.tsx` `register()` → input `src/admin/components/PlaceInput.tsx`. Used as `place` on **`ds.map-location`** (home-page `globalLocations`: `order`, `title`, `place`, `description`) and **`ds.location-pin`** (dedicated-server-page `locationPins`: `label`, `place`). The legacy `countryKey` (map-location) and `top`/`left` (location-pin) were **removed 2026-10-13** once every entry had a Place.
- **Two searchable dropdowns** (design-system Combobox): **Country** — all 247 countries, loaded once, filtered as you type (`contains`); **City** — enabled once a country is picked, lists that country's biggest cities, searches within the country as you type (200 ms debounce, `autocomplete="none"` so server results aren't re-filtered). Leaving City empty stores the country itself → pin in the middle of the country. Clearing City falls back to the country.
- Stored value: `{ id: "city:1275339"|"country:IN", type, name, region, country, countryCode, label, lat, lng }`. The website reads `label` + `lat`/`lng`; editors never see coordinates.
- Endpoints (`src/api/geo`, `auth: false`, public read-only, cached 1 day): **`GET /api/geo/countries`** (A–Z) and **`GET /api/geo/cities?country=IN&q=`** (no `q` → biggest 50; with `q` → exact name > name prefix > old spelling e.g. Bombay→Mumbai > first-word + region words e.g. "springfield illinois"; bigger first). Logic in `src/utils/geo-places.ts`.
- Data: **`data/geo-places.json`** = GeoNames cities15000 + admin1 region names + countryInfo (CC BY 4.0, 34,162 cities) + 247 countries with centres from Natural Earth (centroid of the largest polygon; when several shapes share a code — Australia + Ashmore & Cartier Is. — the biggest wins). Outside `src/`, read via `strapi.dirs.app.root` — **must be deployed with the app**.
- **`pinColor` removed** from `ds.map-location` (2026-10-13, user's request) — all 8 stored values were the default `#1a56db`; every pin is brand blue now.
- The earlier city/country/latitude/longitude/manualCoordinates fields (2026-10-06) were dropped — never filled (verified 0 rows first).
- **Content as of 2026-10-13:** homepage map = Delhi + Mumbai only (user's call; real locations to be added by editors later, descriptions empty); dedicated pins = Delhi + Mumbai (Noida pin switched to Delhi at the user's request; the chips under that map — `locationTags` "Noida, India" — and its subtitle "(Noida & Mumbai)" still say Noida). Previous entries (India/Europe/USA/UK + a test "New Data center" in Kabul) are backed up in `/Users/nikhil/Desktop/ICDSC/backups/` (draft + published JSON).
- ⚠️ Deploy this schema to production BEFORE production Strapi restarts — on the old schema it drops the `place` column.

## Contact Us hero buttons (2026-10-14)
- Added `heroCtaPrimary` / `heroCtaSecondary` (`ds.cta-link`) to `contact-us-page`, after `heroDescription`. Seeded with the buttons the page already had: "Send Us a Message" → `#cu-contact`, "View Our Services" → `/`.
- ⚠️ Deploy this schema to production BEFORE production Strapi restarts (shared DB — on the old schema it would drop the two new component links).
