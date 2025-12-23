'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-white" data-aos="fade-in">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-100/50 rounded-full blur-3xl opacity-60 -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-100/40 rounded-full blur-3xl opacity-50 -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-6" data-aos="fade-up" data-aos-delay="300">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
              Automated Cooperative Management
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">NDC Staff</span> Financial Growth
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-aos="fade-up" data-aos-delay="500">
              Seamlessly manage your contributions, access loans, and track your financial progress with our secure, automated platform designed exclusively for the National Defense College staff multipurpose cooperative society.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="600">
              <Button
                size="lg"
                colorSchema="primary"
                className="shadow-lg shadow-primary-500/20 text-base px-8"
                onClick={() => console.log('Log In clicked')}
              >
                Access Portal
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorSchema="muted"
                className="text-base px-8 bg-white/80 backdrop-blur-sm"
                onClick={() => console.log('Register clicked')}
              >
                New Member Registration
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8 text-gray-500 text-sm" data-aos="fade-up" data-aos-delay="700">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Secure Data
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Instant Processing
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-200/50">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern office workspace with people collaborating"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 -right-6 lg:-right-10 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-bounce-slow" data-aos="fade-left" data-aos-delay="800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Total Contributions</p>
                  <p className="text-lg font-bold text-gray-900">₦ 45.2M</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 -left-6 lg:-left-10 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-pulse-slow" data-aos="fade-right" data-aos-delay="900">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Loan Status</p>
                  <p className="text-lg font-bold text-gray-900">Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
