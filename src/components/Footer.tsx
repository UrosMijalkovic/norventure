import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Accounting', href: '/services/accounting' },
      { label: 'Tax', href: '/services/tax' },
      { label: 'Payroll', href: '/services/payroll' },
      { label: 'Corporate Services', href: '/services/corporate-services' },
      { label: 'International Groups', href: '/services/international-groups' },
      { label: 'Advisory', href: '/services/advisory' },
    ],
    jurisdictions: [
      { label: 'Serbia', href: '/jurisdictions/serbia' },
      { label: 'Montenegro', href: '/jurisdictions/montenegro' },
      { label: 'Bosnia and Herzegovina', href: '/jurisdictions/bosnia-herzegovina' },
      { label: 'North Macedonia', href: '/jurisdictions/north-macedonia' },
      { label: 'Slovenia', href: '/jurisdictions/slovenia' },
      { label: 'Croatia', href: '/jurisdictions/croatia' },
    ],
    company: [
      { label: 'Our Firm', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Our Approach', href: '/about/approach' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    insights: [
      { label: 'All Insights', href: '/insights' },
      { label: 'Regulatory Updates', href: '/insights/regulatory-updates' },
      { label: 'Guides', href: '/insights/guides' },
      { label: 'Articles', href: '/insights/articles' },
    ],
  };

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-semibold block mb-6">
              NORVENTURE
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Accounting, tax, and corporate services for international businesses operating in Southeast Europe.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:info@norventureservices.rs" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@norventureservices.rs</span>
              </a>
              <a href="tel:+381665050222" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+381 66 50 50 222</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Beogradska 51<br />Belgrade, Serbia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurisdictions */}
          <div>
            <h4 className="font-medium text-white mb-4">Jurisdictions</h4>
            <ul className="space-y-2">
              {footerLinks.jurisdictions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="font-medium text-white mb-4">Insights</h4>
            <ul className="space-y-2">
              {footerLinks.insights.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Norventure Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://linkedin.com/company/norventure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
