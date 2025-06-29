import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/Skill"
import Organization from "./components/Organization"
import Experience from "./components/Experience"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BrowserCheck from "./components/BrowserCheck"
import { Analytics } from "@vercel/analytics/react"
import { ReactLenis } from "lenis/react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";

// Register GSAP plugins with error handling
try {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
} catch (error) {
  console.warn('GSAP plugin registration failed:', error);
}

const App = () => {
  
  useGSAP(() => {
    try {
      const elements = gsap.utils.toArray('.reveal-up')
      
      elements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger:{
            trigger: element,
            start: '-200 bottom',
            end: 'bottom 80%',
            scrub: true,
            toggleActions: "play none none reverse"
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        })
      });
    } catch (error) {
      console.warn('GSAP animation setup failed:', error);
      // Apply fallback class to all reveal-up elements
      const fallbackElements = document.querySelectorAll('.reveal-up');
      fallbackElements.forEach(element => {
        element.classList.add('fallback');
      });
    }
  }, []);

  // Fallback for browsers that don't support GSAP
  useEffect(() => {
    const fallbackElements = document.querySelectorAll('.reveal-up');
    // Add a small delay to ensure GSAP has time to initialize
    const timeoutId = setTimeout(() => {
      fallbackElements.forEach(element => {
        if (!element.classList.contains('fallback')) {
          element.classList.add('fallback');
        }
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ThemeProvider>
      <BrowserCheck />
      <ReactLenis root options={{ 
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}>
        <Analytics />
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Organization />
          <Experience />
          <Work />
          <Contact />
        </main>
        <Footer />
      </ReactLenis>
    </ThemeProvider>
  )
}

export default App