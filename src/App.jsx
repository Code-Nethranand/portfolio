import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/Skill"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from "lenis/react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);


const App = () => {
  
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    
    elements.forEach((elements) => {
      gsap.to(elements, {
        scrollTrigger:{
          trigger: elements,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity:1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App