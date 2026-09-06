import React from 'react'
import Navbar from '../Smartfixer/Navbar/Navbar'
import Hero from '../Smartfixer/Hero/Hero'
import GetApp from '../Smartfixer/GetApp/GetApp'
import WhyChooseUs from '../Smartfixer/WhyChooseUs/WhyChooseUs'
import HowItWorks from '../Smartfixer/HowItWorks/HowItWorks'
import Professionals from '../Smartfixer/Professionals/Professionals'
import Contact from '../Smartfixer/Contact/Contact'
import Testimonials from '../Smartfixer/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import ScrollToTopButton from '../components/layout/ScrollToTopButton/ScrollToTopButton'


const SmartFixer = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <GetApp/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Professionals/>
      <Contact/>
      <Testimonials/>
      <Footer/>
      <ScrollToTopButton />
    </>
  )
}

export default SmartFixer