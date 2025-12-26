'use client';

import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const footerLinks = {
    services: [
      { label: language === 'sr' ? 'Računovodstvo' : 'Accounting', href: '/services/accounting' },
      { label: language === 'sr' ? 'Porezi' : 'Tax', href: '/services/tax' },
      { label: language === 'sr' ? 'Obračun zarada' : 'Payroll', href: '/services/payroll' },
      { label: language === 'sr' ? 'Korporativne usluge' : 'Corporate Services', href: '/services/corporate-services' },
      { label: language === 'sr' ? 'Međunarodne grupe' : 'International Groups', href: '/services/international-groups' },
      { label: language === 'sr' ? 'Savetovanje' : 'Advisory', href: '/services/advisory' },
    ],
    jurisdictions: [
      { label: language === 'sr' ? 'Srbija' : 'Serbia', href: '/jurisdictions/serbia' },
      { label: language === 'sr' ? 'Crna Gora' : 'Montenegro', href: '/jurisdictions/montenegro' },
      { label: language === 'sr' ? 'Bosna i Hercegovina' : 'Bosnia and Herzegovina', href: '/jurisdictions/bosnia-herzegovina' },
      { label: language === 'sr' ? 'Severna Makedonija' : 'North Macedonia', href: '/jurisdictions/north-macedonia' },
      { label: language === 'sr' ? 'Slovenija' : 'Slovenia', href: '/jurisdictions/slovenia' },
      { label: language === 'sr' ? 'Hrvatska' : 'Croatia', href: '/jurisdictions/croatia' },
    ],
    company: [
      { label: t('nav.ourFirm'), href: '/about' },
      { label: t('nav.leadership'), href: '/about/leadership' },
      { label: t('nav.ourApproach'), href: '/about/approach' },
      { label: t('nav.careers'), href: '/careers' },
      { label: language === 'sr' ? 'Kontakt' : 'Contact', href: '/contact' },
    ],
    insights: [
      { label: t('insights.allInsights'), href: '/insights' },
      { label: language === 'sr' ? 'Regulatorna ažuriranja' : 'Regulatory Updates', href: '/insights/regulatory-updates' },
      { label: language === 'sr' ? 'Vodiči' : 'Guides', href: '/insights/guides' },
      { label: language === 'sr' ? 'Članci' : 'Articles', href: '/insights/articles' },
    ],
  };

  return (
    <footer className="bg-[#060a10] text-white">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2a9d96]/50 to-transparent" />

      <div className="container pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="block mb-6">
              <span
                className="text-xl font-semibold tracking-[0.12em] uppercase"
                style={{ color: '#ffffff' }}
              >
                NORVENTURE
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="space-y-4 text-sm">
              <a
                href="mailto:info@norventureservices.rs"
                className="flex items-center gap-3 text-white/60 hover:text-[var(--color-teal-light)] transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>info@norventureservices.rs</span>
              </a>
              <a
                href="tel:+381665050222"
                className="flex items-center gap-3 text-white/60 hover:text-[var(--color-teal-light)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+381 66 50 50 222</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Beogradska 51<br />{language === 'sr' ? 'Beograd, Srbija' : 'Belgrade, Serbia'}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <p className="text-sm font-medium tracking-[0.1em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {t('nav.services')}
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurisdictions */}
          <div className="lg:col-span-2">
            <p className="text-sm font-medium tracking-[0.1em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {t('nav.jurisdictions')}
            </p>
            <ul className="space-y-3">
              {footerLinks.jurisdictions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="text-sm font-medium tracking-[0.1em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {t('footer.company')}
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div className="lg:col-span-2">
            <p className="text-sm font-medium tracking-[0.1em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {t('nav.insights')}
            </p>
            <ul className="space-y-3">
              {footerLinks.insights.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/norventure"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm text-white/60 hover:text-[var(--color-teal-light)] transition-colors group"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy-policy"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
