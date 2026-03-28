import { useState } from 'react'
import logo from '../../assets/icons/logo/TMI_logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">
          <img
            src={logo}
            alt="TMI logo"
            className="logo-icon"
          />
          <div className="logo-text">
            <div className="logo-main">TMI</div>
            <div className="logo-subtitle">TUTELA MARINE INC.</div>
          </div>
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          ☰
        </button>
        <div className="header-links">
          <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a className="nav-link" href="#top">Home</a>
            <a className="nav-link" href="#about">About Us</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#principals">Principals</a>
            <a className="nav-link" href="#seafarers">Seafarers</a>
            <a className="nav-link" href="#training">Training</a>
            <a className="nav-link" href="#news">News</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
          <button className="btn btn-primary">Apply Now</button>
        </div>

      </div>
    </header>
  )
}

export default Header