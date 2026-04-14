import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Style/Header.css';

const Header = () => {

  return (
      <nav className='header'>
        <Link to="/" className='name'>
          <img src="logo.svg" />
        </Link>

        <div className="desktop-menu">
          <Link to='/' className="nav-link" data-replace="Home"><span>Home</span></Link>
          <Link to='/about' className="nav-link" data-replace="About"><span>About</span></Link>
          <Link to='/products' className="nav-link" data-replace="Products"><span>Products</span></Link>
          <Link to='/buy' className="nav-link" data-replace="Buy"><span>Buy</span></Link>
          <Link to='/contact' className="nav-link" data-replace="Contact"><span>Contact</span></Link>
        </div>
      </nav>
  )
};

export default Header;