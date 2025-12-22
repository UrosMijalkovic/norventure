import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { CheckCircle, MapPin, Briefcase, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Norventure Services - career opportunities in accounting, tax, and corporate services for international clients in Southeast Europe.',
};

const benefits = [
  {
    icon: Users,
    title: 'Professional Development',
    description: 'Continuous learning opportunities, professional certifications support, and exposure to diverse client engagements.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear progression paths with regular performance reviews and mentorship from experienced professionals.',
  },
  {
    icon: Briefcase,
    title: 'International Exposure',
    description: 'Work with multinational clients and gain experience in cross-border transactions and regional operations.',
  },
  {
    icon: MapPin,
    title: 'Regional Opportunities',
    description: 'Potential for involvement in engagements across our six-jurisdiction network.',
  },
];

const openPositions = [
  {
    title: 'Senior Tax Advisor',
    department: 'Tax Services',
    location: 'Belgrade',
    type: 'Full-time',
    description: 'Join our tax team to advise multinational clients on corporate tax, VAT, and transfer pricing matters.',
  },
  {
    title: 'Accounting Manager',
    department: 'Accounting Services',
    location: 'Belgrade',
    type: 'Full-time',
    description: 'Lead accounting engagements for international clients, managing team members and client relationships.',
  },
  {
    title: 'Senior Payroll Specialist',
    department: 'Payroll Services',
    location: 'Belgrade',
    type: 'Full-time',
    description: 'Manage payroll processing and compliance for multinational employers operating in Serbia and the region.',
  },
];

const qualitiesWeSeek = [
  'Strong technical foundation in accounting, tax, or related disciplines',
  'Professional qualifications (CPA, ACCA, or equivalent) or progress toward them',
  'Experience with international clients or multinational environments',
  'Proficiency in English for professional communication',
  'Detail orientation and commitment to quality',
  'Collaborative approach and strong communication skills',
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Careers"
        subtitle="Join a team serving international clients across Southeast Europe."
        breadcrumbs={[{ label: 'Careers' }]}
        variant="large"
      />

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
              Why Join Norventure Services
            </h2>
            <p className="text-[var(--color-charcoal)]">
              We offer professionals the opportunity to work with sophisticated international clients while maintaining the accessible, collegial environment of a mid-sized firm. Our team members gain broad exposure to diverse industries and complex cross-border matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[var(--color-teal)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[var(--color-slate)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-8 text-center">
            Current Openings
          </h2>

          {openPositions.length > 0 ? (
            <div className="max-w-3xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                        {position.title}
                      </h3>
                      <p className="text-[var(--color-teal)]">{position.department}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0 text-sm text-[var(--color-slate)]">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <p className="text-[var(--color-charcoal)] mb-4">{position.description}</p>
                  <Link
                    href="/contact"
                    className="text-[var(--color-teal)] font-medium hover:underline"
                  >
                    Apply Now →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[var(--color-charcoal)] mb-4">
                We currently have no specific openings advertised, but we are always interested in hearing from qualified professionals.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Submit Your CV
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* What We Look For */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
                What We Look For
              </h2>
              <p className="text-[var(--color-charcoal)] mb-6">
                We seek professionals who combine technical excellence with practical business sense. Our clients value advisors who can communicate clearly and provide actionable guidance, not just technical analysis.
              </p>
              <ul className="space-y-3">
                {qualitiesWeSeek.map((quality, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-charcoal)]">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-navy)] rounded-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Working at Norventure</h3>
              <p className="text-gray-300 mb-6">
                Our environment combines the intellectual stimulation of complex international work with the accessibility of a firm where every team member makes a visible contribution.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span>Direct client interaction from early career stages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span>Exposure to multiple industries and transaction types</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span>Supportive environment for professional certification</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span>Competitive compensation and benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
              Application Process
            </h2>
            <p className="text-[var(--color-charcoal)] mb-8">
              To apply for an open position or to express interest in future opportunities, please send your CV and a brief cover letter to our careers team. We review all applications and respond to qualified candidates within two weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@norventureservices.rs"
                className="btn btn-primary"
              >
                Email: careers@norventureservices.rs
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Team"
        description="Explore opportunities to build your career with Norventure Services."
        buttonText="View Open Positions"
      />
    </>
  );
}
