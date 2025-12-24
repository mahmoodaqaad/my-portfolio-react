import React, { useContext, useEffect, useRef, useState } from 'react';
import './Header.css';
import { MyContext } from '../../context/MyState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [acvtiveHeader, setActiveHeader] = useState(false);
  const [acvtiveHeaderMedia, setActiveHeaderMedia] = useState(false);
  const header = useRef();
  const { setDarkMode, darkMode, activeState } = useContext(MyContext)


  function handleActive(e) {
    e.target.parentElement.querySelectorAll("a").forEach(e => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");

  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        header.current.classList.add("headerActive");

        setActiveHeader(true)
      } else {
        header.current.classList.remove("headerActive");
        setActiveHeader(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف event listener عند إلغاء التثبيت
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll(".navLink").forEach(ele => {
      ele.classList.remove("active")
      if (ele.classList.contains(activeState)) {
        
        ele.classList.add("active")
      }
})

   }, [activeState]);
  return (
    <div className={`header d-flex justify-content-between px-3 py-3 ${acvtiveHeader && "shadow"}`} ref={header} >
      <div className="logo py-1 px-2">
        <NavLink to={"/"}><h1>Portfolio</h1></NavLink>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-2 ">
        <div className={`navLink d-flex justify-content-center align-items-center gap-2 ${acvtiveHeaderMedia && "active"}`}>
          <Link onClick={handleActive} className='Home pointer px-2 py-1 active' to="home" smooth={true} duration={500} offset={-156}>Home</Link>
          <Link onClick={handleActive} className='abouts pointer px-2 py-1' to="about" smooth={true} duration={500} offset={-50}>About Me</Link>
          <Link onClick={handleActive} className='Skills pointer px-2 py-1' to="skills" smooth={true} duration={500} offset={-50}>Skills</Link>
          <Link onClick={handleActive} className='Projects pointer px-2 py-1' to="projects" smooth={true} duration={500} offset={-150}>Projects</Link>
          <Link onClick={handleActive} className='Contact pointer px-2 py-1' to="contact" smooth={true} duration={500} offset={-100}>Contact Me</Link>
        </div>
        <div className='mode px-2 py-1 pointer' onClick={() => setDarkMode(prev => !prev)}><FontAwesomeIcon icon={darkMode ? faSun : faMoon} /></div>
        <div className='bar px-2 py-1 pointer d-block d-lg-none' onClick={() => { setActiveHeaderMedia(prev => !prev) }}><FontAwesomeIcon icon={faBars} /></div>

      </div>
    </div>
  );
};

export default Header;
