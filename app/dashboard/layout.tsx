'use client';

import React from 'react';
import { AuthProvider, useAuth } from '@/contexts/auth-context';
import Login from '@/components/auth/login';
import DashboardLayout from '@/components/dashboard/dashboard-layout';

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DashboardContent>{children}</DashboardContent>
    </AuthProvider>
  );
}