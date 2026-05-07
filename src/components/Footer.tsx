import React from 'react';
import './Style/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-white">
      <div className="container footer-content-v2">
        <div className="footer-brand-v2">
          <span className="brand-name">15MILES</span>
          <p className="brand-tagline">SPACE PORTAL STUDIO</p>
        </div>
        
        <div className="footer-links-v2">
          <div className="link-group">
            <h4>STUDIO</h4>
            <a href="/services">Services</a>
            <a href="/about">About</a>
          </div>
          <div className="link-group">
            <h4>CONTACT</h4>
            <a href="/contact">Get in Touch</a>
            <p>hello@15miles.tech</p>
          </div>
        </div>
        
        <div className="footer-bottom-v2">
          <p>© {currentYear} 15MILES. ALL SYSTEMS OPERATIONAL.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
