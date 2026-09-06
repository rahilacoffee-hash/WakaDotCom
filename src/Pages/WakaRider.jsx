import React from 'react'
import Navbar from '../WakaRider/Navbar/Navbar'
import Hero from '../WakaRider/Hero/Hero'
import Testimonials from '../Smartfixer/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Contact from '../WakaRider/Contact/Contact'
import Professionals from '../WakaRider/Professionals/Professionals'
import ScrollToTopButton from '../components/layout/ScrollToTopButton/ScrollToTopButton'


const WakaRider = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Professionals/>
      <Contact/>
      <Testimonials/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default WakaRider
