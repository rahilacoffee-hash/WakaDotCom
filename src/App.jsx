import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/layout/ScrollToTop'
import WakaDotCom from './Pages/WakaDotCom'
import SmartFixer from './Pages/SmartFixer'

const App = () => {
  return (
    <>
    <ScrollToTop />
       <Routes>
        <Route path="/" element={<WakaDotCom />} />
        <Route path="/smartfixer" element={<SmartFixer />} />
        
        </Routes>
    </>
  )
}

export default App
