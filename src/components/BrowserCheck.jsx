import { useEffect, useState } from 'react';

const BrowserCheck = () => {
  const [browserInfo, setBrowserInfo] = useState({
    isBrave: false,
    userAgent: '',
    hasGSAP: false,
    hasLenis: false,
  });

  useEffect(() => {
    const checkBrowser = () => {
      const userAgent = navigator.userAgent;
      const isBrave = userAgent.includes('Brave') || 
                     (navigator.brave && navigator.brave.isBrave());
      
      const hasGSAP = typeof window !== 'undefined' && window.gsap;
      const hasLenis = typeof window !== 'undefined' && window.Lenis;

      setBrowserInfo({
        isBrave,
        userAgent,
        hasGSAP,
        hasLenis,
      });

      // Log browser info for debugging
      console.log('Browser Info:', {
        isBrave,
        userAgent,
        hasGSAP,
        hasLenis,
      });

      // Apply Brave-specific fixes if needed
      if (isBrave) {
        console.log('Brave browser detected - applying compatibility fixes');
        
        // Force hardware acceleration for better performance
        document.body.style.transform = 'translateZ(0)';
        document.body.style.willChange = 'auto';
        
        // Ensure smooth scrolling works
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', () => {
            // Trigger reflow to ensure smooth scrolling
            document.body.offsetHeight;
          }, { passive: true });
        }
      }
    };

    checkBrowser();
  }, []);

  // Don't render anything, just handle browser detection
  return null;
};

export default BrowserCheck; 