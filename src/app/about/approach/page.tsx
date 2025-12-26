'use client';

import Link from 'next/link';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.jpg" alt="Our Approach" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/about" className="text-white/60 text-sm hover:text-white transition-colors">About</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Our Approach</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Our Approach</span>
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Our Approach</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Building lasting client relationships through operational excellence and senior-level engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Core Principles
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What Sets Us Apart
            </h2>
            <p className="text-[#0a0f18]/70 text-lg">
              Our service delivery is built on principles developed over a decade of serving international clients. These principles distinguish our approach from both large firms and local providers.
            </p>
          </div>

          <div className="space-y-12">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 pb-12 border-b border-[#0a0f18]/10 last:border-0"
              >
                <div>
                  <h3
                    className="text-2xl font-light text-[#0a0f18] mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {principle.title}
                  </h3>
                  <p className="text-[#0a0f18]/70">{principle.description}</p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {principle.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0a0f18]/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process - Dark Section */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Our Process
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
            >
              Engagement Process
            </h2>
            <p className="text-white/70 text-lg">
              Our structured engagement process ensures smooth transitions and consistent service delivery from the start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[#2a9d96]/20 mb-4">
                  {step.number}
                </div>
                <h3
                  className="text-xl font-light text-white mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-10 -right-4 w-6 h-6 text-[#2a9d96]/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Client Benefits
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What This Means for Clients
            </h2>
            <div className="space-y-6 text-[#0a0f18]/70 text-lg">
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

      {/* About Navigation - Dark Section */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Explore More
          </p>
          <h2
            className="text-2xl md:text-3xl font-light mb-12"
            style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
          >
            Learn More About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/about/leadership"
              className="block p-8 bg-white/5 border border-white/10 hover:border-[#2a9d96]/50 hover:bg-white/10 transition-all group"
            >
              <h3 className="!text-[#3ec9c1] font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>Leadership</h3>
              <p className="text-sm text-white/60">Meet our leadership team and their professional backgrounds.</p>
            </Link>
            <Link
              href="/about/infrastructure"
              className="block p-8 bg-white/5 border border-white/10 hover:border-[#2a9d96]/50 hover:bg-white/10 transition-all group"
            >
              <h3 className="!text-[#3ec9c1] font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>Infrastructure</h3>
              <p className="text-sm text-white/60">Our operational capability and team structure.</p>
            </Link>
            <Link
              href="/about/technology"
              className="block p-8 bg-white/5 border border-white/10 hover:border-[#2a9d96]/50 hover:bg-white/10 transition-all group"
            >
              <h3 className="!text-[#3ec9c1] font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>Technology</h3>
              <p className="text-sm text-white/60">ERP systems and technology capabilities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Get Started
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Work Together?
            </h2>
            <p className="text-[#0a0f18]/70 text-lg mb-10">
              Contact us to discuss how our approach can support your business operations in Southeast Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#0a0f18] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#2a9d96] transition-all duration-500"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border border-[#0a0f18]/30 text-[#0a0f18] px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#0a0f18] hover:text-white transition-all duration-500"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
