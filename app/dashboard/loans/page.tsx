'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LoansPage() {
  // Dummy data for loans
  const activeLoans = [
    {
      id: 'LN-001',
      amount: 500000,
      balance: 425000,
      interestRate: 5.5,
      monthlyPayment: 45000,
      nextPayment: 'Dec 28, 2025',
      status: 'Active',
      purpose: 'Home Improvement',
      approvedDate: 'Nov 15, 2025',
    },
    {
      id: 'LN-002',
      amount: 350000,
      balance: 280000,
      interestRate: 5.0,
      monthlyPayment: 30000,
      nextPayment: 'Dec 28, 2025',
      status: 'Active',
      purpose: 'Education',
      approvedDate: 'Oct 10, 2025',
    },
  ];

  const loanHistory = [
    {
      id: 'LN-003',
      amount: 200000,
      status: 'Completed',
      purpose: 'Medical',
      approvedDate: 'Aug 5, 2025',
      completedDate: 'Nov 5, 2025',
    },
  ];

  const totalLoanBalance = activeLoans.reduce((sum, loan) => sum + loan.balance, 0);
  const totalMonthlyPayments = activeLoans.reduce((sum, loan) => sum + loan.monthlyPayment, 0);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Loan Management</h1>
          <p className="text-gray-600 mt-2">Track your loans, payments, and eligibility.</p>
        </div>
        <Link href="/dashboard/loans/apply">
          <Button variant="solid" colorSchema="primary" className="shadow-md shadow-primary-500/20">
            Apply for Loan
          </Button>
        </Link>
      </div>

      {/* Loan Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Loan Balance</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">₦{totalLoanBalance.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-accent-50 rounded-lg">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Payments</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">₦{totalMonthlyPayments.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-warning/10 rounded-lg">
              <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Loan Eligibility</p>
              <p className="text-2xl font-bold text-success mt-1">₦1,200,000</p>
            </div>
            <div className="p-3 bg-success/10 rounded-lg">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Active Loans */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Loans</h2>
        <div className="space-y-4">
          {activeLoans.map((loan) => (
            <Card key={loan.id} className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Loan {loan.id}</h3>
                  <p className="text-sm text-gray-600">{loan.purpose}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {loan.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Loan Amount</p>
                  <p className="font-semibold text-gray-900">₦{loan.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Outstanding Balance</p>
                  <p className="font-semibold text-gray-900">₦{loan.balance.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="font-semibold text-gray-900">₦{loan.monthlyPayment.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Next Payment</p>
                  <p className="font-semibold text-gray-900">{loan.nextPayment}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Interest Rate: {loan.interestRate}%</span>
                  <span>Approved: {loan.approvedDate}</span>
                </div>
                <Link href={`/dashboard/loans/${loan.id}`}>
                  <Button variant="outline" colorSchema="primary" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Loan History */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Loan History</h2>
        <Card className="border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loan ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purpose
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loanHistory.map((loan) => (
                  <tr key={loan.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {loan.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₦{loan.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {loan.purpose}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {loan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {loan.completedDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}