import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Navbar from '../Smartfixer/Navbar/Navbar'
import Hero from '../Smartfixer/Hero/Hero'
import ScrollToTopButton from '../components/layout/ScrollToTopButton/ScrollToTopButton'
import useAppReady from '../hooks/Useappready'

const GetApp = lazy(() => import('../Smartfixer/GetApp/GetApp'))
const WhyChooseUs = lazy(() => import('../Smartfixer/WhyChooseUs/WhyChooseUs'))
const HowItWorks = lazy(() => import('../Smartfixer/HowItWorks/HowItWorks'))
const Professionals = lazy(() => import('../Smartfixer/Professionals/Professionals'))
const Contact = lazy(() => import('../Smartfixer/Contact/Contact'))
const Testimonials = lazy(() => import('../Smartfixer/Testimonials/Testimonials'))
const Footer = lazy(() => import('../components/Footer/Footer'))

function DeferredSection({ children, minHeight, id }) {
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
    <section
      ref={sectionRef}
      id={id}
      className={id ? 'scroll-mt-20' : undefined}
      style={{ minHeight: shouldLoad ? undefined : minHeight }}
    >
      {shouldLoad && <Suspense fallback={null}>{children}</Suspense>}
    </section>
  )
}

const SmartFixer = () => {
  useAppReady()

  return (
    <>
      <Navbar/>
      <Hero/>
      <DeferredSection minHeight="400px"><GetApp /></DeferredSection>
      <DeferredSection id="whychooseus" minHeight="700px"><WhyChooseUs /></DeferredSection>
      <DeferredSection minHeight="650px"><HowItWorks /></DeferredSection>
      <DeferredSection minHeight="800px"><Professionals /></DeferredSection>
       <DeferredSection minHeight="400px"><GetApp /></DeferredSection>
      <DeferredSection id="contact" minHeight="500px"><Contact /></DeferredSection>
      <DeferredSection minHeight="550px"><Testimonials /></DeferredSection>
      <DeferredSection minHeight="300px"><Footer /></DeferredSection>
      <ScrollToTopButton />
    </>
  )
}

export default SmartFixer
