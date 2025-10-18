
import React from 'react';
import { CheckIcon } from './Icons';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the plan that's right for you.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Free Plan */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800">Free</h3>
            <p className="mt-2 text-gray-500">For personal and trial use.</p>
            <p className="mt-6 text-4xl font-bold text-gray-900">
              $0 <span className="text-lg font-medium text-gray-500">/ month</span>
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <span className="ml-3 text-gray-600">1 Free Credit</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <span className="ml-3 text-gray-600">Standard Resolution</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <span className="ml-3 text-gray-600">Limited Previews</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors">
              Get Started for Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border-2 border-accent relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-accent text-white px-8 py-1 font-bold text-sm transform rotate-45 translate-x-10 translate-y-4">POPULAR</div>
            <h3 className="text-2xl font-semibold text-accent">Pro</h3>
            <p className="mt-2 text-gray-500">For professionals and businesses.</p>
            <p className="mt-6 text-4xl font-bold text-gray-900">
              $9 <span className="text-lg font-medium text-gray-500">/ month</span>
            </p>
            <ul className="mt-8 space-y-4">
               <li className="flex items-center">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <span className="ml-3 text-gray-600">40 Credits / Month</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <span className="ml-3 text-gray-600">High Resolution Downloads</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <span className="ml-3 text-gray-600">API Access</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-6 h-6 text-green-500" />
                <span className="ml-3 text-gray-600">Priority Support</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent-dark transition-colors">
              Go Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
