import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Legend from './components/Legend';
import TodaySection from './components/TodaySection';
import CodeSection from './components/CodeSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Legend />
      <TodaySection />
      <CodeSection />
      <Footer />
    </div>
  );
}

export default App;
