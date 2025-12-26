'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, MapPin, Briefcase, Users, TrendingUp } from 'lucide-react';

const benefits = [
  { icon: Users, title: 'Professional Development', description: 'Continuous learning opportunities, professional certifications support, and exposure to diverse client engagements.' },
  { icon: TrendingUp, title: 'Career Growth', description: 'Clear progression paths with regular performance reviews and mentorship from experienced professionals.' },
  { icon: Briefcase, title: 'International Exposure', description: 'Work with multinational clients and gain experience in cross-border transactions and regional operations.' },
  { icon: MapPin, title: 'Regional Opportunities', description: 'Potential for involvement in engagements across our six-jurisdiction network.' },
];

const openPositions = [
  { title: 'Senior Tax Advisor', department: 'Tax Services', location: 'Belgrade', type: 'Full-time', description: 'Join our tax team to advise multinational clients on corporate tax, VAT, and transfer pricing matters.' },
  { title: 'Accounting Manager', department: 'Accounting Services', location: 'Belgrade', type: 'Full-time', description: 'Lead accounting engagements for international clients, managing team members and client relationships.' },
  { title: 'Senior Payroll Specialist', department: 'Payroll Services', location: 'Belgrade', type: 'Full-time', description: 'Manage payroll processing and compliance for multinational employers operating in Serbia and the region.' },
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
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.png" alt="Careers" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Careers</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Join Our Team</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Careers</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Join a team serving international clients across Southeast Europe.
              Build your career with meaningful work and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Why Join Us</span>
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Build your career with
              <br /><span className="italic">Norventure Services</span>
            </h2>
            <p className="text-[#64748b] leading-relaxed">
              We offer professionals the opportunity to work with sophisticated international clients while maintaining
              the accessible, collegial environment of a mid-sized firm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e2e8f0]">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-[#fdfcfa] p-8 text-center">
                <div className="w-14 h-14 rounded-lg bg-[#2a9d96]/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#2a9d96]" />
                </div>
                <h3 className="text-[#0a0f18] text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>{benefit.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">Current</span>
              <span className="italic text-white"> openings</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {openPositions.map((position, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-[#2a9d96]/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="!text-[#3ec9c1] text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>{position.title}</h3>
                    <p className="text-[#2a9d96] text-sm">{position.department}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 md:mt-0 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <p className="text-white/70 mb-4">{position.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#2a9d96] font-medium hover:text-white transition-colors">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For - Light */}
      <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Ideal Candidates</span>
              <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                What we <span className="italic">look for</span>
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                We seek professionals who combine technical excellence with practical business sense.
                Our clients value advisors who can communicate clearly and provide actionable guidance.
              </p>
              <ul className="space-y-4">
                {qualitiesWeSeek.map((quality, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2a9d96] mt-2.5 flex-shrink-0" />
                    <span className="text-[#64748b]">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0a0f18] p-8">
              <h3 className="!text-[#3ec9c1] text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>Working at Norventure</h3>
              <p className="text-white/70 mb-6">
                Our environment combines the intellectual stimulation of complex international work with the
                accessibility of a firm where every team member makes a visible contribution.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Direct client interaction from early career stages',
                  'Exposure to multiple industries and transaction types',
                  'Supportive environment for professional certification',
                  'Competitive compensation and benefits',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2a9d96] mt-2 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Apply Now</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">Ready to join</span>
              <br /><span className="italic text-white">our team?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Send your CV and a brief cover letter to our careers team.
              We review all applications and respond to qualified candidates within two weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:careers@norventureservices.rs" className="group inline-flex items-center gap-3 bg-white text-[#0a0f18] px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#2a9d96] hover:text-white transition-all duration-500">
                careers@norventureservices.rs
              </a>
              <Link href="/contact" className="group inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white/10 transition-all duration-500">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
