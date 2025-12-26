'use client';

import Link from 'next/link';
import { Users, MapPin, Clock, Shield, ArrowRight, ChevronRight } from 'lucide-react';

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

const regionalPresence = [
  { code: 'RS', name: 'Serbia', description: 'Headquarters office with full team' },
  { code: 'ME', name: 'Montenegro', description: 'Local office presence' },
  { code: 'BA', name: 'Bosnia and Herzegovina', description: 'Partner firm network' },
  { code: 'MK', name: 'North Macedonia', description: 'Partner firm network' },
  { code: 'SI', name: 'Slovenia', description: 'Partner firm network' },
  { code: 'HR', name: 'Croatia', description: 'Partner firm network' },
];

export default function InfrastructurePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.png" alt="Infrastructure" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/about" className="text-white/60 text-sm hover:text-white transition-colors">About</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Infrastructure</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Infrastructure</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Infrastructure</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              The team structure and regional network that enables us to serve international clients across Southeast Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Overview - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Our Capabilities
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Built for Scale
            </h2>
            <p className="text-[#0a0f18]/70 text-lg">
              Our infrastructure is designed to support international clients with complex, multi-jurisdictional requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-[#0a0f18]/10 hover:border-[#2a9d96]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#2a9d96]/10 flex items-center justify-center mb-6">
                  <capability.icon className="w-6 h-6 text-[#2a9d96]" />
                </div>
                <h3
                  className="text-xl font-light text-[#0a0f18] mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {capability.title}
                </h3>
                <p className="text-[#0a0f18]/70 mb-6">{capability.description}</p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#0a0f18]/10">
                  {capability.stats.map((stat, i) => (
                    <div key={i}>
                      <div
                        className="text-2xl font-light text-[#0a0f18]"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#0a0f18]/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure - Dark Section */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                Our Team
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
              >
                Team Structure
              </h2>
              <p className="text-white/70 text-lg">
                A balanced organization designed for both senior engagement and operational efficiency.
              </p>
            </div>
            <div className="space-y-4">
              {teamStructure.map((level, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-white/5 border border-white/10"
                >
                  <div>
                    <h3 className="font-medium text-white">{level.level}</h3>
                    <p className="text-sm text-white/60">{level.description}</p>
                  </div>
                  <div
                    className="text-3xl font-light text-[#2a9d96]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {level.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Belgrade Headquarters - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                Headquarters
              </p>
              <h2
                className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Belgrade Headquarters
              </h2>
              <p className="text-[#0a0f18]/70 text-lg mb-6">
                Our headquarters in Belgrade serves as the operational hub for regional service delivery. The office houses our core team and provides the infrastructure for serving clients across all jurisdictions.
              </p>
              <p className="text-[#0a0f18]/70 mb-8">
                The location in central Belgrade provides convenient access for client meetings and proximity to key government and regulatory institutions.
              </p>
              <div className="space-y-4">
                <div className="pb-4 border-b border-[#0a0f18]/10">
                  <p className="text-xs text-[#0a0f18]/50 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-[#0a0f18]">Beogradska 51, Belgrade, Serbia</p>
                </div>
                <div>
                  <p className="text-xs text-[#0a0f18]/50 uppercase tracking-wider mb-1">Contact</p>
                  <p className="text-[#0a0f18]">+381 66 50 50 222</p>
                  <p className="text-[#2a9d96]">info@norventureservices.rs</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0f18]/5 h-96 flex items-center justify-center">
              <MapPin className="w-20 h-20 text-[#0a0f18]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence - Dark Section */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Our Network
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
            >
              Regional Presence
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Service capability across six Southeast European jurisdictions through our offices and established partner relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalPresence.map((country, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 border border-white/10 hover:border-[#2a9d96]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#2a9d96]/20 flex items-center justify-center mb-4">
                  <span className="text-[#2a9d96] font-bold">{country.code}</span>
                </div>
                <h3 className="font-medium text-white mb-2">{country.name}</h3>
                <p className="text-sm text-white/60">{country.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Navigation - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Explore More
          </p>
          <h2
            className="text-2xl md:text-3xl font-light text-[#0a0f18] mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Learn More About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/about/leadership"
              className="block p-8 bg-white border border-[#0a0f18]/10 hover:border-[#2a9d96]/30 transition-colors group"
            >
              <h3 className="font-medium text-[#0a0f18] mb-2 group-hover:text-[#2a9d96] transition-colors">Leadership</h3>
              <p className="text-sm text-[#0a0f18]/60">Meet our leadership team and their professional backgrounds.</p>
            </Link>
            <Link
              href="/about/approach"
              className="block p-8 bg-white border border-[#0a0f18]/10 hover:border-[#2a9d96]/30 transition-colors group"
            >
              <h3 className="font-medium text-[#0a0f18] mb-2 group-hover:text-[#2a9d96] transition-colors">Our Approach</h3>
              <p className="text-sm text-[#0a0f18]/60">How we deliver services and work with clients.</p>
            </Link>
            <Link
              href="/about/technology"
              className="block p-8 bg-white border border-[#0a0f18]/10 hover:border-[#2a9d96]/30 transition-colors group"
            >
              <h3 className="font-medium text-[#0a0f18] mb-2 group-hover:text-[#2a9d96] transition-colors">Technology</h3>
              <p className="text-sm text-[#0a0f18]/60">ERP systems and technology capabilities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Section */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Get Started
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
            >
              Ready to Partner With Us?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Discover how our infrastructure and regional network can support your business operations across Southeast Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#2a9d96] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#238b85] transition-all duration-500"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white/5 transition-all duration-500"
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
