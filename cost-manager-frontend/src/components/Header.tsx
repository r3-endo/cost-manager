import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand">
        Childcare Support
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#works" className="nav-link">
            Works
          </a>
        </li>
        <li className="nav-item">
          <a href="#blog" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
