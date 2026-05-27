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
| Field | Type | Required |
|-------|------|----------|
| `question` | string | yes |
| `answer` | text | yes |

### `ds.testimonial-card`
| Field | Type | Required |
|-------|------|----------|
| `name` | string | yes |
| `role` | string | no |
| `company` | string | no |
| `quote` | text | yes |

### `ds.seo-meta`
| Field | Type | Required |
|-------|------|----------|
| `metaTitle` | string | no |
| `metaDescription` | text | no |

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

## ⚡ Workflow Rule — Always Run Import After Seeding

After writing or updating any seed file and adding its entry to `import-pages.js`, **always attempt to run the import automatically**:

```bash
cd "C:\Users\saket\OneDrive\Desktop\ICSDC Strapi CMS\my-admin"
node import-pages.js "<Page Name>"
```

- If Strapi is not running, report the error and remind the user to start Strapi, then re-run the command.
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
