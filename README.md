# WakaDotCom

Marketing site for the WakaDotCom ecosystem: WakaStores, WakaFoods, WakaRider, and SmartFixer.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run lint` for static analysis and `npm run build` for a production build.

## Reliability fixes completed

- Fixed both testimonial sliders so every hook is called before the empty-testimonials return. Autoplay now uses a memoized callback and safely handles an empty or resized testimonials list.
- Added the missing `count` dependency to `MotionCounter`.
- Added routes for all shared-footer destinations: About, Contact, Careers, Partners, FAQs, Help, Privacy, and Terms. These currently provide clear holding pages until final content is supplied.
- Replaced placeholder `#` calls to action with real in-page contact targets or the home contact section. Fixed WakaStores navigation and its hero actions, SmartFixer and WakaRider start actions, and WakaRider’s trusted-partner target.
- Added concrete `get-started` and `trusted-partners` anchor targets where navigation expects them.
- Corrected the homepage logo extension to `.webp`, rooted the Big Bites image path, and corrected every path in the unused WakaRider partners data file to match available assets.
- Newsletter submission now opens a pre-addressed email request instead of silently logging an address to the browser console. It is not a database-backed subscription service.
- Added an accessible loading spinner for route and deferred-section loading, replacing blank `Suspense` fallbacks.
- Removed unused icon imports introduced by the affected components.
- Fixed WakaStores “Get Started” actions to use in-page anchor links. Its hero CTAs now lead to the WakaStores contact section instead of the unrelated homepage contact section.
- Removed the duplicate WakaStores `get-app` anchor so app calls-to-action have one predictable destination.
- Removed unsupported WakaStores product filters, which previously produced a misleading empty state because the current catalogue contains shoes only.
- Removed duplicate Get App sections from SmartFixer and WakaRider.
- Updated each product navigation’s Home link to return to that product’s landing page, and corrected SmartFixer footer ecosystem links to use actual routes.
- Replaced WakaFoods’ unreliable Google thumbnail URLs with locally hosted partner imagery.

## Launch details still required

The site intentionally does not invent business details. Supply the following before production release and replace the current placeholders in the listed files.

| Detail | Current location | What to provide |
| --- | --- | --- |
| iOS App Store URL | `src/components/EcosystemSection/EcosystemSection.jsx` | The final app URL. The current `idXXXXXXXXX` value is a placeholder. |
| Google Play URL | `src/components/EcosystemSection/EcosystemSection.jsx` | The final Android package URL. |
| WakaStores app URLs | `src/WakaStores/CategoriesAndTrending/CategoriesAndTrending.jsx` | Direct iOS and Android listing URLs; the current values lead only to the generic stores. |
| Support telephone and WhatsApp | `src/components/Contact/Contact.jsx` and product-specific `Contact.jsx` files | Approved customer-support number in display and international-link formats. |
| Support email | Contact components and `src/components/Footer/Footer.jsx` | Canonical customer-support email address and consistent casing. |
| Social profiles | Footer components | Official profile URLs, or remove social icons until they are available. |
| Newsletter provider | `src/components/Footer/Footer.jsx`, `src/Smartfixer/Footer/Footer.jsx` | Approved API/provider endpoint, consent copy, error handling, and privacy-compliant storage. |
| Legal and help content | `src/Pages/InfoPage.jsx` | Published content for Privacy, Terms, FAQs, Help, Careers, Partners, About, and Contact. |

Do not ship generic store links, temporary phone numbers, or placeholder legal pages as if they were production services. Until the direct app URLs are available, route “download” calls-to-action to a clearly labelled contact/waitlist flow instead.

## Integration still required

The holding pages and newsletter flow keep navigation usable without inventing business content or a backend. Before launch, provide final legal/help/company copy and connect the newsletter form to an approved mailing-list provider or API.
