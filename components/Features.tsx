
import React from 'react';
import { ZapIcon, DownloadIcon, CodeIcon, ShieldCheckIcon } from './Icons';

const features = [
  {
    icon: <ZapIcon className="w-8 h-8 text-white" />,
    title: 'High Accuracy',
    description: 'Our AI is trained to handle challenging details like hair and complex edges with precision.',
  },
  {
    icon: <DownloadIcon className="w-8 h-8 text-white" />,
    title: 'Fast Processing',
    description: 'Get your background removed in just a few seconds. No waiting around.',
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    title: 'HD Download',
    description: 'Download your processed images in high resolution, ready for any use case.',
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-white" />,
    title: 'API for Developers',
    description: 'Integrate our background removal technology directly into your own applications.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose RemoveAI?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a powerful and easy-to-use solution for all your background removal needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
