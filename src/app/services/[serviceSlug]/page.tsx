'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { services, getServiceBySlug } from '@/data/services';
import { CheckCircle, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ serviceSlug: string }>;
}

export default function ServicePage({ params }: PageProps) {
  const { serviceSlug } = use(params);
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-all.jpg"
            alt={service.title}
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
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/services" className="text-white/60 text-sm hover:text-white transition-colors">
                Services
              </Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">{service.title}</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">
                Service Line
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="!text-[#3ec9c1] text-4xl md:text-5xl lg:text-6xl" style={{ color: '#3ec9c1 !important' }}>{service.title}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Services Section - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
                Available Services
              </span>
              <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                {service.title} <span className="italic">services</span>
              </h2>

              <p className="text-[#64748b] mb-10 text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Sub-services Grid */}
              <div className="space-y-4">
                {service.subServices.map((sub, index) => (
                  <Link
                    key={sub.slug}
                    href={`/services/${service.slug}/${sub.slug}`}
                    className="group block p-6 bg-white border border-[#e2e8f0] hover:border-[#2a9d96] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-[#2a9d96] text-xs font-medium tracking-[0.2em]">
                            0{index + 1}
                          </span>
                          <h3 className="text-lg font-medium text-[#0a0f18] group-hover:text-[#2a9d96] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                            {sub.title}
                          </h3>
                        </div>
                        <p className="text-[#64748b] text-sm leading-relaxed pl-12">
                          {sub.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#64748b] group-hover:text-[#2a9d96] flex-shrink-0 ml-4 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[#f1f5f9] p-6 mb-6">
                  <h3 className="text-[#0a0f18] font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Why Choose Our {service.title} Services
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'International standards and local expertise',
                      'Experienced professional team',
                      'Multi-jurisdiction capability',
                      'ERP and system integration',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#64748b]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0a0f18] p-6 text-white">
                  <h3 className="!text-[#3ec9c1] font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1 !important' }}>
                    Discuss Your Requirements
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    Contact us to discuss how our {service.title.toLowerCase()} services can support your business.
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

      {/* Other Service Lines - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
              Explore More
            </span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="!text-[#3ec9c1]" style={{ color: '#3ec9c1 !important' }}>Other service</span>
              <br />
              <span className="italic text-white">lines</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {otherServices.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-[#2a9d96]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[#2a9d96] text-xs font-medium tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#2a9d96] transition-colors" />
                </div>
                <h3 className="!text-[#3ec9c1] text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1 !important' }}>
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase block mb-4">
              Get Started
            </span>
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Discuss your {service.title.toLowerCase()}
              <br />
              <span className="italic">requirements</span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Contact our team to learn how we can support your business.
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
