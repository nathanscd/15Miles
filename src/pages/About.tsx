import React from 'react';
import Portal from '../components/Portal.tsx';
import './style/About.css';

const About: React.FC = () => {
  return (
    <main className="about-v2">
      <header className="page-header-v2 container reveal">
        <span className="tagline">SINCE 2024</span>
        <h1>THE <span className="glow-text">STUDIO</span></h1>
      </header>

      <section className="interior-section container reveal">
        <div className="interior-content">
          <div className="interior-text">
            <h2>OUR PHILOSOPHY</h2>
            <p>
              We believe that software is the most powerful tool ever created. 
              Our mission is to ensure that tool is used to build bridges, 
              not walls. We travel the extra 15 miles to ensure every detail 
              is perfect.
            </p>
          </div>
          <div className="interior-image glass-card">
             {/* High-tech placeholder image concept */}
             <div className="tech-placeholder">OPERATIONAL // ALPHA</div>
          </div>
        </div>
      </section>

      <Portal className="portal-vision">
        <div className="portal-inner">
          <span className="portal-label">THE VISION</span>
          <h2>A UNIVERSE OF <span className="blue-text">POSSIBILITY</span></h2>
          <p className="portal-desc">
            We are building the future, one coordinate at a time. 
            From startups to interstellar enterprises, we provide the 
            technical foundation for growth.
          </p>
        </div>
      </Portal>
    </main>
  );
};

export default About;
