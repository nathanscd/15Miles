import React from 'react';
import Section from '../components/Section.tsx';
import './style/Home.css';

const Home: React.FC = () => {
  return (
    <main className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <div className="tag reveal">SYSTEM STATUS: NOMINAL</div>
          <h1 className="hero-title reveal">
            ENGINEERING THE <span className="glow-text">FUTURE</span> OF DIGITAL SPACE
          </h1>
          <p className="hero-description reveal">
            15Miles is an interstellar tech studio specialized in high-performance software 
            and award-winning digital experiences. We remove the gravity of technical debt.
          </p>
          <div className="hero-cta reveal">
            <button className="btn-primary">Initiate Project</button>
            <button className="btn-ghost">View Portfolio</button>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <Section 
        label="MISSION LOG 001" 
        title="WE GO THE EXTRA MILE"
        id="mission"
      >
        <div className="mission-grid">
          <div className="mission-text">
            <p className="large-text">
              Our name isn't just a label; it's our standard. 
              While others stop at the orbit, we travel the extra 15 miles to ensure 
              your software is flawless, scalable, and technically superior.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-card glass">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">UPTIME TARGET</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-value">15ms</span>
              <span className="stat-label">AVG LATENCY</span>
            </div>
          </div>
        </div>
      </Section>

      {/* TECH SPECS SECTION */}
      <Section 
        label="TECH SPECS" 
        title="ADVANCED STACK"
        id="tech"
      >
        <div className="tech-specs-grid">
          <div className="tech-item glass">
            <span className="tech-label">01 //</span>
            <h3>CORE DEVELOPMENT</h3>
            <p>Scalable architectures built with Rust, Go, and TypeScript.</p>
          </div>
          <div className="tech-item glass">
            <span className="tech-label">02 //</span>
            <h3>CLOUD INFRA</h3>
            <p>Automated deployment pipelines and serverless scale.</p>
          </div>
          <div className="tech-item glass">
            <span className="tech-label">03 //</span>
            <h3>UI/UX ENGINE</h3>
            <p>Immersive interfaces that redefine user interaction.</p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;
