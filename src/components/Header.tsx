import React from 'react';
import { Link } from "react-router-dom";
import './Style/Header.css';

const Header: React.FC = () => {
  return (
    <nav className='header'>
      <Link to="/" className='logo-link'>
        <img src="/15Miles.svg" alt="15Miles Logo" />
        <span className="brand-name">FIFTEEN MILES</span>
      </Link>

      <div className="nav-links">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/services' className="nav-link">Services</Link>
        <Link to='/about' className="nav-link">About</Link>
        <Link to='/contact' className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;