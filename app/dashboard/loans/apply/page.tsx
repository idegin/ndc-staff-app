'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function LoanApplicationPage() {
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    duration: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Loan application submitted:', formData);
      setIsSubmitting(false);
      // In a real app, redirect to success page or show success message
    }, 2000);
  };

  const maxLoanAmount = 1200000; // From eligibility

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Loan Application</h1>
        <p className="text-gray-600 mt-2">Apply for a loan with our automated approval process.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Application Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Loan Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₦)
                </label>
                <Input
                  type="number"
                  value={formData.amount}
                  onChange={(value) => setFormData({ ...formData, amount: value })}
                  placeholder="Enter loan amount"
                  required
                  min="10000"
                  max={maxLoanAmount.toString()}
                />
                <p className="text-sm text-gray-600 mt-1">
                  Maximum eligible amount: ₦{maxLoanAmount.toLocaleString()}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose of Loan
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Select purpose</option>
                  <option value="home-improvement">Home Improvement</option>
                  <option value="education">Education</option>
                  <option value="medical">Medical Expenses</option>
                  <option value="business">Business Investment</option>
                  <option value="emergency">Emergency Funds</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Repayment Period (Months)
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Select duration</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="18">18 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <Textarea
                  value={formData.additionalInfo}
                  onChange={(value) => setFormData({ ...formData, additionalInfo: value })}
                  placeholder="Provide any additional details about your loan request..."
                  rows={4}
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  type="submit"
                  variant="solid"
                  colorSchema="primary"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
                <Link href="/dashboard/loans">
                  <Button
                    type="button"
                    variant="outline"
                    colorSchema="muted"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </Card>
        </div>

        {/* Application Info */}
        <div className="space-y-6">
          <Card className="p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Terms</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Interest Rate:</span>
                <span className="font-medium">5.0% - 5.5% per annum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee:</span>
                <span className="font-medium">1% of loan amount</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Repayment:</span>
                <span className="font-medium">Monthly installments</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Approval Time:</span>
                <span className="font-medium">2-3 business days</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Requirements</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Active member for 6+ months
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Regular contribution payments
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No outstanding loan defaults
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Maximum 2 active loans
              </li>
            </ul>
          </Card>

          <Card className="p-6 border border-gray-200 bg-primary-50">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Contact our support team for assistance with your loan application.
              </p>
              <Button variant="outline" colorSchema="primary" size="sm">
                Contact Support
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}