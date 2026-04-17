import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/hamburger.png'
import './navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <img src={Hamburger} alt="hamburger"/>
      </div>
    </div>
  )
}

export default Navbar