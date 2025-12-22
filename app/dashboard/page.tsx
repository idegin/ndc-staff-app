'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/auth-context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Contributions',
      value: '₦2,450,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
    },
    {
      title: 'Active Loans',
      value: '₦850,000',
      change: '2 loans',
      changeType: 'neutral',
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Loan Eligibility',
      value: '₦1,200,000',
      change: 'Available',
      changeType: 'positive',
      icon: (
        <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Next Payment',
      value: 'Dec 28, 2025',
      change: '₦45,000',
      changeType: 'neutral',
      icon: (
        <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const recentActivities = [
    {
      type: 'contribution',
      title: 'Monthly contribution received',
      date: 'December 1, 2025',
      amount: '₦35,000',
      color: 'bg-primary-500',
    },
    {
      type: 'loan',
      title: 'Loan application approved',
      date: 'November 15, 2025',
      amount: '₦500,000',
      color: 'bg-accent-500',
    },
    {
      type: 'payment',
      title: 'Loan payment processed',
      date: 'November 28, 2025',
      amount: '₦45,000',
      color: 'bg-success',
    },
    {
      type: 'system',
      title: 'Document uploaded successfully',
      date: 'November 20, 2025',
      amount: null,
      color: 'bg-secondary-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header & User Info */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{user?.department}</p>
            <p className="text-sm text-gray-400">Staff ID: {user?.staffId}</p>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.changeType === 'positive' ? 'text-success' :
                    stat.changeType === 'negative' ? 'text-danger' :
                    'text-gray-500'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <Card className="p-6 border border-gray-200">
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-3 h-3 ${activity.color} rounded-full flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500">
                    {activity.date} {activity.amount && `• ${activity.amount}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/dashboard/loans/apply">
            <Button
              variant="solid"
              colorSchema="primary"
              className="w-full h-12 text-base font-medium shadow-md shadow-primary-500/20 hover:shadow-lg transition-shadow"
            >
              Apply for Loan
            </Button>
          </Link>
          <Link href="/dashboard/profile">
            <Button
              variant="outline"
              colorSchema="muted"
              className="w-full h-12 text-base font-medium border-2 hover:bg-gray-50 transition-colors"
            >
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}