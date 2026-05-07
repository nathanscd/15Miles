import React from 'react';
import './Style/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="brand-name">FIFTEEN MILES</span>
          <p className="brand-tagline">INTERSTELLAR TECH STUDIO</p>
        </div>
        
        <div className="footer-metadata">
          <div className="metadata-item">
            <span className="meta-label">STATUS:</span>
            <span className="meta-value glow-text">OPERATIONAL</span>
          </div>
          <div className="metadata-item">
            <span className="meta-label">COORD:</span>
            <span className="meta-value">40.7128° N, 74.0060° W</span>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© {currentYear} 15MILES. ALL SYSTEMS GO.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
