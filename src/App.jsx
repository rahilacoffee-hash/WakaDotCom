import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import WakaDotCom from './Pages/WakaDotCom'
import SmartFixer from './Pages/SmartFixer'
import Wakafoods from './Pages/Wakafoods'

const App = () => {
  return (
    <>
    <ScrollToTop />
       <Routes>
        <Route path="/" element={<WakaDotCom />} />
        <Route path="/smartfixer" element={<SmartFixer />} />
        <Route path="/wakafoods" element={<Wakafoods />} />
        
        </Routes>
    </>
  )
}

export default App
