
import React from 'react';
import { LogoIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LogoIcon className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold text-gray-800">RemoveAI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-accent transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-accent transition-colors">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-accent transition-colors">API</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-accent font-medium transition-colors">Log in</button>
          <button className="bg-accent text-white font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-accent-dark transition-all">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
