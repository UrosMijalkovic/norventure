'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { services, getServiceBySlug, getSubServiceBySlug } from '@/data/services';
import { CheckCircle, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
}

export default function SubServicePage({ params }: PageProps) {
  const { serviceSlug, subServiceSlug } = use(params);
  const service = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlug(serviceSlug, subServiceSlug);

  if (!service || !subService) {
    notFound();
  }

  // Find related services from the relatedServices array
  const relatedServices = subService.relatedServices
    .map((slug) => {
      for (const s of services) {
        const found = s.subServices.find((sub) => sub.slug === slug);
        if (found) {
          return { service: s, subService: found };
        }
      }
      return null;
    })
    .filter(Boolean);

  // Other services in same service line
  const siblingServices = service.subServices.filter((s) => s.slug !== subService.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-all.jpg"
            alt={subService.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)'
            }}
          />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 flex-wrap">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/services" className="text-white/60 text-sm hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href={`/services/${service.slug}`} className="text-white/60 text-sm hover:text-white transition-colors">
                {service.title}
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">{subService.title}</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">
                {service.title}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="!text-[#3ec9c1] text-4xl md:text-5xl lg:text-6xl" style={{ color: '#3ec9c1 !important' }}>{subService.title}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {subService.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                  Overview
                </span>
                <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  What we <span className="italic">offer</span>
                </h2>
                <p className="text-[#64748b] leading-relaxed text-lg">
                  {subService.overview}
                </p>
              </div>

              {/* Scope */}
              <div>
                <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                  Scope of Service
                </span>
                <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                  What&apos;s <span className="italic">included</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {subService.scope.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white border border-[#e2e8f0]"
                    >
                      <CheckCircle className="w-5 h-5 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64748b]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Other services in this line */}
                {siblingServices.length > 0 && (
                  <div className="bg-[#f1f5f9] p-6 mb-6">
                    <h3 className="text-[#0a0f18] font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                      Other {service.title} Services
                    </h3>
                    <ul className="space-y-3">
                      {siblingServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${service.slug}/${s.slug}`}
                            className="group flex items-center gap-2 text-sm text-[#64748b] hover:text-[#2a9d96] transition-colors"
                          >
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="bg-[#0a0f18] p-6 text-white">
                  <h3 className="!text-[#3ec9c1] font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1 !important' }}>
                    Discuss {subService.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    Contact us to discuss how this service can support your business requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center w-full gap-2 bg-white text-[#0a0f18] py-3 px-4 font-medium hover:bg-[#2a9d96] hover:text-white transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Target Audience - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Approach */}
            <div>
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="!text-[#3ec9c1]" style={{ color: '#3ec9c1 !important' }}>How we</span>
                <br />
                <span className="italic text-white">deliver</span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                {subService.approach}
              </p>
            </div>

            {/* Target Audience */}
            <div>
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Who This Is For
              </span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="!text-[#3ec9c1]" style={{ color: '#3ec9c1 !important' }}>Target</span>
                <br />
                <span className="italic text-white">audience</span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                {subService.targetAudience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Light */}
      {relatedServices.length > 0 && (
        <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
          <div className="container">
            <div className="max-w-3xl mb-16">
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Related Services
              </span>
              <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                You may also be
                <br />
                <span className="italic">interested in</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {relatedServices.slice(0, 3).map((item, i) => {
                if (!item) return null;
                return (
                  <Link
                    key={item.subService.slug}
                    href={`/services/${item.service.slug}/${item.subService.slug}`}
                    className="group bg-white border border-[#e2e8f0] p-6 hover:border-[#2a9d96] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[#2a9d96] text-xs font-medium tracking-[0.2em]">
                        {item.service.title}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#2a9d96] transition-colors" />
                    </div>
                    <h3 className="text-[#0a0f18] text-lg font-medium mb-2 group-hover:text-[#2a9d96] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.subService.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.subService.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="!text-[#3ec9c1]" style={{ color: '#3ec9c1 !important' }}>Discuss {subService.title}</span>
              <br />
              <span className="italic text-white">requirements</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Contact our team to learn how we can support your business with this service.
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
                href={`/services/${service.slug}`}
                className="group inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white hover:text-[#0a0f18] transition-all duration-500"
              >
                All {service.title} Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
