'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { jurisdictions, getJurisdictionBySlug } from '@/data/jurisdictions';
import { CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';
import { use } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function JurisdictionPage({ params }: PageProps) {
  const { slug } = use(params);
  const jurisdiction = getJurisdictionBySlug(slug);

  if (!jurisdiction) {
    notFound();
  }

  const otherJurisdictions = jurisdictions.filter((j) => j.slug !== jurisdiction.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src={jurisdiction.heroImage} alt={jurisdiction.capital} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/jurisdictions" className="text-white/60 text-sm hover:text-white transition-colors">Jurisdictions</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">{jurisdiction.name}</span>
            </div>

            {/* Flag and Code */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-12 overflow-hidden shadow-lg">
                <img
                  src={jurisdiction.flag}
                  alt={jurisdiction.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium">
                {jurisdiction.code}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">{jurisdiction.capital}</span>
            </div>

            {/* Title */}
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#3ec9c1] text-4xl md:text-5xl lg:text-6xl">{jurisdiction.name}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {jurisdiction.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Tax System Section - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Fiscal Framework
          </p>
          <h2
            className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tax System
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 bg-[#0a0f18]">
              <p className="text-white/60 text-sm mb-2">Corporate Income Tax</p>
              <p
                className="text-4xl font-light"
                style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
              >
                {jurisdiction.taxSystem.citRate}
              </p>
            </div>
            <div className="p-8 bg-[#0a0f18]">
              <p className="text-white/60 text-sm mb-2">Value Added Tax</p>
              <p
                className="text-4xl font-light"
                style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
              >
                {jurisdiction.taxSystem.vatRate}
              </p>
            </div>
          </div>

          <h3 className="text-xl font-light text-[#0a0f18] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Key Features</h3>
          <ul className="space-y-4 mb-8">
            {jurisdiction.taxSystem.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                <span className="text-[#0a0f18]/70 text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#0a0f18]/60 border-t border-[#0a0f18]/10 pt-6">
            <strong className="text-[#0a0f18]">Treaty Network:</strong> {jurisdiction.taxSystem.treatyNetwork}
          </p>
        </div>
      </section>

      {/* Employment Section - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Workforce
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-8"
            style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
          >
            Employment
          </h2>

          <p className="text-white/70 text-lg mb-6 max-w-3xl">
            {jurisdiction.employment.overview}
          </p>

          <p className="text-white/60 mb-8">
            <strong className="text-white">Social Contributions:</strong> {jurisdiction.employment.socialContributions}
          </p>

          <h3 className="text-xl font-light !text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Key Requirements</h3>
          <ul className="space-y-4">
            {jurisdiction.employment.keyRequirements.map((req, index) => (
              <li key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-5 h-5 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                <span className="text-white text-lg">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Company Formation Section - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Establishing Presence
          </p>
          <h2
            className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Company Formation
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light text-[#0a0f18] mb-6" style={{ fontFamily: 'var(--font-display)' }}>Entity Types</h3>
              <ul className="space-y-3">
                {jurisdiction.companyFormation.entityTypes.map((type, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2a9d96]" />
                    <span className="text-[#0a0f18]/70 text-lg">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div className="p-6 bg-[#0a0f18]/5 border border-[#0a0f18]/10">
                <p className="text-[#0a0f18]/50 text-sm mb-2">Typical Timeline</p>
                <p
                  className="text-2xl font-light text-[#0a0f18]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {jurisdiction.companyFormation.timeline}
                </p>
              </div>
              <div className="p-6 bg-[#0a0f18]/5 border border-[#0a0f18]/10">
                <p className="text-[#0a0f18]/50 text-sm mb-2">Capital Requirements</p>
                <p className="text-[#0a0f18]/80 text-lg">{jurisdiction.companyFormation.capitalRequirements}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Environment Section - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Compliance
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-12"
            style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
          >
            Regulatory Environment
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light !text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Key Regulators</h3>
              <ul className="space-y-3">
                {jurisdiction.regulatoryEnvironment.keyRegulators.map((reg, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2a9d96]" />
                    <span className="text-white text-lg">{reg}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light !text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>Compliance Notes</h3>
              <ul className="space-y-3">
                {jurisdiction.regulatoryEnvironment.complianceNotes.map((note, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2a9d96]" />
                    <span className="text-white text-lg">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence Section - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                Local Expertise
              </p>
              <h2
                className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Our Presence in {jurisdiction.name}
              </h2>
              <p className="text-[#0a0f18]/70 leading-relaxed text-lg">
                {jurisdiction.ourPresence}
              </p>
            </div>

            {/* Sidebar - Other Jurisdictions */}
            <div className="lg:col-span-1">
              <div className="p-6 bg-[#0a0f18]/5 border border-[#0a0f18]/10">
                <h3 className="text-lg font-medium text-[#0a0f18] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Other Jurisdictions</h3>
                <ul className="space-y-3">
                  {otherJurisdictions.map((j) => (
                    <li key={j.slug}>
                      <Link
                        href={`/jurisdictions/${j.slug}`}
                        className="flex items-center space-x-3 text-[#0a0f18]/60 hover:text-[#2a9d96] transition-colors"
                      >
                        <span className="w-8 h-8 bg-[#0a0f18] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {j.code}
                        </span>
                        <span>{j.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
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
              Discuss Your {jurisdiction.name} Operations
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Contact us to learn how we can support your business in {jurisdiction.name}.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#2a9d96] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#238b85] transition-all duration-500"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
