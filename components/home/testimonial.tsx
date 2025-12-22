import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className="py-20 bg-white" data-aos="fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center p-8 lg:p-12" data-aos="fade-up" data-aos-delay="200">
          <div className="mb-6">
            <svg className="w-12 h-12 text-primary-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic">
            "This system has cut loan processing time by 70% and improved staff satisfaction significantly.
            The transparency and ease of use have made cooperative management much more efficient."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold">CC</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Cooperative Committee Chair</div>
              <div className="text-gray-600">National Defence College Staff Cooperative Society</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}