'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: t('nav.services'),
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
                {language === 'sr' ? service.titleSr || service.title : service.title}
              </Link>
              <ul className="space-y-2">
                {service.subServices.slice(0, 4).map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={`/services/${service.slug}/${sub.slug}`}
                      className="text-sm text-[var(--color-slate)] hover:text-[var(--color-teal)]"
                    >
                      {language === 'sr' ? sub.titleSr || sub.title : sub.title}
                    </Link>
                  </li>
                ))}
                {service.subServices.length > 4 && (
                  <li>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-[var(--color-teal)] hover:underline"
                    >
                      {t('nav.viewAll')} →
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
      label: t('nav.industries'),
      href: '/industries',
      hasDropdown: false,
    },
    {
      label: t('nav.jurisdictions'),
      href: '/jurisdictions',
      hasDropdown: false,
    },
    {
      label: t('nav.insights'),
      href: '/insights',
      hasDropdown: false,
    },
    {
      label: t('nav.about'),
      href: '/about',
      hasDropdown: true,
      dropdownContent: (
        <div className="p-6 min-w-[250px]">
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-[var(--color-navy)] hover:text-[var(--color-teal)] font-medium">
                {t('nav.ourFirm')}
              </Link>
            </li>
            <li>
              <Link href="/about/leadership" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                {t('nav.leadership')}
              </Link>
            </li>
            <li>
              <Link href="/about/approach" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                {t('nav.ourApproach')}
              </Link>
            </li>
            <li>
              <Link href="/about/infrastructure" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                {t('nav.infrastructure')}
              </Link>
            </li>
            <li>
              <Link href="/about/technology" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                {t('nav.technology')}
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: t('nav.careers'),
      href: '/careers',
      hasDropdown: false,
    },
  ];

  const isTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-xl font-semibold tracking-[0.12em] uppercase transition-colors duration-300"
              style={{ color: isTransparent ? '#ffffff' : 'var(--color-navy)' }}
            >
              NORVENTURE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 transition-colors py-6 text-sm font-medium tracking-wide hover:opacity-80"
                  style={{ color: isTransparent ? '#ffffff' : '#1a2e3b' }}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.href && (
                  <div className="absolute top-full left-0 bg-white shadow-xl border border-[var(--color-gray-border)] mt-0">
                    {item.dropdownContent}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher and CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className={`btn ${isTransparent ? 'btn-white' : 'btn-primary'}`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: isTransparent ? '#ffffff' : 'var(--color-navy)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: isTransparent ? '#ffffff' : 'var(--color-navy)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--color-gray-border)] py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[var(--color-charcoal)] hover:text-[var(--color-teal)] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                className="btn btn-primary w-full mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
