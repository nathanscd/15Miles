import React from 'react';
import Portal from '../components/Portal.tsx';
import './style/Contact.css';

const Contact: React.FC = () => {
  return (
    <main className="contact-v2">
      <header className="page-header-v2 container reveal">
        <span className="tagline">GET IN TOUCH</span>
        <h1>INITIATE <span className="glow-text">CONTACT</span></h1>
      </header>

      <section className="contact-form-v2 container reveal">
        <div className="contact-layout">
          <form className="form-white" onSubmit={(e) => e.preventDefault()}>
            <div className="field-group">
              <label>YOUR NAME</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="field-group">
              <label>YOUR EMAIL</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="field-group">
              <label>MESSAGE</label>
              <textarea placeholder="How can we help your mission?"></textarea>
            </div>
            <button className="btn-primary">Send Signal</button>
          </form>

          <div className="contact-info-white">
            <div className="info-block">
              <h3>DIRECT</h3>
              <p>hello@15miles.tech</p>
            </div>
            <div className="info-block">
              <h3>SOCIAL</h3>
              <p>@15miles_studio</p>
            </div>
          </div>
        </div>
      </section>

      <Portal className="portal-signal">
        <div className="portal-inner">
          <span className="portal-label">OPERATIONAL STATUS</span>
          <h2>ALL SYSTEMS <span className="blue-text">GO</span></h2>
          <p className="portal-desc">We respond to all signals within 15 Earth hours.</p>
        </div>
      </Portal>
    </main>
  );
};

export default Contact;
