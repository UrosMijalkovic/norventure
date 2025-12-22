import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { Users, MapPin, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Infrastructure',
  description: 'Our operational capability, team structure, and regional network supporting international businesses across Southeast Europe.',
};

const capabilities = [
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Our team of 30+ professionals includes CPAs, tax advisors, and specialists with backgrounds at international firms and multinational corporations.',
    stats: [
      { label: 'Professional Staff', value: '30+' },
      { label: 'Certified Accountants', value: '15+' },
      { label: 'Tax Specialists', value: '8' },
    ],
  },
  {
    icon: MapPin,
    title: 'Regional Network',
    description: 'We maintain service capability across six Southeast European jurisdictions through our offices and established partner relationships.',
    stats: [
      { label: 'Jurisdictions', value: '6' },
      { label: 'Office Locations', value: '3' },
      { label: 'Partner Firms', value: '4' },
    ],
  },
  {
    icon: Clock,
    title: 'Operational Capacity',
    description: 'Our infrastructure supports ongoing service delivery for a substantial portfolio of international clients with complex requirements.',
    stats: [
      { label: 'Group Clients', value: '50+' },
      { label: 'Legal Entities Served', value: '120+' },
      { label: 'Monthly Transactions', value: '25,000+' },
    ],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We maintain rigorous quality standards with documented processes, regular reviews, and professional liability coverage.',
    stats: [
      { label: 'Years in Operation', value: '11+' },
      { label: 'Clean Audit Record', value: '100%' },
      { label: 'Client Retention', value: '95%+' },
    ],
  },
];

const teamStructure = [
  {
    level: 'Partners',
    description: 'Lead client relationships and provide strategic oversight',
    count: '4',
  },
  {
    level: 'Directors & Senior Managers',
    description: 'Manage engagement delivery and complex technical matters',
    count: '6',
  },
  {
    level: 'Managers',
    description: 'Oversee day-to-day service delivery and team coordination',
    count: '8',
  },
  {
    level: 'Senior Associates',
    description: 'Execute core service functions with limited supervision',
    count: '10',
  },
  {
    level: 'Associates',
    description: 'Support service delivery under direct supervision',
    count: '8+',
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        title="Infrastructure"
        subtitle="The operational capability and team structure that enables us to serve international clients across Southeast Europe."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Infrastructure' },
        ]}
      />

      {/* Capabilities Overview */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-[var(--color-gray-light)] rounded-lg p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-[var(--color-teal)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-3">
                  {capability.title}
                </h3>
                <p className="text-[var(--color-charcoal)] mb-6">{capability.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {capability.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl font-semibold text-[var(--color-navy)]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[var(--color-slate)]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-8 text-center">
              Team Structure
            </h2>
            <div className="space-y-4">
              {teamStructure.map((level, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-[var(--color-gray-border)]"
                >
                  <div>
                    <h3 className="font-semibold text-[var(--color-navy)]">{level.level}</h3>
                    <p className="text-sm text-[var(--color-slate)]">{level.description}</p>
                  </div>
                  <div className="text-2xl font-semibold text-[var(--color-teal)]">
                    {level.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Belgrade Headquarters */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
                Belgrade Headquarters
              </h2>
              <p className="text-[var(--color-charcoal)] mb-4">
                Our headquarters in Belgrade serves as the operational hub for regional service delivery. The office houses our core team and provides the infrastructure for serving clients across all jurisdictions.
              </p>
              <p className="text-[var(--color-charcoal)] mb-6">
                The location in central Belgrade provides convenient access for client meetings and proximity to key government and regulatory institutions.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-[var(--color-slate)]">Address</p>
                  <p className="text-[var(--color-charcoal)]">Beogradska 51, Belgrade, Serbia</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-slate)]">Contact</p>
                  <p className="text-[var(--color-charcoal)]">+381 66 50 50 222</p>
                  <p className="text-[var(--color-charcoal)]">info@norventureservices.rs</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-gray-light)] rounded-lg h-80 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-[var(--color-slate)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-8 text-center">
            Regional Presence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-[var(--color-gray-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-3">
                <span className="text-white font-bold">RS</span>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Serbia</h3>
              <p className="text-sm text-[var(--color-slate)]">Headquarters office with full team</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--color-gray-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-3">
                <span className="text-white font-bold">ME</span>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Montenegro</h3>
              <p className="text-sm text-[var(--color-slate)]">Local office presence</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--color-gray-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-3">
                <span className="text-white font-bold">BA</span>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Bosnia and Herzegovina</h3>
              <p className="text-sm text-[var(--color-slate)]">Partner firm network</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--color-gray-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-3">
                <span className="text-white font-bold">MK</span>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">North Macedonia</h3>
              <p className="text-sm text-[var(--color-slate)]">Partner firm network</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--color-gray-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-3">
                <span className="text-white font-bold">SI</span>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Slovenia</h3>
              <p className="text-sm text-[var(--color-slate)]">Partner firm network</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-[var(--color-gray-border)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-3">
                <span className="text-white font-bold">HR</span>
              </div>
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Croatia</h3>
              <p className="text-sm text-[var(--color-slate)]">Partner firm network</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Navigation */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-8">
            Learn More About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/about/leadership"
              className="block p-6 bg-[var(--color-gray-light)] rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Leadership</h3>
              <p className="text-sm text-[var(--color-slate)]">Meet our leadership team and their professional backgrounds.</p>
            </Link>
            <Link
              href="/about/approach"
              className="block p-6 bg-[var(--color-gray-light)] rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Our Approach</h3>
              <p className="text-sm text-[var(--color-slate)]">How we deliver services and work with clients.</p>
            </Link>
            <Link
              href="/about/technology"
              className="block p-6 bg-[var(--color-gray-light)] rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
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
