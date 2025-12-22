import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Building, Users, Shield } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { jurisdictions } from '@/data/jurisdictions';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--color-gray-light)] py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-navy)] leading-tight mb-6">
              Accounting, Tax & Corporate Services for International Business
            </h1>
            <p className="text-xl text-[var(--color-slate)] mb-8 max-w-2xl">
              Supporting multinational groups and international businesses operating in Southeast Europe with local expertise and international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[var(--color-teal)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Multi-Jurisdiction</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Coordinated services across 6 Southeast European countries with consistent standards.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-[var(--color-teal)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Regional Infrastructure</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Established operations in Serbia with developed IT, security, and operational teams.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[var(--color-teal)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Operational Support</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Ongoing operational services, not just advisory—full back-office support available.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[var(--color-teal)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">International Standards</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  IFRS compliance, ERP integration capability, and group reporting expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-4">
              Our Services
            </h2>
            <p className="text-[var(--color-slate)]">
              Comprehensive accounting, tax, payroll, and corporate services designed for international businesses and multinational groups operating in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center text-[var(--color-teal)] font-medium hover:underline">
              View all services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Jurisdictions Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-4">
                Regional Coverage Across Southeast Europe
              </h2>
              <p className="text-[var(--color-slate)] mb-6">
                We provide services across six Southeast European jurisdictions, offering coordinated support for groups with multiple regional entities and consistent reporting standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)]" />
                  <span className="text-[var(--color-charcoal)]">Single point of contact for regional operations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)]" />
                  <span className="text-[var(--color-charcoal)]">Standardized processes and reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)]" />
                  <span className="text-[var(--color-charcoal)]">Local regulatory expertise in each jurisdiction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)]" />
                  <span className="text-[var(--color-charcoal)]">Cross-border transaction support</span>
                </li>
              </ul>
              <Link href="/jurisdictions" className="btn btn-secondary">
                Explore Jurisdictions
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {jurisdictions.map((jurisdiction) => (
                <Link
                  key={jurisdiction.slug}
                  href={`/jurisdictions/${jurisdiction.slug}`}
                  className="card card-bordered text-center hover:border-[var(--color-teal)] transition-colors"
                >
                  <span className="w-10 h-10 rounded bg-[var(--color-navy)] flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">{jurisdiction.code}</span>
                  </span>
                  <span className="font-medium text-[var(--color-navy)]">{jurisdiction.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Established Capability Since 2013
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2013, Norventure Services has developed into a comprehensive accounting and corporate services firm. Our team combines deep regional knowledge with international service standards to support businesses operating across Southeast Europe.
              </p>
              <p className="text-gray-300 mb-8">
                We serve as the local finance function for subsidiaries of multinational groups, regional holding companies, and international businesses establishing presence in the region.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-teal)]">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-teal)]">6</div>
                  <div className="text-sm text-gray-400">Jurisdictions</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-[var(--color-teal)]">50+</div>
                  <div className="text-sm text-gray-400">Group Clients</div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-[var(--color-navy)] font-medium rounded hover:bg-gray-100 transition-colors"
              >
                About Our Firm
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Who We Serve</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Subsidiaries of multinational corporations</li>
                  <li>• Regional holding companies</li>
                  <li>• Private equity portfolio companies</li>
                  <li>• International businesses entering SEE markets</li>
                  <li>• Companies requiring multi-jurisdiction coordination</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Systems & Technology</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• SAP, Oracle, Microsoft Dynamics integration</li>
                  <li>• Local accounting software expertise</li>
                  <li>• Group reporting system connectivity</li>
                  <li>• Secure data handling and transfer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Discuss Your Requirements?"
        description="Contact us to learn how we can support your business with accounting, tax, and corporate services across Southeast Europe."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
