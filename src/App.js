// ─────────────────────────────────────────────────────────────
//  App.js — Pawfect Root Component
//
//  Week 1: Navbar, Hero, About ✅
//  Week 2: Services, Pricing, Gallery ✅
//  Week 3: Testimonials, FAQ, Contact, Footer 🔜
// ─────────────────────────────────────────────────────────────

import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;