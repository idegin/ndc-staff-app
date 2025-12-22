import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10 bg-white/10 rounded-lg p-1">
                <Image
                  src="/brand/logo.png"
                  alt="NDC Staff Cooperative Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                NDC Staff <span className="text-primary-500">Cooperative</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Modernizing cooperative management for NDC staff with secure, transparent,
              and efficient digital solutions. Empowering members through technology.
            </p>
            <div className="flex items-center space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <span className="mt-1 text-primary-500">✉</span>
                <p>project@idegin.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="mt-1 text-primary-500">📞</span>
                <p>+234 8081008437</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="mt-1 text-primary-500">📍</span>
                <p>
                  National Defence College<br />
                  Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NDC Staff Cooperative Society. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}