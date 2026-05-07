import React from 'react';
import Section from '../components/Section.tsx';
import './style/Contact.css';

const Contact: React.FC = () => {
  return (
    <main className="contact-page">
      <header className="page-header container">
        <div className="tag reveal">SIGNAL STRENGTH: 100%</div>
        <h1 className="reveal">INITIATE <span className="glow-text">CONTACT</span></h1>
        <p className="reveal">Ready to launch your project into orbit?</p>
      </header>

      <Section 
        label="COMMUNICATION MODULE" 
        title="TRANSMIT MESSAGE"
      >
        <div className="contact-grid">
          <div className="contact-form-container">
            <form className="tech-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-wrap">
                  <label>IDENTIFIER</label>
                  <input type="text" placeholder="YOUR NAME / COMPANY" />
                </div>
                <div className="input-wrap">
                  <label>RETURN CHANNEL</label>
                  <input type="email" placeholder="EMAIL@PROTOCOL.COM" />
                </div>
              </div>
              <div className="input-wrap">
                <label>MISSION DETAILS</label>
                <textarea placeholder="DESCRIBE YOUR TECHNICAL REQUIREMENTS..."></textarea>
              </div>
              <button type="submit" className="btn-primary">TRANSMIT SIGNAL</button>
            </form>
          </div>
          
          <div className="contact-sidebar">
            <div className="sidebar-box glass">
              <h4>DIRECT UPLINK</h4>
              <p>EMAIL: HELLO@15MILES.TECH</p>
              <p>SECURE: ENCRYPTED_GPG</p>
            </div>
            <div className="sidebar-box glass">
              <h4>LOCATION</h4>
              <p>REMOTE OPERATIONS</p>
              <p>UTC: +00:00</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
