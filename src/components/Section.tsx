import React from 'react';
import './Style/Section.css';

interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, label, title, children, className = "" }) => {
  return (
    <section id={id} className={`hud-section ${className}`}>
      <div className="container">
        {label && (
          <div className="section-label reveal">
            <span className="label-text">{label}</span>
          </div>
        )}
        {title && <h2 className="section-title reveal">{title}</h2>}
        
        <div className="hud-frame reveal">
          {/* Decorative Corners */}
          <div className="hud-corner hud-corner--tl" />
          <div className="hud-corner hud-corner--tr" />
          <div className="hud-corner hud-corner--bl" />
          <div className="hud-corner hud-corner--br" />
          
          {/* HUD Accents */}
          <div className="hud-accent hud-accent--top" />
          <div className="hud-accent hud-accent--bottom" />
          <div className="hud-scanline" />
          
          <div className="hud-content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
