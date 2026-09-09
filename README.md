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

## Integration still required

The holding pages and newsletter flow keep navigation usable without inventing business content or a backend. Before launch, provide final legal/help/company copy and connect the newsletter form to an approved mailing-list provider or API.
