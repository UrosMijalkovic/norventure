'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight, Building, Globe, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.png" alt="About" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">About</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Our Firm</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">About Norventure</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Established accounting, tax, and corporate services firm supporting international
              businesses operating in Southeast Europe since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Our Story</span>
              <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Supporting international
                <br /><span className="italic">business since 2013</span>
              </h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Founded in 2013, Norventure Services has developed into a comprehensive accounting and corporate
                services firm serving international businesses across Southeast Europe. Our team combines deep
                regional knowledge with international service standards.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                We serve as the local finance function for subsidiaries of multinational groups, regional holding
                companies, and international businesses establishing presence in the region.
              </p>
              <p className="text-[#64748b] leading-relaxed">
                With headquarters in Belgrade and service capability across six Southeast European jurisdictions,
                we provide the regional coverage that international groups require.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '2013', label: 'Year Established' },
                { number: '6', label: 'Jurisdictions Covered' },
                { number: '50+', label: 'Group Clients' },
                { number: '30+', label: 'Professional Staff' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0a0f18] p-8 text-center">
                  <div className="text-4xl text-[#3ec9c1] font-light mb-2" style={{ fontFamily: 'var(--font-display)' }}>{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">Core service</span>
              <br /><span className="italic text-white">capabilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              { icon: Building, title: 'Accounting Services', desc: 'Financial reporting, management accounting, consolidation, and bookkeeping services.' },
              { icon: Shield, title: 'Tax Services', desc: 'Corporate tax, VAT, transfer pricing, and international tax advisory.' },
              { icon: Users, title: 'Payroll Services', desc: 'Payroll processing, employment tax, personnel administration, and expatriate services.' },
              { icon: Globe, title: 'Corporate Services', desc: 'Company formation, corporate secretarial, and regulatory compliance support.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0f18] p-8 group hover:bg-[#0f1520] transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#2a9d96]/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#2a9d96]" />
                </div>
                <h3 className="!text-[#3ec9c1] text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve - Light */}
      <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Our Clients</span>
              <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Who we <span className="italic">serve</span>
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Our clients are primarily international businesses requiring professional accounting,
                tax, and corporate services in Southeast Europe:
              </p>
              <ul className="space-y-4">
                {[
                  'Subsidiaries of multinational corporations requiring local finance function support',
                  'Regional holding companies with operations across multiple SEE jurisdictions',
                  'Private equity portfolio companies in the region',
                  'International businesses establishing presence in Southeast Europe',
                  'Companies requiring coordinated multi-jurisdiction services',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2a9d96] mt-2.5 flex-shrink-0" />
                    <span className="text-[#64748b]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Our Approach</span>
              <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                How we <span className="italic">work</span>
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Our approach emphasizes operational support over periodic advisory.
                We function as an extension of your finance team:
              </p>
              <ul className="space-y-4">
                {[
                  'Ongoing monthly service delivery rather than project-based engagement',
                  'Direct access to senior professionals handling your account',
                  'Consistent processes and deliverables across jurisdictions',
                  'Integration with your ERP and group reporting systems',
                  'Responsive communication and proactive issue identification',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2a9d96] mt-2.5 flex-shrink-0" />
                    <span className="text-[#64748b]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Navigation - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Explore</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">Learn more</span>
              <br /><span className="italic text-white">about us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Leadership', desc: 'Meet our leadership team and their professional backgrounds.', href: '/about/leadership' },
              { title: 'Our Approach', desc: 'How we deliver services and work with clients.', href: '/about/approach' },
              { title: 'Infrastructure', desc: 'Our operational capability and team structure.', href: '/about/infrastructure' },
              { title: 'Technology', desc: 'ERP systems and technology capabilities.', href: '/about/technology' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-[#2a9d96]/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="!text-[#3ec9c1] text-lg font-medium" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#2a9d96] transition-colors" />
                </div>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to <span className="italic">get started?</span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Contact us to discuss how we can support your business in Southeast Europe.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-3 bg-[#0a0f18] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#2a9d96] transition-all duration-500">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
