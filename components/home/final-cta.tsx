'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Ready to Manage Your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-200">
            Cooperative Account
          </span> Digitally?
        </h2>
        
        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of NDC staff members who are already experiencing the ease of automated contributions and instant loan processing.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
          <Button
            size="lg"
            variant="solid"
            className="bg-white text-primary-900 hover:bg-primary-50 font-bold px-8 py-6 text-lg shadow-xl shadow-primary-900/20 transition-transform hover:-translate-y-1"
            onClick={() => console.log('Log In clicked')}
          >
            Log In to Dashboard
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-200 text-primary-100 hover:bg-white/10 hover:text-white hover:border-white font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all"
            onClick={() => console.log('Register clicked')}
          >
            New Staff? Register Here
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-primary-200/80" data-aos="fade-up" data-aos-delay="600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Secure Platform</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-primary-500 rounded-full"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Instant Updates</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-primary-500 rounded-full"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Mobile Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}