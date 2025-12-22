'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LoanDetailsPage() {
  const params = useParams();
  const loanId = params.id as string;

  // Dummy data - in a real app, fetch based on loanId
  const loan = {
    id: loanId,
    amount: 500000,
    balance: 425000,
    interestRate: 5.5,
    monthlyPayment: 45000,
    totalPaid: 75000,
    nextPayment: 'Dec 28, 2025',
    status: 'Active',
    purpose: 'Home Improvement',
    approvedDate: 'Nov 15, 2025',
    disbursementDate: 'Nov 20, 2025',
    maturityDate: 'Nov 20, 2027',
    payments: [
      { date: 'Dec 28, 2025', amount: 45000, status: 'Upcoming' },
      { date: 'Nov 28, 2025', amount: 45000, status: 'Paid' },
      { date: 'Oct 28, 2025', amount: 45000, status: 'Paid' },
      { date: 'Sep 28, 2025', amount: 45000, status: 'Paid' },
      { date: 'Aug 28, 2025', amount: 45000, status: 'Paid' },
    ],
  };

  const progressPercentage = ((loan.amount - loan.balance) / loan.amount) * 100;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Loan Details</h1>
          <p className="text-gray-600 mt-2">Loan ID: {loan.id}</p>
        </div>
        <Link href="/dashboard/loans">
          <Button variant="outline" colorSchema="muted">
            Back to Loans
          </Button>
        </Link>
      </div>

      {/* Loan Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{loan.purpose}</h2>
                <p className="text-gray-600">Loan Amount: ₦{loan.amount.toLocaleString()}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {loan.status}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{progressPercentage.toFixed(1)}% Paid</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-500 h-2 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Outstanding Balance</p>
                <p className="text-lg font-semibold text-gray-900">₦{loan.balance.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Payment</p>
                <p className="text-lg font-semibold text-gray-900">₦{loan.monthlyPayment.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Interest Rate</p>
                <p className="text-lg font-semibold text-gray-900">{loan.interestRate}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Next Payment</p>
                <p className="text-lg font-semibold text-gray-900">{loan.nextPayment}</p>
              </div>
            </div>
          </Card>

          {/* Payment Schedule */}
          <Card className="p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Schedule</h3>
            <div className="space-y-3">
              {loan.payments.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{payment.date}</p>
                    <p className="text-sm text-gray-600">₦{payment.amount.toLocaleString()}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    payment.status === 'Paid'
                      ? 'bg-success/10 text-success'
                      : payment.status === 'Upcoming'
                      ? 'bg-warning/10 text-warning'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {payment.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Loan Summary */}
        <div className="space-y-6">
          <Card className="p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-medium">₦{loan.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Paid:</span>
                <span className="font-medium text-success">₦{loan.totalPaid.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Outstanding:</span>
                <span className="font-medium text-danger">₦{loan.balance.toLocaleString()}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between">
                <span className="text-gray-600">Approved Date:</span>
                <span className="font-medium">{loan.approvedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Disbursement:</span>
                <span className="font-medium">{loan.disbursementDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Maturity Date:</span>
                <span className="font-medium">{loan.maturityDate}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button
                variant="solid"
                colorSchema="primary"
                className="w-full"
                disabled={true} // Would be enabled for actual payment
              >
                Make Payment
              </Button>
              <Button variant="outline" colorSchema="muted" className="w-full">
                Download Statement
              </Button>
              <Button variant="outline" colorSchema="muted" className="w-full">
                Contact Support
              </Button>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200 bg-warning/5">
            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Payment Reminder</h3>
              <p className="text-sm text-gray-600">
                Your next payment of ₦{loan.monthlyPayment.toLocaleString()} is due on {loan.nextPayment}.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}