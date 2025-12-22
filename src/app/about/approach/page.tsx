import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Approach',
  description: 'How Norventure Services delivers accounting, tax, and corporate services to international clients in Southeast Europe.',
};

const principles = [
  {
    title: 'Operational Focus',
    description: 'We function as an ongoing operational partner rather than a periodic advisor. Our teams are engaged in day-to-day finance operations, not just quarterly reviews or annual audits.',
    points: [
      'Monthly service delivery cycles',
      'Continuous transaction processing',
      'Real-time issue identification and resolution',
      'Proactive communication on regulatory changes',
    ],
  },
  {
    title: 'Senior Access',
    description: 'Clients work directly with experienced professionals who understand their business. We avoid the pyramid model where senior staff appear for pitches but delegate all work to juniors.',
    points: [
      'Partner involvement in all client relationships',
      'Experienced managers handling day-to-day work',
      'Consistent team assignments',
      'Direct communication channels',
    ],
  },
  {
    title: 'Regional Coordination',
    description: 'For clients operating across multiple jurisdictions, we provide coordinated service delivery through a single engagement team, eliminating the need to manage separate relationships in each country.',
    points: [
      'Single point of contact for regional operations',
      'Standardized processes and deliverables',
      'Consolidated reporting across jurisdictions',
      'Coordinated compliance calendars',
    ],
  },
  {
    title: 'Integration Capability',
    description: 'We adapt to your systems and processes rather than imposing our own. Our teams work within client ERP environments and deliver outputs in formats that integrate with group reporting.',
    points: [
      'Multi-ERP capability',
      'Custom reporting formats',
      'Group chart of accounts alignment',
      'Automated data interfaces where appropriate',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Assessment',
    description: 'We begin each engagement with a thorough assessment of requirements, current state, and expectations. This informs scope definition and resource planning.',
  },
  {
    number: '02',
    title: 'Transition Planning',
    description: 'For new engagements, we develop detailed transition plans covering data migration, process documentation, team introductions, and timeline milestones.',
  },
  {
    number: '03',
    title: 'Steady State Operations',
    description: 'Once transitioned, we deliver ongoing services according to agreed schedules and specifications, with regular communication and periodic reviews.',
  },
  {
    number: '04',
    title: 'Continuous Improvement',
    description: 'We regularly assess service delivery and identify opportunities for process improvements, efficiency gains, and enhanced value delivery.',
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        title="Our Approach"
        subtitle="How we deliver services and build lasting client relationships."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Our Approach' },
        ]}
      />

      {/* Core Principles */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-4">
              Core Principles
            </h2>
            <p className="text-[var(--color-charcoal)]">
              Our service delivery is built on principles developed over a decade of serving international clients. These principles distinguish our approach from both large firms and local providers.
            </p>
          </div>

          <div className="space-y-12">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 pb-12 border-b border-[var(--color-gray-border)] last:border-0"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-[var(--color-charcoal)]">{principle.description}</p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {principle.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--color-charcoal)]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-4">
              Engagement Process
            </h2>
            <p className="text-[var(--color-charcoal)]">
              Our structured engagement process ensures smooth transitions and consistent service delivery from the start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-[var(--color-teal)]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-charcoal)]">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-[var(--color-teal)]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
              What This Means for Clients
            </h2>
            <div className="space-y-4 text-[var(--color-charcoal)]">
              <p>
                Our approach translates to tangible benefits: reduced management overhead for your team, consistent and predictable service delivery, and a local partner who understands your broader business context.
              </p>
              <p>
                Clients tell us they value the ability to have direct conversations with experienced professionals who know their business, rather than navigating layers of account management or dealing with constantly rotating staff.
              </p>
              <p>
                For groups operating across multiple countries in our region, the ability to coordinate through a single relationship simplifies operations significantly compared to managing separate local providers in each jurisdiction.
              </p>
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
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/about/leadership"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Leadership</h3>
              <p className="text-sm text-[var(--color-slate)]">Meet our leadership team and their professional backgrounds.</p>
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
