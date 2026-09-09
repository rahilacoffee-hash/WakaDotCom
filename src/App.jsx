import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import WakaStores from './Pages/WakaStores'

const WakaDotCom = lazy(() => import('./Pages/WakaDotCom'))
const SmartFixer = lazy(() => import('./Pages/SmartFixer'))
const Wakafoods = lazy(() => import('./Pages/Wakafoods'))
const WakaRider = lazy(() => import('./Pages/WakaRider'))


const App = () => {
  return (
    <>
    <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<WakaDotCom />} />
          <Route path="/smartfixer" element={<SmartFixer />} />
          <Route path="/wakafoods" element={<Wakafoods />} />
          <Route path="/wakarider" element={<WakaRider />} />
          <Route path="/wakastores" element={<WakaStores />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
