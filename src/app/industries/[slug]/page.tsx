'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import IndustryIcon from '@/components/IndustryIcon';
import { industries, getIndustryBySlug } from '@/data/industries';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { use } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryPage({ params }: PageProps) {
  const { slug } = use(params);
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = industries.filter((i) => i.slug !== industry.slug);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] -mt-[80px] pt-[80px] flex items-center"
        style={{ backgroundColor: '#0a0f18' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-all.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-6 relative z-10 py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span className="text-[#2a9d96]">{industry.name}</span>
          </nav>

          {/* Eyebrow */}
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Industry Expertise
          </p>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white max-w-4xl mb-6"
            style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
          >
            {industry.name}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-2xl">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Overview Section - Light */}
      <section className="py-28" style={{ backgroundColor: '#fdfcfa' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                Overview
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-8"
                style={{ fontFamily: 'var(--font-display)', color: '#0a0f18' }}
              >
                Industry Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {industry.overview}
              </p>
            </div>

            {/* Sidebar Icon */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-32 h-32 rounded-2xl bg-[#2a9d96]/10 flex items-center justify-center">
                <IndustryIcon name={industry.iconName} className="w-16 h-16 text-[#2a9d96]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section - Dark */}
      <section className="py-28" style={{ backgroundColor: '#0a0f18' }}>
        <div className="container mx-auto px-6">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-12"
            style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
          >
            Key Services for {industry.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.keyServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl border border-gray-800 hover:border-[#2a9d96]/50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section - Light */}
      <section className="py-28" style={{ backgroundColor: '#fdfcfa' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Our Solutions
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-12"
              style={{ fontFamily: 'var(--font-display)', color: '#0a0f18' }}
            >
              Industry Challenges We Address
            </h2>
            <ul className="space-y-4">
              {industry.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section - Dark */}
      <section className="py-28" style={{ backgroundColor: '#0a0f18' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                Track Record
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-8"
                style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
              >
                Our Experience
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {industry.experience}
              </p>
            </div>

            {/* Sidebar - Other Industries */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <h3 className="font-semibold text-white mb-4">Other Industries</h3>
                <ul className="space-y-3">
                  {otherIndustries.map((i) => (
                    <li key={i.slug}>
                      <Link
                        href={`/industries/${i.slug}`}
                        className="flex items-center space-x-3 text-gray-400 hover:text-[#2a9d96] transition-colors"
                      >
                        <IndustryIcon name={i.iconName} className="w-5 h-5" />
                        <span>{i.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="py-28" style={{ backgroundColor: '#fdfcfa' }}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Get Started
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-display)', color: '#0a0f18' }}
          >
            Discuss Your {industry.name} Requirements
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact us to learn how we can support your {industry.name.toLowerCase()} operations in Southeast Europe.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2a9d96] text-white font-medium rounded-lg hover:bg-[#238b85] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
