import { useEffect } from "react";

/*
  Call this once, at the top of each top-level route/page component
  (WakaDotCom, SmartFixer, Wakafoods, WakaRider, WakaStores).

  Why here and not in App.jsx: your routes are lazy-loaded with
  <Suspense fallback={null}>, so App itself mounts almost instantly —
  long before the actual page chunk has downloaded. Dispatching from
  App would hide the index.html loader onto a blank screen. Dispatching
  from inside the page component means it only fires once that page's
  real content is actually mounted and ready to paint.

  Safe to call on every page navigation: the index.html script only
  listens for the very first 'waka:app-ready' event (`{ once: true }`)
  and ignores every dispatch after that, so this has zero effect once
  the initial loader has already hidden.
*/
export default function useAppReady() {
  useEffect(() => {
    document.dispatchEvent(new Event("waka:app-ready"));
  }, []);
}