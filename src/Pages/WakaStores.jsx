import React from 'react'
import Navbar from '../WakaStores/Navbar/Navbar'    
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Hero from '../WakaStores/Hero/Hero'
import useAppReady from '../hooks/Useappready'
import Contact from "../WakaStores/Contact/Contact"
import GetApp from '../WakaStores/GetApp/GetApp'
import WhyChooseUs from '../WakaStores/WhyChooseUs/WhyChooseUs'
import CategoriesAndTrending from '../WakaStores/CategoriesAndTrending/CategoriesAndTrending'
import HowItWorks from '../WakaStores/HowItWorks/HowItWorks'

const WakaStores = () => {
  useAppReady()

  return (
    <>
      <Navbar/>
      <Hero/>
      <CategoriesAndTrending/>
      <HowItWorks/>
      <WhyChooseUs/>
      <GetApp/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default WakaStores
