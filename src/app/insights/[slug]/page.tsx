'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { insights, getInsightBySlug, formatDate } from '@/data/insights';
import { CheckCircle, Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { use } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function InsightPage({ params }: PageProps) {
  const { slug } = use(params);
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = insights
    .filter((i) => i.slug !== insight.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.png" alt={insight.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/insights" className="text-white/60 text-sm hover:text-white transition-colors">Insights</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">{insight.categoryLabel}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">{insight.categoryLabel}</span>
            </div>

            <h1 className="!text-[#3ec9c1] text-3xl md:text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.2 }}>
              {insight.title}
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
              {insight.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-white/60">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(insight.date)}</span>
              </div>
              {insight.jurisdiction && (
                <span className="text-white/60">{insight.jurisdiction}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - Light Section */}
      <section className="py-28" style={{ backgroundColor: '#fdfcfa' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article Content */}
              <div className="prose max-w-none">
                {insight.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Points */}
              <div className="mt-12 p-8" style={{ backgroundColor: '#0a0f18' }}>
                <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
                  Key Takeaways
                </p>
                <h3
                  className="text-2xl font-light text-white mb-6"
                  style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
                >
                  Key Points
                </h3>
                <ul className="space-y-4">
                  {insight.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2a9d96] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{insight.author}</p>
                    <p className="text-sm text-gray-500">{insight.authorRole}</p>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <div className="mt-8">
                <Link
                  href="/insights"
                  className="inline-flex items-center space-x-2 text-[#2a9d96] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Insights</span>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Contact CTA */}
                <div className="p-6 text-white mb-6" style={{ backgroundColor: '#0a0f18' }}>
                  <h3 className="font-semibold mb-3" style={{ color: '#3ec9c1' }}>
                    Need More Information?
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Contact our team to discuss how these developments may affect your business.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center py-3 bg-[#2a9d96] text-white text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#238b85] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Related Insights */}
                <div className="bg-[#fdfcfa] border border-[#0a0f18]/10 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Insights</h3>
                  <ul className="space-y-4">
                    {relatedInsights.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/insights/${related.slug}`}
                          className="block hover:text-[#2a9d96] transition-colors"
                        >
                          <span className="text-xs text-[#2a9d96] font-medium tracking-wider uppercase">
                            {related.categoryLabel}
                          </span>
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mt-1">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(related.date)}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-28" style={{ backgroundColor: '#0a0f18' }}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Stay Informed
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
          >
            Stay Updated on Regional Developments
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Contact us to discuss how we can keep you informed about relevant tax and regulatory changes.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#2a9d96] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#238b85] transition-all duration-500"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
