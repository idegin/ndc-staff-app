'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

export default function ContributionsPage() {
  // Dummy data for contributions
  const contributions = [
    { date: 'December 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'November 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'October 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'September 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'August 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'July 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'June 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'May 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'April 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'March 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'February 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
    { date: 'January 1, 2025', amount: 35000, status: 'Received', type: 'Monthly' },
  ];

  const totalContributions = contributions.reduce((sum, contrib) => sum + contrib.amount, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contribution History</h1>
        <p className="text-gray-600 mt-2">Track all your monthly contributions and view your running total.</p>
      </div>

      {/* Summary Card */}
      <Card className="p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Total Contributions</h2>
            <p className="text-3xl font-bold text-primary-600 mt-2">
              ₦{totalContributions.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mt-1">12 months of contributions</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
        </div>
      </Card>

      {/* Contributions Table */}
      <Card className="border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Monthly Contributions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contributions.map((contribution, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contribution.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contribution.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₦{contribution.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
                      {contribution.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Contribution Pattern */}
      <Card className="p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Contribution Pattern</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl font-bold text-primary-600">12</span>
            </div>
            <h3 className="font-medium text-gray-900">Consecutive Months</h3>
            <p className="text-sm text-gray-600">Perfect attendance</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl font-bold text-accent-600">₦35k</span>
            </div>
            <h3 className="font-medium text-gray-900">Monthly Amount</h3>
            <p className="text-sm text-gray-600">Consistent contribution</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900">All Paid</h3>
            <p className="text-sm text-gray-600">No missed payments</p>
          </div>
        </div>
      </Card>
    </div>
  );
}