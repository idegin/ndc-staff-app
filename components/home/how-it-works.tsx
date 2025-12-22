import React from 'react';
import { Card } from '@/components/ui/card';

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Register',
      description: 'Create your account with your staff ID and basic information.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      color: 'bg-primary-500',
      lightColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
    },
    {
      step: 2,
      title: 'View Dashboard',
      description: 'Access your personal dashboard to see contributions and loan eligibility.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-accent-500',
      lightColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
    },
    {
      step: 3,
      title: 'Apply for Loans',
      description: 'Submit loan applications online and track their status in real-time.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'bg-secondary-500',
      lightColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="200">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Simple Process</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with our simple 3-step process to manage your cooperative account.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group" data-aos="slide-up" data-aos-delay={300 + index * 200}>
              <div className="flex flex-col items-center text-center">
                {/* Step Icon Circle */}
                <div className={`w-24 h-24 rounded-full ${step.lightColor} flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-110 border-4 border-white shadow-lg`}>
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-md`}>
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-md">
                    {step.step}
                  </div>
                </div>

                <Card className={`w-full h-full border-t-4 ${step.borderColor} hover:shadow-lg transition-shadow duration-300`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}