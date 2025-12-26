'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight, Calendar } from 'lucide-react';
import { insights, formatDate } from '@/data/insights';

const categories = [
  { key: 'all', label: 'All Insights' },
  { key: 'tax-update', label: 'Tax Updates' },
  { key: 'regulatory', label: 'Regulatory' },
  { key: 'business-guide', label: 'Business Guides' },
  { key: 'analysis', label: 'Analysis' },
];

export default function InsightsPage() {
  const featuredInsight = insights[0];
  const otherInsights = insights.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.png" alt="Insights" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Insights</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Knowledge Center</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Insights</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Tax updates, regulatory developments, and practical guidance for international
              businesses operating in Southeast Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#0a0f18] p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-[#2a9d96] text-white text-xs font-medium tracking-wider uppercase mb-6">
                {featuredInsight.categoryLabel}
              </span>
              <h2 className="!text-[#3ec9c1] text-2xl lg:text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {featuredInsight.title}
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">{featuredInsight.summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(featuredInsight.date)}</span>
                </div>
                <Link href={`/insights/${featuredInsight.slug}`} className="inline-flex items-center gap-2 text-[#2a9d96] font-medium hover:text-white transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Recent Updates</span>
              <div className="space-y-3">
                {otherInsights.slice(0, 4).map((insight) => (
                  <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group block p-4 bg-white border border-[#e2e8f0] hover:border-[#2a9d96] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-[#2a9d96] font-medium">{insight.categoryLabel}</span>
                      {insight.jurisdiction && (
                        <span className="text-xs text-[#64748b]">• {insight.jurisdiction}</span>
                      )}
                    </div>
                    <h4 className="text-[#0a0f18] font-medium group-hover:text-[#2a9d96] transition-colors line-clamp-2">{insight.title}</h4>
                    <p className="text-xs text-[#64748b] mt-1">{formatDate(insight.date)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Insights Grid - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <span key={category.key} className={`px-4 py-2 text-sm ${category.key === 'all' ? 'bg-[#2a9d96] text-white' : 'bg-white/5 text-white/70 border border-white/10'}`}>
                {category.label}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group bg-[#0a0f18] p-6 hover:bg-[#0f1520] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#2a9d96] font-medium">{insight.categoryLabel}</span>
                    {insight.jurisdiction && (
                      <span className="text-xs text-white/50">• {insight.jurisdiction}</span>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#2a9d96] transition-colors" />
                </div>
                <h3 className="!text-white group-hover:!text-[#3ec9c1] text-lg font-medium mb-2 transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {insight.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{insight.summary}</p>
                <span className="text-xs text-white/40">{formatDate(insight.date)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA - Light */}
      <section className="py-28 bg-[#fdfcfa] border-t border-[#e2e8f0]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#0a0f18] text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Stay <span className="italic">informed</span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Contact us to discuss how we can keep you updated on relevant tax and regulatory developments in Southeast Europe.
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
