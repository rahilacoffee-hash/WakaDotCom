import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Navbar from '../WakaRider/Navbar/Navbar'
import Hero from '../WakaRider/Hero/Hero'
import ScrollToTopButton from '../components/layout/ScrollToTopButton/ScrollToTopButton'
import TrustedPartners from '../WakaRider/TrustedPartners/TrustedPartners'
import WhyChooseUs from '../WakaRider/WhyChooseUs/WhyChooseUs'
import GetApp from '../WakaRider/GetApp/GetApp'
import DeliveryProducts from '../WakaRider/DeliveryProducts/DeliveryProducts'

const Professionals = lazy(() => import('../WakaRider/Professionals/Professionals'))
const Contact = lazy(() => import('../WakaRider/Contact/Contact'))
const Testimonials = lazy(() => import('../Smartfixer/Testimonials/Testimonials'))
const Footer = lazy(() => import('../components/Footer/Footer'))

function DeferredSection({ children, minHeight }) {
  const sectionRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true)
        observer.disconnect()
      }
    }, { rootMargin: '400px 0px' })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ minHeight: shouldLoad ? undefined : minHeight }}>
      {shouldLoad && <Suspense fallback={null}>{children}</Suspense>}
    </section>
  )
}

const WakaRider = () => {
  return (
    <>
      <Navbar/>
      <Hero/>

      <DeferredSection minHeight="260px"><TrustedPartners /></DeferredSection>
      <DeliveryProducts />
      <DeferredSection minHeight="800px"><Professionals /></DeferredSection>
      <DeferredSection minHeight="400px"><GetApp /></DeferredSection>
        <DeferredSection minHeight="700px"><WhyChooseUs /></DeferredSection>
      <DeferredSection minHeight="400px"><GetApp /></DeferredSection>
      <DeferredSection minHeight="500px"><Contact /></DeferredSection>
      <DeferredSection minHeight="550px"><Testimonials /></DeferredSection>
      <DeferredSection minHeight="300px"><Footer /></DeferredSection>
      <ScrollToTopButton/>
    </>
  )
}

export default WakaRider
