import React from 'react';
import DashboardHeader from './dashboard-header';
import DashboardSidebar from './dashboard-sidebar';
import DashboardBody from './dashboard-body';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <DashboardBody>{children}</DashboardBody>
      </div>
    </div>
  );
}