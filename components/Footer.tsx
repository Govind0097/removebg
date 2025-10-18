
import React from 'react';
import { LogoIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-gray-800">RemoveAI</span>
            </div>
            <p className="mt-4 text-gray-500 max-w-sm">
              The fastest and most accurate AI background remover for your photos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-accent">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-accent">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} RemoveAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
