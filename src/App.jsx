import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";

import SectionLoader from "./components/layout/SectionLoader";

const WakaDotCom = lazy(() => import("./Pages/WakaDotCom"));
const SmartFixer = lazy(() => import("./Pages/SmartFixer"));
const Wakafoods = lazy(() => import("./Pages/Wakafoods"));
const WakaRider = lazy(() => import("./Pages/WakaRider"));
const WakaStores = lazy(() => import("./Pages/WakaStores"));
const InfoPage = lazy(() => import("./Pages/InfoPage"));
const FaqPage = lazy(() => import("./Pages/Faqpage"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<SectionLoader minHeight="100vh" />}>
        <Routes>
          <Route path="/" element={<WakaDotCom />} />
          <Route path="/smartfixer" element={<SmartFixer />} />
          <Route path="/wakafoods" element={<Wakafoods />} />
          <Route path="/wakarider" element={<WakaRider />} />
          <Route path="/wakastores" element={<WakaStores />} />
          <Route path="/:page" element={<InfoPage />} />
          <Route path="/faqs" element={<FaqPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
