import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { CheckCircle, Building, Globe, Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Our Firm',
  description: 'Learn about Norventure Services - established accounting, tax, and corporate services firm supporting international businesses in Southeast Europe since 2013.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Firm"
        subtitle="Established accounting, tax, and corporate services firm supporting international businesses operating in Southeast Europe."
        breadcrumbs={[{ label: 'About' }]}
        variant="large"
      />

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
                Supporting International Business Since 2013
              </h2>
              <p className="text-[var(--color-charcoal)] mb-4">
                Founded in 2013, Norventure Services has developed into a comprehensive accounting and corporate services firm serving international businesses across Southeast Europe. Our team combines deep regional knowledge with international service standards.
              </p>
              <p className="text-[var(--color-charcoal)] mb-4">
                We serve as the local finance function for subsidiaries of multinational groups, regional holding companies, and international businesses establishing presence in the region. Our operational approach means we deliver ongoing support, not just periodic advisory services.
              </p>
              <p className="text-[var(--color-charcoal)]">
                With headquarters in Belgrade and service capability across six Southeast European jurisdictions, we provide the regional coverage that international groups require, combined with the responsiveness and direct access that distinguishes us from larger providers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[var(--color-gray-light)] rounded-lg p-6 text-center">
                <div className="text-4xl font-semibold text-[var(--color-navy)] mb-2">2013</div>
                <div className="text-sm text-[var(--color-slate)]">Year Established</div>
              </div>
              <div className="bg-[var(--color-gray-light)] rounded-lg p-6 text-center">
                <div className="text-4xl font-semibold text-[var(--color-navy)] mb-2">6</div>
                <div className="text-sm text-[var(--color-slate)]">Jurisdictions Covered</div>
              </div>
              <div className="bg-[var(--color-gray-light)] rounded-lg p-6 text-center">
                <div className="text-4xl font-semibold text-[var(--color-navy)] mb-2">50+</div>
                <div className="text-sm text-[var(--color-slate)]">Group Clients</div>
              </div>
              <div className="bg-[var(--color-gray-light)] rounded-lg p-6 text-center">
                <div className="text-4xl font-semibold text-[var(--color-navy)] mb-2">30+</div>
                <div className="text-sm text-[var(--color-slate)]">Professional Staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Accounting Services</h3>
              <p className="text-sm text-[var(--color-slate)]">
                Financial reporting, management accounting, consolidation, and bookkeeping services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Tax Services</h3>
              <p className="text-sm text-[var(--color-slate)]">
                Corporate tax, VAT, transfer pricing, and international tax advisory.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Payroll Services</h3>
              <p className="text-sm text-[var(--color-slate)]">
                Payroll processing, employment tax, personnel administration, and expatriate services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Corporate Services</h3>
              <p className="text-sm text-[var(--color-slate)]">
                Company formation, corporate secretarial, and regulatory compliance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
                Who We Serve
              </h2>
              <p className="text-[var(--color-charcoal)] mb-6">
                Our clients are primarily international businesses requiring professional accounting, tax, and corporate services in Southeast Europe. We work with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Subsidiaries of multinational corporations requiring local finance function support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Regional holding companies with operations across multiple SEE jurisdictions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Private equity portfolio companies in the region</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">International businesses establishing presence in Southeast Europe</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Companies requiring coordinated multi-jurisdiction services</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
                How We Work
              </h2>
              <p className="text-[var(--color-charcoal)] mb-6">
                Our approach emphasizes operational support over periodic advisory. We function as an extension of your finance team, providing:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Ongoing monthly service delivery rather than project-based engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Direct access to senior professionals handling your account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Consistent processes and deliverables across jurisdictions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Integration with your ERP and group reporting systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Responsive communication and proactive issue identification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Navigation */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-8">
            Learn More About Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/about/leadership"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Leadership</h3>
              <p className="text-sm text-[var(--color-slate)]">Meet our leadership team and their professional backgrounds.</p>
            </Link>
            <Link
              href="/about/approach"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Our Approach</h3>
              <p className="text-sm text-[var(--color-slate)]">How we deliver services and work with clients.</p>
            </Link>
            <Link
              href="/about/infrastructure"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Infrastructure</h3>
              <p className="text-sm text-[var(--color-slate)]">Our operational capability and team structure.</p>
            </Link>
            <Link
              href="/about/technology"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Technology</h3>
              <p className="text-sm text-[var(--color-slate)]">ERP systems and technology capabilities.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
