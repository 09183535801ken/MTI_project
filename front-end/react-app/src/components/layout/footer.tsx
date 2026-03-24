import React from 'react';
import { IconGradient, PhoneIcon, EnvelopeIcon } from '../library/IconLibrary';

function Footer() {
  return (
    <footer className="site-footer">
      <IconGradient />
      <div className="site-footer__upper">
        <div className="container footer-grid">
          <div className="footer-col footer-brand">
            <div className="logo">
              <img
                src="/src/assets/TMI_logo.png"
                alt="TMI logo"
                className="logo-icon"
              />
              <div className="logo-text">
                <div className="logo-main gradient-text">TMI</div>
                <div className="logo-subtitle white-text">TUTELA MARINE INC.</div>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h5>Contact Us</h5>
            <address>
              <p><PhoneIcon /> +1 555 1234</p>
              <p><EnvelopeIcon /> support@tmi.example</p>
            </address>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links-list">
              <li><a href="#services">Home</a></li>
              <li><a href="#about">Services</a></li>
              <li><a href="#contact">Principles</a></li>
              <li><a href="#contact">Trainings</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Social Media</h5>
            <ul className="socials">
              <li><a href="#facebook"><img src="/src/assets/icons/facebook.png" alt="Facebook" className="socials-logo" /></a></li>
              <li><a href="#linkedin"><img src="/src/assets/icons/linkedin.png" alt="Linkedin" className="socials-logo" /></a></li>
              <li><a href="#twitter"><img src="/src/assets/icons/twitter.png" alt="Twitter" className="socials-logo" /></a></li>
              <li><a href="#twitter"><img src="/src/assets/icons/whatsapp.png" alt="Whatsapp" className="socials-logo" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__lower">
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Tutela Marine Inc. All rights reserved.</p>
        </div>
        <div className="container footer-bottom">
          <p>www.tutelamarine.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;