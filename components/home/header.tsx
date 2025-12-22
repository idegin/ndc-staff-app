'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/brand/logo.png"
                    alt="NDC Staff Cooperative Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-lg font-bold text-gray-900 leading-tight hidden sm:block">
                  NDC Staff<br />
                  <span className="text-primary-600">Cooperative</span>
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                colorSchema="muted"
                className="hidden sm:inline-flex"
                onClick={() => console.log('Login clicked')}
              >
                Log In
              </Button>
              <Button
                variant="solid"
                colorSchema="primary"
                onClick={() => console.log('Get Started clicked')}
                className="shadow-md shadow-primary-500/20 hidden md:inline-flex"
              >
                Get Started
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/brand/logo.png"
                  alt="NDC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold text-gray-900">
                NDC Staff<br />
                <span className="text-primary-600">Cooperative</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200 space-y-3">
            <Button
              variant="outline"
              colorSchema="muted"
              className="w-full justify-center"
              onClick={() => {
                console.log('Login clicked');
                setMobileMenuOpen(false);
              }}
            >
              Log In
            </Button>
            <Button
              variant="solid"
              colorSchema="primary"
              className="w-full justify-center shadow-md shadow-primary-500/20"
              onClick={() => {
                console.log('Get Started clicked');
                setMobileMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}