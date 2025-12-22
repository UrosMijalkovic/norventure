import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { insights, formatDate } from '@/data/insights';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Tax updates, regulatory news, and business guides for international companies operating in Southeast Europe.',
};

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
      <PageHeader
        title="Insights"
        subtitle="Tax updates, regulatory developments, and practical guidance for international businesses in Southeast Europe."
        breadcrumbs={[{ label: 'Insights' }]}
        variant="large"
      />

      {/* Featured Insight */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-[var(--color-navy)] rounded-lg p-8 lg:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-[var(--color-teal)] text-white text-sm rounded mb-4">
                {featuredInsight.categoryLabel}
              </span>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                {featuredInsight.title}
              </h2>
              <p className="text-gray-300 mb-6">{featuredInsight.summary}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(featuredInsight.date)}</span>
                </div>
                <Link
                  href={`/insights/${featuredInsight.slug}`}
                  className="inline-flex items-center space-x-2 text-[var(--color-teal)] hover:underline"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-4">
                Recent Updates
              </h3>
              <div className="space-y-4">
                {otherInsights.slice(0, 3).map((insight) => (
                  <Link
                    key={insight.slug}
                    href={`/insights/${insight.slug}`}
                    className="block p-4 bg-[var(--color-gray-light)] rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-[var(--color-teal)] font-medium">
                        {insight.categoryLabel}
                      </span>
                      {insight.jurisdiction && (
                        <span className="text-xs text-[var(--color-slate)]">
                          • {insight.jurisdiction}
                        </span>
                      )}
                    </div>
                    <h4 className="font-medium text-[var(--color-navy)] line-clamp-2">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-[var(--color-slate)] mt-1">
                      {formatDate(insight.date)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter (static display) */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <span
                key={category.key}
                className={`px-4 py-2 rounded-full text-sm ${
                  category.key === 'all'
                    ? 'bg-[var(--color-navy)] text-white'
                    : 'bg-white text-[var(--color-charcoal)] border border-[var(--color-gray-border)]'
                }`}
              >
                {category.label}
              </span>
            ))}
          </div>

          {/* All Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="block bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs text-[var(--color-teal)] font-medium">
                      {insight.categoryLabel}
                    </span>
                    {insight.jurisdiction && (
                      <span className="text-xs text-[var(--color-slate)]">
                        • {insight.jurisdiction}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-teal)] transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-[var(--color-charcoal)] mb-4 line-clamp-2">
                    {insight.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[var(--color-slate)]">
                    <span>{formatDate(insight.date)}</span>
                    <span className="inline-flex items-center space-x-1 text-[var(--color-teal)]">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">
              Stay Informed
            </h2>
            <p className="text-[var(--color-charcoal)] mb-6">
              Contact us to discuss how we can keep you updated on relevant tax and regulatory developments in Southeast Europe.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
