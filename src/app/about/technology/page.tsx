'use client';

import Link from 'next/link';
import { CheckCircle, Monitor, Database, Cloud, Lock, ArrowRight, ChevronRight } from 'lucide-react';

const erpSystems = [
  {
    name: 'SAP',
    description: 'Extensive experience with SAP ERP systems, including SAP S/4HANA and SAP Business One. We support clients using SAP for their local entities and provide integration with group instances.',
    capabilities: ['Local chart of accounts mapping', 'Intercompany transaction processing', 'Statutory reporting configuration', 'User training and support'],
  },
  {
    name: 'Microsoft Dynamics',
    description: 'Full capability across Microsoft Dynamics products including D365 Finance & Operations and Business Central. We implement local compliance requirements and maintain ongoing system support.',
    capabilities: ['Localization setup', 'VAT configuration', 'Reporting customization', 'Integration support'],
  },
  {
    name: 'Oracle',
    description: 'Experience with Oracle ERP Cloud and Oracle NetSuite for clients using these platforms. We handle local requirements within the global system framework.',
    capabilities: ['Local subsidiary setup', 'Tax engine configuration', 'Consolidation support', 'Compliance reporting'],
  },
  {
    name: 'Local Systems',
    description: 'Proficiency with locally prevalent accounting systems used in the region, enabling flexibility in serving clients with varying technology environments.',
    capabilities: ['Multi-system capability', 'Data migration support', 'System selection advisory', 'Implementation assistance'],
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Enterprise-grade security measures protecting client financial data, including encryption, access controls, and regular security assessments.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Secure cloud-based systems enabling remote access, collaboration, and business continuity with regular backups and disaster recovery protocols.',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Structured data management practices ensuring accuracy, completeness, and availability of financial information for reporting and analysis.',
  },
  {
    icon: Monitor,
    title: 'Reporting Tools',
    description: 'Modern reporting and analytics tools providing clients with timely visibility into their financial position and key performance metrics.',
  },
];

const integrationPoints = [
  'Direct posting to client ERP systems',
  'Group chart of accounts alignment',
  'Automated data interfaces where appropriate',
  'Custom reporting in required formats',
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.jpg" alt="Technology" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/about" className="text-white/60 text-sm hover:text-white transition-colors">About</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Technology</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Technology</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Technology</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Modern technology capabilities supporting accounting operations for international businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ERP Expertise - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              ERP Systems
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ERP Systems Expertise
            </h2>
            <p className="text-[#0a0f18]/70 text-lg">
              We work within your technology environment, not alongside it. Our teams maintain current expertise in major ERP platforms, enabling us to operate directly in your systems rather than maintaining parallel processes that require reconciliation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {erpSystems.map((system, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-[#e2e8f0] hover:border-[#2a9d96] transition-colors"
              >
                <h3
                  className="text-xl font-light text-[#0a0f18] mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {system.name}
                </h3>
                <p className="text-[#0a0f18]/70 mb-6">{system.description}</p>
                <ul className="space-y-2">
                  {system.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0a0f18]/70">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Approach - Dark Section */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                Our Methodology
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
              >
                Integration Approach
              </h2>
              <p className="text-white/70 text-lg mb-6">
                Our technology approach centers on integration with your existing infrastructure. Rather than requiring you to adapt to our systems, we configure our operations to work seamlessly with your technology environment.
              </p>
              <p className="text-white/70 mb-8">
                This means your local entity data flows directly into group consolidation, your reporting formats remain consistent with group standards, and your team maintains visibility through familiar interfaces.
              </p>
              <ul className="space-y-4">
                {integrationPoints.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 p-6 border border-white/10">
                  <feature.icon className="w-8 h-8 text-[#2a9d96] mb-4" />
                  <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Standards - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Standards
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Technology Standards
            </h2>
            <div className="space-y-10">
              <div className="pb-8 border-b border-[#0a0f18]/10">
                <h3
                  className="text-xl font-light text-[#0a0f18] mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Security & Compliance
                </h3>
                <p className="text-[#0a0f18]/70">
                  We maintain security standards appropriate for handling sensitive financial data. Our infrastructure includes encryption for data in transit and at rest, multi-factor authentication, role-based access controls, and regular security assessments.
                </p>
              </div>
              <div className="pb-8 border-b border-[#0a0f18]/10">
                <h3
                  className="text-xl font-light text-[#0a0f18] mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Business Continuity
                </h3>
                <p className="text-[#0a0f18]/70">
                  Our cloud-based infrastructure ensures business continuity with regular backups, disaster recovery protocols, and redundant systems. We maintain documented procedures for data protection and system recovery.
                </p>
              </div>
              <div>
                <h3
                  className="text-xl font-light text-[#0a0f18] mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Continuous Development
                </h3>
                <p className="text-[#0a0f18]/70">
                  We invest in ongoing team training to maintain current expertise in evolving ERP platforms and emerging technologies. This ensures our capability remains aligned with client technology environments as they evolve.
                </p>
              </div>
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
              href="/about/approach"
              className="block p-8 bg-white/5 border border-white/10 hover:border-[#2a9d96]/50 hover:bg-white/10 transition-all group"
            >
              <h3 className="!text-[#3ec9c1] font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>Our Approach</h3>
              <p className="text-sm text-white/60">How we deliver services and work with clients.</p>
            </Link>
            <Link
              href="/about/infrastructure"
              className="block p-8 bg-white/5 border border-white/10 hover:border-[#2a9d96]/50 hover:bg-white/10 transition-all group"
            >
              <h3 className="!text-[#3ec9c1] font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>Infrastructure</h3>
              <p className="text-sm text-white/60">Our operational capability and team structure.</p>
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
              Ready to Integrate?
            </h2>
            <p className="text-[#0a0f18]/70 text-lg mb-10">
              Let us show you how our technology capabilities can support your ERP environment and streamline your operations.
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
