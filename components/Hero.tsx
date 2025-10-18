
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Remove Image Background Instantly
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Upload your photo and get a perfect transparent background in seconds — 100% automatic.
        </p>
        <div className="mt-10">
          <a href="#upload-section" className="bg-accent text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-accent-dark transition-transform transform hover:scale-105">
            Upload Image
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
