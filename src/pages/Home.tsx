import React from 'react';
import Portal from '../components/Portal.tsx';
import './style/Home.css';

const Home: React.FC = () => {
  return (
    <main className="home-v2">
      {/* HERO - SPACESHIP INTERIOR (WHITE) */}
      <section className="hero-v2 container">
        <div className="hero-content-v2 reveal">
          <span className="tagline">SINCE 2024 // ALPHA RELEASE</span>
          <h1>THE EXTRA <span className="glow-text">15 MILES</span></h1>
          <p>
            An interstellar studio specializing in technical perfection. 
            We build high-performance software that operates beyond the gravity of common standards.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Initiate Launch</button>
          </div>
        </div>
      </section>

      {/* PORTAL 1 - THE DISCOVERY WINDOW */}
      <Portal className="portal-main">
        <div className="portal-inner">
          <span className="portal-label">SECTOR 01 // ARCHITECTURE</span>
          <h2>WINDOWS INTO <span className="blue-text">TOMORROW</span></h2>
          <p className="portal-desc">
            We don't just build websites. We create digital ecosystems that are 
            as stable as a fixed orbit and as fast as a solar flare.
          </p>
          <div className="portal-grid">
            <div className="portal-card">
              <span className="card-num">01</span>
              <h3>VELOCITY</h3>
              <p>Optimized architectures for sub-millisecond response times.</p>
            </div>
            <div className="portal-card">
              <span className="card-num">02</span>
              <h3>PRECISION</h3>
              <p>Calculated engineering that removes technical friction.</p>
            </div>
          </div>
        </div>
      </Portal>

      {/* INTERIOR - STABLE ORBIT */}
      <section className="interior-section container reveal">
        <div className="interior-content">
          <div className="interior-text">
            <h2>STABLE <span className="glow-text">ORBIT</span></h2>
            <p>
              Your mission is our priority. While we push the boundaries of 
              innovation, our systems remain anchored in reliability, security, 
              and absolute performance.
            </p>
          </div>
          <div className="interior-stats">
            <div className="stat-item">
              <span className="stat-num">99.9%</span>
              <span className="stat-name">UPTIME</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">15ms</span>
              <span className="stat-name">LATENCY</span>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAL 2 - THE SCALE WINDOW */}
      <Portal className="portal-scale">
        <div className="portal-inner">
          <span className="portal-label">SECTOR 02 // PERFORMANCE</span>
          <h2>UNLIMITED <span className="blue-text">SCALE</span></h2>
          <p className="portal-desc">
            Built to withstand the void. Our serverless infrastructures 
            scale from zero to millions without breaking orbit.
          </p>
        </div>
      </Portal>
    </main>
  );
};

export default Home;
