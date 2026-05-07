import React from 'react';
import Portal from '../components/Portal.tsx';
import './style/Services.css';

const services = [
  {
    id: "01",
    title: "TECHNICAL ARCHITECTURE",
    desc: "Designing the skeleton of high-performance ecosystems. We specialize in modular, scalable, and secure infrastructures.",
    specs: ["MICROSERVICES", "CLOUD NATIVE", "SERVERLESS"]
  },
  {
    id: "02",
    title: "PRODUCT ENGINEERING",
    desc: "Turning vision into robust software. We build with the latest technologies to ensure longevity and speed.",
    specs: ["RUST / GO", "REACT / NEXT.JS", "TYPESCRIPT"]
  },
  {
    id: "03",
    title: "DIGITAL EXPERIENCES",
    desc: "Award-winning interfaces that captivate and convert. We push the boundaries of what is possible on the web.",
    specs: ["WEBGL", "FRAMER MOTION", "A11Y"]
  }
];

const Services: React.FC = () => {
  return (
    <main className="services-v2">
      <header className="page-header-v2 container reveal">
        <span className="tagline">CORE CAPABILITIES</span>
        <h1>MISSION <span className="glow-text">CONTROL</span></h1>
        <p className="header-subtitle">Advanced engineering for enterprises that aim for the stars.</p>
      </header>

      {services.map((service) => (
        <Portal key={service.id} className="service-portal">
          <div className="service-portal-content">
            <span className="portal-num">SECTOR {service.id}</span>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <div className="portal-specs">
              {service.specs.map((spec, i) => (
                <span key={i} className="spec-tag">{spec}</span>
              ))}
            </div>
          </div>
        </Portal>
      ))}

      <section className="cta-section container reveal">
        <h2>READY TO <span className="glow-text">IGNITE</span>?</h2>
        <p>Your technical journey begins with a single coordinate.</p>
        <button className="btn-primary">Initiate Contact</button>
      </section>
    </main>
  );
};

export default Services;
