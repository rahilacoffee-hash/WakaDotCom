import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Navbar from '../WakaFoods/Navbar/Navbar'
import Hero from '../WakaFoods/Hero/Hero'
import ScrollToTopButton from '../components/layout/ScrollToTopButton/ScrollToTopButton'

const Stats = lazy(() => import('../WakaFoods/Stats/Stats'))
const TrustedClients = lazy(() => import('../WakaFoods/TrustedClients/TrustedClients'))
const WhyChooseUs = lazy(() => import('../WakaFoods/WhyChooseUs/WhyChooseUs'))
const Dishes = lazy(() => import('../WakaFoods/Dishes/Dishes'))
const Contact = lazy(() => import('../WakaFoods/Contact/Contact'))
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'))
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

const Wakafoods = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <DeferredSection minHeight="180px"><Stats /></DeferredSection>
      <DeferredSection minHeight="260px"><TrustedClients /></DeferredSection>
      <DeferredSection minHeight="700px"><WhyChooseUs /></DeferredSection>
      <DeferredSection minHeight="600px"><Dishes /></DeferredSection>
      <DeferredSection minHeight="500px"><Contact /></DeferredSection>
      <DeferredSection minHeight="550px"><Testimonials /></DeferredSection>
      <DeferredSection minHeight="300px"><Footer /></DeferredSection>
      <ScrollToTopButton/>
    </>
  )
}

export default Wakafoods
