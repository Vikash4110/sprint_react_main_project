import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/sprint-logo-white.svg';
import changedLogo from './assets/changedlogo.svg';
import './Nav.css';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [bgColor, setBgColor] = useState('#ffffff'); // Default to white
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.querySelector('.unique.problems');
      if (section1) {
        const section1Height = section1.offsetHeight;
        if (window.scrollY > section1Height) {
          setBgColor('#F7F7F7');
        } else {
          setBgColor('#2a2a2a');
        }
      } else {
        setBgColor('#ffffff'); // Default to white if section1 doesn't exist
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll on mount to set the initial background color
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Change the background color instantly when the route changes
    const section1 = document.querySelector('.unique.problems');
    if (section1) {
      const section1Height = section1.offsetHeight;
      if (window.scrollY > section1Height) {
        setBgColor('#F7F7F7');
      } else {
        setBgColor('#2a2a2a');
      }
    } else {
      setBgColor('#ffffff'); // Default to white if section1 doesn't exist
    }

    // Close the hamburger menu on route change
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (open) => {
    setIsDropdownOpen(open);
  };

  const navbarClass = bgColor === '#2a2a2a' ? 'navbar-dark' : '';
  const textColor = bgColor === '#2a2a2a' ? 'white' : 'black';
  const underlineColor = bgColor === '#2a2a2a' ? 'white' : 'black';

  const getLogo = () => {
    return bgColor === '#2a2a2a' ? logo : changedLogo;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 p-4 transition-colors duration-300 ${navbarClass}`} style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to='/' className="text-black text-xl font-bold">
            <img src={getLogo()} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center space-x-8" style={{ color: textColor, '--underline-color': underlineColor }}>
            <Link to="/about" className="underline-animation font-bold">About</Link>
            <Link to="/services" className="underline-animation font-bold">Services</Link>
            <Link to="/projects" className="underline-animation font-bold">Projects</Link>
            <div className="relative group">
              <button
                onMouseEnter={() => toggleDropdown(true)}
                onMouseLeave={() => toggleDropdown(false)}
                className="focus:outline-none flex items-center font-bold"
              >
                Resources
                <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute w-44 bg-[#2a2a2a] rounded-md z-10" onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)}>
                  <Link to="/articles" className="block px-4 py-2 underline-animation font-bold" style={{ backgroundColor: bgColor === '#2a2a2a' ? '#2a2a2a' : '#ffffff' }}>Articles</Link>
                  <Link to="/savingcalculator" className="block px-4 py-2 underline-animation font-bold" style={{ backgroundColor: bgColor === '#2a2a2a' ? '#2a2a2a' : '#ffffff' }}>Savings Calculator</Link>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#0DC9C5] text-white px-5 py-3 rounded-full hover:bg-[#0DC9C1] font-medium">
              <Link to="/contact" className="text-white">Contact</Link>
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4" style={{ color: textColor, '--underline-color': underlineColor }}>
            <Link to="/about" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/projects" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Projects</Link>
            <div className="relative">
              <button
                onMouseEnter={() => toggleDropdown(true)}
                onMouseLeave={() => toggleDropdown(false)}
                className="w-full text-left focus:outline-none flex items-center font-bold"
              >
                Resources
                <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="w-44 bg-white rounded-md z-10 " onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)}>
                  <Link to="/articles" className="block px-4 py-2 underline-animation font-bold" style={{ backgroundColor: bgColor === '#2a2a2a' ? '#2a2a2a' : '#ffffff' }} onClick={() => setIsOpen(false)}>Articles</Link>
                  <Link to="/savingcalculator" className="block px-4 py-2 underline-animation font-bold" style={{ backgroundColor: bgColor === '#2a2a2a' ? '#2a2a2a' : '#ffffff' }} onClick={() => setIsOpen(false)}>Savings Calculator</Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="block underline-animation font-bold" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
 