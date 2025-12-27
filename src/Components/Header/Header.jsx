import React, { useContext, useEffect, useRef, useState } from 'react';
import './Header.css';
import { MyContext } from '../../context/MyState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setDarkMode, darkMode } = useContext(MyContext);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', offset: -100 },
    { name: 'About', to: 'about', offset: -50 },
    { name: 'Skills', to: 'skills', offset: -50 },
    { name: 'Projects', to: 'projects', offset: -50 },
    { name: 'Contact', to: 'contact', offset: -50 }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="logo">
          <NavLink to="/">
            <h1 className="m-0">M<span>A.</span></h1>
          </NavLink>
        </div>

        <nav className=" d-none d-lg-flex align-items-center gap-4">
          {isHomePage ? (
            navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={link.offset}
                className="nav-item"
                // activeClass="active"
                spy={true}
              >
                {link.name}
              </Link>
            ))
          ) : (
            <NavLink to="/" className="nav-item">Back to Home</NavLink>
          )}

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </nav>

        <div className="mobile-actions d-flex d-lg-none align-items-center gap-3">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav d-lg-none"
          >
            <div className="container py-4 d-flex flex-column gap-3">
              {isHomePage ? (
                navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={link.offset}
                    className="nav-item-mobile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))
              ) : (
                <NavLink to="/" className="nav-item-mobile" onClick={() => setIsMobileMenuOpen(false)}>Back to Home</NavLink>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
