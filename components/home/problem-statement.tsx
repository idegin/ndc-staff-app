import React from 'react';
import { Card } from '@/components/ui/card';

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why This System Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The old manual process was slow, error-prone, and frustrating for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Manual Errors</h3>
            <p className="text-gray-600">
              Calculation mistakes and paperwork errors led to confusion and delays in loan processing.
            </p>
          </Card>

          <Card className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Weeks of Waiting</h3>
            <p className="text-gray-600">
              Staff often waited weeks for loan approvals and contribution updates with no visibility.
            </p>
          </Card>

          <Card className="text-center" data-aos="fade-up" data-aos-delay="500">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lack of Transparency</h3>
            <p className="text-gray-600">
              No easy way to check contribution history or loan eligibility without contacting administrators.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}