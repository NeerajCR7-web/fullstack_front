import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
