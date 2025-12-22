'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownContent: (
        <div className="grid grid-cols-3 gap-8 p-8 min-w-[800px]">
          {services.slice(0, 6).map((service) => (
            <div key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="font-medium text-[var(--color-navy)] hover:text-[var(--color-teal)] block mb-3"
              >
                {service.title}
              </Link>
              <ul className="space-y-2">
                {service.subServices.slice(0, 4).map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={`/services/${service.slug}/${sub.slug}`}
                      className="text-sm text-[var(--color-slate)] hover:text-[var(--color-teal)]"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
                {service.subServices.length > 4 && (
                  <li>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-[var(--color-teal)] hover:underline"
                    >
                      View all →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Industries',
      href: '/industries',
      hasDropdown: false,
    },
    {
      label: 'Jurisdictions',
      href: '/jurisdictions',
      hasDropdown: false,
    },
    {
      label: 'Insights',
      href: '/insights',
      hasDropdown: false,
    },
    {
      label: 'About',
      href: '/about',
      hasDropdown: true,
      dropdownContent: (
        <div className="p-6 min-w-[250px]">
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-[var(--color-navy)] hover:text-[var(--color-teal)] font-medium">
                Our Firm
              </Link>
            </li>
            <li>
              <Link href="/about/leadership" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/about/approach" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                Our Approach
              </Link>
            </li>
            <li>
              <Link href="/about/infrastructure" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link href="/about/technology" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                Technology & Systems
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: 'Careers',
      href: '/careers',
      hasDropdown: false,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold text-[var(--color-navy)]">NORVENTURE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-[var(--color-charcoal)] hover:text-[var(--color-teal)] transition-colors py-6"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg border border-[var(--color-gray-border)] mt-0">
                    {item.dropdownContent}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--color-navy)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--color-navy)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--color-gray-border)] py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-[var(--color-charcoal)] hover:text-[var(--color-teal)] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn btn-primary w-full mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
