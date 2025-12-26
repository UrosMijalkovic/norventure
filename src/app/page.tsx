'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { services } from '@/data/services';
import { jurisdictions } from '@/data/jurisdictions';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if mobile device
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        {/* Video Background - Desktop only, static image on mobile */}
        <div className="absolute inset-0 z-0">
          {!isMobile ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          ) : (
            <img
              src="/hero-all.jpg"
              alt="Norventure"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          {/* Refined gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.85) 0%, rgba(10, 15, 24, 0.7) 50%, rgba(10, 15, 24, 0.8) 100%)'
            }}
          />
          {/* Subtle vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 15, 24, 0.4) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-32 pb-24">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">
                Southeast Europe
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className={`mb-8 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              <span className="text-[#2a9d96]">Professional Services</span>
              <br />
              <span className="italic text-white">
                for International Groups
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed font-light transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Accounting, tax, and corporate services coordinated across six jurisdictions.
              One partner for your Southeast European operations.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-5 mb-20 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-[#0a0f18] px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#2a9d96] hover:text-white transition-all duration-500"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-500"
              >
                View Services
              </Link>
            </div>

            {/* Stats Row */}
            <div
              className={`grid grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-white/10 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {[
                { number: '6', label: 'Jurisdictions' },
                { number: '10+', label: 'Years Experience' },
                { number: '50+', label: 'Group Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div
                    className="text-4xl md:text-5xl text-white font-light tracking-tight mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Value Proposition - Dark Refined */}
      <section className="py-28 bg-[#0a0f18] border-t border-white/5">
        <div className="container">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
              Why Norventure
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">A regional partner built for</span>
              <br />
              <span className="italic text-white">international standards</span>
            </h2>
          </div>

          {/* Value Props Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              {
                num: '01',
                title: 'Multi-Jurisdiction Coverage',
                desc: 'Coordinated services across Serbia, Montenegro, Bosnia, North Macedonia, Slovenia, and Croatia through a single engagement.'
              },
              {
                num: '02',
                title: 'Regional Infrastructure',
                desc: 'Established teams with deep local expertise, regulatory knowledge, and practical experience in each market.'
              },
              {
                num: '03',
                title: 'Group Reporting Standards',
                desc: 'Deliverables aligned with IFRS, your group policies, and headquarters reporting requirements.'
              },
              {
                num: '04',
                title: 'Single Point of Contact',
                desc: 'One engagement team managing all jurisdictions, ensuring consistency and clear communication.'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#0a0f18] p-10 hover:bg-[#0f1520] transition-all duration-500 relative"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a9d96]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="text-[#2a9d96] text-xs font-medium tracking-[0.2em] block mb-6">
                  {item.num}
                </span>
                <h3 className="!text-[#3ec9c1] text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Editorial Light */}
      <section className="py-32 bg-[#fdfcfa]">
        <div className="container">
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Our Services
              </span>
              <h2 className="text-[#0a0f18] text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Comprehensive professional
                <br />
                <span className="italic">service lines</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#64748b] text-lg leading-relaxed max-w-lg">
                From transaction processing to strategic advisory, each service line is built for
                the complexities of multi-jurisdictional operations in Southeast Europe.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e8f0]">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-[#fdfcfa] p-10 hover:bg-[#0a0f18] transition-all duration-700"
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[#1d7a74] group-hover:text-[#2a9d96] text-xs font-medium tracking-[0.2em] transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#64748b] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-[#0a0f18] text-2xl mb-4 transition-colors duration-500 group-hover:!text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {language === 'sr' ? service.titleSr || service.title : service.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748b] group-hover:text-white/80 text-sm leading-relaxed mb-8 transition-colors duration-500">
                  {language === 'sr' ? service.descriptionSr || service.description : service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#1d7a74] group-hover:text-white text-sm font-medium transition-colors duration-500">
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1d7a74] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions Section - Map Style */}
      <section className="py-32 bg-[#0a0f18]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left - Content */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Regional Coverage
              </span>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-[#2a9d96]">Six jurisdictions,</span>
                <br />
                <span className="italic text-white">one partner</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
                Whether entering one market or managing operations across the region,
                we provide consistent, coordinated services with deep local expertise.
              </p>

              {/* Feature list */}
              <ul className="space-y-4 mb-12">
                {[
                  'Single point of contact for all jurisdictions',
                  'Standardized processes, localized execution',
                  'Cross-border coordination and planning',
                  'Deep regulatory expertise in each market',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2a9d96] mt-2.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/jurisdictions"
                className="group inline-flex items-center gap-3 border border-white/20 text-white px-6 py-3 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white hover:text-[#0a0f18] transition-all duration-500"
              >
                Explore Jurisdictions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Jurisdiction Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {jurisdictions.map((jurisdiction) => (
                <Link
                  key={jurisdiction.slug}
                  href={`/jurisdictions/${jurisdiction.slug}`}
                  className="group relative bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-[#2a9d96]/50 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-6 overflow-hidden">
                        <img
                          src={jurisdiction.flag}
                          alt={jurisdiction.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-white/60 text-xs font-medium tracking-wider">{jurisdiction.code}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#2a9d96] transition-colors" />
                  </div>
                  <h3 className="!text-[#3ec9c1] text-base font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {language === 'sr' ? jurisdiction.nameSr || jurisdiction.name : jurisdiction.name}
                  </h3>
                  <div className="flex flex-col gap-1 text-xs text-white/60">
                    <span>CIT: {jurisdiction.taxSystem.citRate}</span>
                    <span>VAT: {jurisdiction.taxSystem.vatRate}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section className="py-32 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Content */}
            <div>
              <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                About Norventure
              </span>
              <h2 className="text-[#0a0f18] text-4xl md:text-5xl font-light leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Built for international
                <br />
                <span className="italic">groups like yours</span>
              </h2>
              <p className="text-[#64748b] text-lg leading-relaxed mb-6 max-w-lg">
                We understand the challenges of managing regional operations—different regulations,
                currencies, languages, and business practices across borders.
              </p>
              <p className="text-[#64748b] leading-relaxed mb-10 max-w-lg">
                Our firm was established to address exactly this complexity. We combine local
                expertise with international standards, delivering consistent service quality
                while navigating each jurisdiction's unique requirements.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-[#0a0f18] font-medium"
              >
                <span className="border-b border-[#0a0f18]/30 group-hover:border-[#1d7a74] transition-colors pb-1">
                  Learn more about our firm
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Info Cards */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0f18] p-8">
                  <h4 className="!text-[#3ec9c1] text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Who We Serve
                  </h4>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li>International groups with SEE subsidiaries</li>
                    <li>PE-backed portfolio companies</li>
                    <li>Companies entering the region</li>
                    <li>Regional headquarters</li>
                  </ul>
                </div>
                <div className="bg-[#0a0f18] p-8">
                  <h4 className="!text-[#3ec9c1] text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Our Approach
                  </h4>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li>Single engagement team</li>
                    <li>Standardized processes</li>
                    <li>Proactive communication</li>
                    <li>IFRS-aligned reporting</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1d7a74] p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white text-xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Ready to discuss your requirements?
                    </h4>
                    <p className="text-white/90 text-sm">Schedule a consultation with our team.</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-[#0a0f18] px-6 py-3 text-sm font-medium tracking-[0.05em] uppercase hover:bg-white/90 transition-colors flex-shrink-0"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimal */}
      <section className="py-32 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">Let's discuss your</span>
              <br />
              <span className="italic text-white">regional operations</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Whether expanding into Southeast Europe or optimizing existing operations,
              we're here to help. Schedule a consultation to explore how we can support your group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-[#0a0f18] px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#2a9d96] hover:text-white transition-all duration-500"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-500"
              >
                View All Services
              </Link>
            </div>

            {/* Subtle divider */}
            <div className="mt-20 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
              <span className="text-white/50 text-xs tracking-[0.3em] uppercase">Norventure Services</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
