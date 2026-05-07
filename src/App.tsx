import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Header from "./components/Header.tsx";
import Starfield from "./components/Starfield.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./hooks/useReveal.ts";

const AppContent: React.FC = () => {
  useReveal();
  
  return (
    <>
      <Starfield />
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
