import React from 'react';
import Section from '../components/Section.tsx';
import './style/Services.css';

interface Service {
  id: string;
  title: string;
  description: string;
  specs: string[];
}

const services: Service[] = [
  {
    id: "01",
    title: "WEB ARCHITECTURE",
    description: "Building high-performance web applications with modular, scalable architectures.",
    specs: ["REACT / NEXT.JS", "TYPESCRIPT", "MICROSERVICES"]
  },
  {
    id: "02",
    title: "CUSTOM SOFTWARE",
    description: "Tailored software solutions designed to solve complex business logic and workflows.",
    specs: ["RUST / GO", "DISTRIBUTED SYSTEMS", "POSTGRESQL"]
  },
  {
    id: "03",
    title: "UI/UX ENGINEERING",
    description: "Converting design vision into pixel-perfect, high-performance interfaces.",
    specs: ["FRAMER MOTION", "WEBGL / CANVAS", "ACCESSIBILITY"]
  },
  {
    id: "04",
    title: "CLOUD SYSTEMS",
    description: "Automated cloud infrastructure that scales globally without friction.",
    specs: ["AWS / GCP", "KUBERNETES", "CI/CD PIPELINES"]
  }
];

const Services: React.FC = () => {
  return (
    <main className="services-page">
      <header className="page-header container">
        <div className="tag reveal">CORE CAPABILITIES</div>
        <h1 className="reveal">TECHNICAL <span className="glow-text">SERVICES</span></h1>
        <p className="reveal">Advanced engineering for the modern digital era.</p>
      </header>

      {services.map((service) => (
        <Section 
          key={service.id} 
          label={`SECTOR ${service.id}`} 
          title={service.title}
          id={`service-${service.id}`}
        >
          <div className="service-detail-grid">
            <div className="service-info">
              <p className="service-desc">{service.description}</p>
            </div>
            <div className="service-specs">
              <h4 className="specs-title">TECHNICAL SPECS:</h4>
              <ul className="specs-list">
                {service.specs.map((spec, sIndex) => (
                  <li key={sIndex} className="spec-item glass">{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}
    </main>
  );
};

export default Services;
