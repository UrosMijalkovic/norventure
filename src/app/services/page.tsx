'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesPage() {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-all.png"
            alt="Services"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Services</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">
                What We Do
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Our Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Comprehensive accounting, tax, payroll, and corporate services designed for
              international businesses and multinational groups operating in Southeast Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
              Service Lines
            </span>
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Full-service capabilities across
              <br />
              <span className="italic">all practice areas</span>
            </h2>
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
                <h3 className="!text-[#0a0f18] group-hover:!text-white text-2xl mb-4 transition-colors duration-500" style={{ fontFamily: 'var(--font-display)' }}>
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

      {/* Detailed Service Lines - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
              Explore In Depth
            </span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">Detailed service lines</span>
              <br />
              <span className="italic text-white">tailored to your needs</span>
            </h2>
          </div>

          {/* Service Blocks */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="grid lg:grid-cols-2 gap-12 items-start pb-16 border-b border-white/10 last:border-b-0 last:pb-0"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-[#2a9d96] text-xs font-medium tracking-[0.2em] block mb-4">
                    0{index + 1}
                  </span>
                  <h3 className="!text-[#3ec9c1] text-2xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {language === 'sr' ? service.titleSr || service.title : service.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {language === 'sr' ? service.descriptionSr || service.description : service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-[#2a9d96] font-medium hover:text-white transition-colors"
                  >
                    <span>View all {service.title} services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={`grid grid-cols-1 gap-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {service.subServices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${service.slug}/${sub.slug}`}
                      className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#2a9d96]/50 transition-all duration-300"
                    >
                      <span className="text-white/80 group-hover:text-white text-sm transition-colors">
                        {language === 'sr' ? sub.titleSr || sub.title : sub.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#2a9d96] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
              Get Started
            </span>
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Discuss your service
              <br />
              <span className="italic">requirements</span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Contact us to discuss how we can support your business with our
              comprehensive range of professional services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#0a0f18] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#2a9d96] transition-all duration-500"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-[#0a0f18]/30 text-[#0a0f18] px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#0a0f18] hover:text-white transition-all duration-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
