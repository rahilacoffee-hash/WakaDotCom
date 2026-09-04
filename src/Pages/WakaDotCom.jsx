import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact'

const Stats = lazy(() => import('../components/Stats/Stats'))
const SmartFixer = lazy(() => import('../components/SmartFixer/SmartFixer'))
const HowSmartFixerWorks = lazy(() => import('../components/SmartFixer/HowSmartFixerWorks'))
const EcosystemSection = lazy(() => import('../components/EcosystemSection/EcosystemSection'))
const AboutWakaDotCom = lazy(() => import('../components/AboutWakaDotCom/AboutWakaDotCom'))
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'))
const Footer = lazy(() => import('../components/Footer/Footer'))

function DeferredSection({ children, minHeight }) {
  const sectionRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ minHeight: shouldLoad ? undefined : minHeight }}>
      {shouldLoad && <Suspense fallback={null}>{children}</Suspense>}
    </section>
  )
}

const WakaDotCom = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <DeferredSection minHeight="180px"><Stats/></DeferredSection>
     <DeferredSection minHeight="700px"><SmartFixer/></DeferredSection>
     <DeferredSection minHeight="700px"><HowSmartFixerWorks/></DeferredSection>
     <DeferredSection minHeight="700px"><EcosystemSection/></DeferredSection>
     <DeferredSection minHeight="600px"><AboutWakaDotCom/></DeferredSection>
     <DeferredSection minHeight="600px"><Contact/></DeferredSection>
     <DeferredSection minHeight="550px"><Testimonials/></DeferredSection>
     <DeferredSection minHeight="300px"><Footer/></DeferredSection>
    </>
  )
}

export default WakaDotCom
