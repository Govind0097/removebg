
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadSection from './components/UploadSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UploadSection />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
