'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { industries } from '@/data/industries';
import IndustryIcon from '@/components/IndustryIcon';

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.jpg" alt="Industries" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Industries</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Sector Expertise</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Industries</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              We serve international clients across diverse industries, applying our regional expertise
              to sector-specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Our Sectors</span>
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Industry-specific
              <br /><span className="italic">expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e8f0]">
            {industries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative bg-[#fdfcfa] p-8 hover:bg-[#0a0f18] transition-all duration-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#2a9d96]/10 group-hover:bg-[#2a9d96]/20 flex items-center justify-center transition-colors">
                    <IndustryIcon name={industry.iconName} className="w-6 h-6 text-[#2a9d96]" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#64748b] group-hover:text-white transition-colors" />
                </div>

                <h3 className="!text-[#0a0f18] group-hover:!text-[#3ec9c1] text-xl mb-3 transition-colors duration-500" style={{ fontFamily: 'var(--font-display)' }}>
                  {industry.name}
                </h3>

                <p className="text-[#64748b] group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {industry.keyServices.slice(0, 3).map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-[#e2e8f0] group-hover:bg-white/10 text-xs text-[#64748b] group-hover:text-white/60 transition-colors">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1d7a74] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Expertise - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-[#2a9d96]">Sector-specific</span>
              <br /><span className="italic text-white">knowledge</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              While our core services remain consistent, we recognize that different industries have distinct
              requirements. Our team includes professionals with backgrounds in key sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {[
              { title: 'Industry Knowledge', desc: 'Team members with relevant industry backgrounds and ongoing sector training.' },
              { title: 'Regulatory Understanding', desc: 'Familiarity with sector-specific regulations and compliance requirements.' },
              { title: 'Practical Experience', desc: 'Direct experience serving clients in each sector we highlight.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0f18] p-8">
                <h3 className="!text-[#3ec9c1] text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Discuss your industry <span className="italic">requirements</span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Contact us to discuss how our industry experience can benefit your operations in Southeast Europe.
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
