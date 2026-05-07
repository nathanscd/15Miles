import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header glass-header">
      <nav className="container nav-content">
        <Link to="/" className="logo">
          15<span className="logo-accent">MILES</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="nav-cta">Let's Talk</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;