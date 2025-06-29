import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types'

const sectionIds = [
  'home',
  'about',
  'skills',
  'organizations',
  'experience',
  'work',
  'contact'
];

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const [activeSection, setActiveSection] = useState('home');

    // Scrollspy effect
    useEffect(() => {
      const handleScroll = () => {
        let found = false;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const section = document.getElementById(sectionIds[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 80) { // 80px offset for header
              setActiveSection(sectionIds[i]);
              found = true;
              break;
            }
          }
        }
        if (!found) setActiveSection('home');
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Move the active box
    useEffect(() => {
      const activeLink = document.querySelector('.nav-link.active');
      if (activeLink && activeBox.current) {
        activeBox.current.style.top = activeLink.offsetTop + 'px';
        activeBox.current.style.left = activeLink.offsetLeft + 'px';
        activeBox.current.style.width = activeLink.offsetWidth + 'px';
        activeBox.current.style.height = activeLink.offsetHeight + 'px';
      }
    }, [activeSection, navOpen]);

    const navItems = [  
        { label: 'Home', link: '#home' },
        { label: 'About', link: '#about' },
        { label: 'Skills', link: '#skills' },
        { label: 'Organizations', link: '#organizations' },
        { label: 'Experience', link: '#experience' },
        { label: 'Work', link: '#work' },
        { label: 'Contact', link: '#contact', className: 'md:hidden' }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            { 
                navItems.map(({ label, link, className }, key) => (
                    <a
                        href={link}
                        className={
                          'nav-link' +
                          (activeSection === link.replace('#', '') ? ' active' : '') +
                          (className ? ' ' + className : '')
                        }
                        key={key}
                    >
                        {label}
                    </a>
                ))   
            }
            <div className="active-box " ref={activeBox}></div>
        </nav>
    )
}

Navbar.propTypes = {
    Navbar: PropTypes.bool.isRequired
}
export default Navbar