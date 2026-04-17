import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Hamburger from '../../assets/hamburger.png'
import './navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <img src={Hamburger} alt="hamburger"/>
      </div>
    </div>
  )
}

export default Navbar