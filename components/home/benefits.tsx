import React from 'react';
import { Card } from '@/components/ui/card';

export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Real-Time Access',
      description: 'View your contributions and loan status anytime, anywhere with instant updates.',
      colorClass: 'bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white',
      borderColor: 'hover:border-primary-200',
    },
    {
      icon: (
        <svg className="w-8 h-8 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Automatic Eligibility',
      description: 'Know your loan limit instantly—no guesswork or waiting for manual calculations.',
      colorClass: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      borderColor: 'hover:border-green-200',
    },
    {
      icon: (
        <svg className="w-8 h-8 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure & Accurate',
      description: 'All records stored safely with full audit history and automatic calculations.',
      colorClass: 'bg-accent-50 text-accent-600 group-hover:bg-accent-600 group-hover:text-white',
      borderColor: 'hover:border-accent-200',
    },
    {
      icon: (
        <svg className="w-8 h-8 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile & Web Access',
      description: 'Use from your phone or computer with a responsive design that works everywhere.',
      colorClass: 'bg-secondary-50 text-secondary-600 group-hover:bg-secondary-500 group-hover:text-white',
      borderColor: 'hover:border-secondary-200',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-aos="fade-up">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-accent-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of our modern cooperative management system designed for efficiency and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`group text-center hover:shadow-xl transition-all duration-300 border-transparent hover:-translate-y-1 ${benefit.borderColor}`}
              colorSchema="muted"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300 ${benefit.colorClass}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}