import React from 'react';

interface DashboardBodyProps {
  children: React.ReactNode;
}

export default function DashboardBody({ children }: DashboardBodyProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </main>
  );
}