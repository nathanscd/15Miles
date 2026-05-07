import React from 'react';
import Section from '../components/Section.tsx';
import './style/About.css';

const About: React.FC = () => {
  return (
    <main className="about-page">
      <header className="page-header container">
        <div className="tag reveal">ESTABLISHED 2024</div>
        <h1 className="reveal">THE <span className="glow-text">STUDIO</span></h1>
        <p className="reveal">Navigating the complexities of modern engineering.</p>
      </header>

      <Section 
        label="LOG: ORIGIN" 
        title="BEYOND THE HORIZON"
      >
        <div className="about-content-grid">
          <div className="about-narrative">
            <p className="large-text">
              15Miles was founded on the principle that technical excellence is not a destination, 
              but a continuous journey. In an industry that often cuts corners, 
              we chose to travel the extra distance.
            </p>
            <p>
              Based in the digital frontier, we partner with visionaries to build 
              software that doesn't just work—it transcends.
            </p>
          </div>
          <div className="about-values glass">
            <div className="value-item">
              <h4>PRECISION</h4>
              <p>Every line of code is an instrument. We tune our systems for peak performance.</p>
            </div>
            <div className="value-item">
              <h4>VELOCITY</h4>
              <p>Moving fast without breaking things. Optimized workflows for rapid deployment.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section 
        label="LOG: PHILOSOPHY" 
        title="ANTIGRAVITY TECH"
      >
        <div className="philosophy-grid">
          <div className="phi-card glass">
            <span className="phi-number">01</span>
            <h3>REMOVE FRICTION</h3>
            <p>Software should feel weightless. We eliminate the friction in user experiences.</p>
          </div>
          <div className="phi-card glass">
            <span className="phi-number">02</span>
            <h3>STABLE ORBIT</h3>
            <p>Reliability is our baseline. Our systems are built to withstand the void.</p>
          </div>
          <div className="phi-card glass">
            <span className="phi-number">03</span>
            <h3>INFINITE SCALE</h3>
            <p>From one user to millions. Our architectures are designed for galactic growth.</p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;
