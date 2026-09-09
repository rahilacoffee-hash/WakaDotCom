import React from 'react'
import Navbar from '../WakaStores/Navbar/Navbar'    
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Hero from '../WakaStores/Hero/Hero'
import useAppReady from '../hooks/Useappready'

const WakaStores = () => {
  useAppReady()

  return (
    <>
      <Navbar/>
      <Hero/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default WakaStores
