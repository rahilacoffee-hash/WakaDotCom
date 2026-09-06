import React from 'react'
import Navbar from '../WakaFoods/Navbar/Navbar'
import Hero from '../WakaFoods/Hero/Hero'
import Stats from '../WakaFoods/Stats/Stats'
import TrustedClients from '../WakaFoods/TrustedClients/TrustedClients'
import WhyChooseUs from '../WakaFoods/WhyChooseUs/WhyChooseUs'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'
import Dishes from '../WakaFoods/Dishes/Dishes'
import Contact from '../WakaFoods/Contact/Contact'
import ScrollToTopButton from '../components/layout/ScrollToTopButton/ScrollToTopButton'

const Wakafoods = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Stats/>
      <TrustedClients/>
      <WhyChooseUs/>
      <Dishes/>
      <Contact/>
      <Testimonials/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default Wakafoods
