import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { insights, getInsightBySlug, formatDate } from '@/data/insights';
import { CheckCircle, Calendar, User, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return { title: 'Article Not Found' };
  }

  return {
    title: insight.title,
    description: insight.summary,
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = insights
    .filter((i) => i.slug !== insight.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={insight.title}
        subtitle={insight.summary}
        breadcrumbs={[
          { label: 'Insights', href: '/insights' },
          { label: insight.categoryLabel },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-[var(--color-gray-border)]">
                <span className="inline-block px-3 py-1 bg-[var(--color-teal)]/10 text-[var(--color-teal)] text-sm rounded">
                  {insight.categoryLabel}
                </span>
                {insight.jurisdiction && (
                  <span className="text-sm text-[var(--color-slate)]">
                    {insight.jurisdiction}
                  </span>
                )}
                <div className="flex items-center space-x-2 text-sm text-[var(--color-slate)]">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(insight.date)}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                {insight.content.map((paragraph, index) => (
                  <p key={index} className="text-[var(--color-charcoal)] mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Points */}
              <div className="mt-12 p-8 bg-[var(--color-gray-light)] rounded-lg">
                <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-6">
                  Key Points
                </h3>
                <ul className="space-y-3">
                  {insight.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author */}
              <div className="mt-12 pt-8 border-t border-[var(--color-gray-border)]">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[var(--color-gray-light)] rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-[var(--color-slate)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-navy)]">{insight.author}</p>
                    <p className="text-sm text-[var(--color-slate)]">{insight.authorRole}</p>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <div className="mt-8">
                <Link
                  href="/insights"
                  className="inline-flex items-center space-x-2 text-[var(--color-teal)] hover:underline"
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
                <div className="bg-[var(--color-navy)] rounded-lg p-6 text-white mb-6">
                  <h3 className="font-semibold mb-3">Need More Information?</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Contact our team to discuss how these developments may affect your business.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center py-3 bg-white text-[var(--color-navy)] font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Related Insights */}
                <div className="bg-[var(--color-gray-light)] rounded-lg p-6">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-4">Related Insights</h3>
                  <ul className="space-y-4">
                    {relatedInsights.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/insights/${related.slug}`}
                          className="block hover:text-[var(--color-teal)] transition-colors"
                        >
                          <span className="text-xs text-[var(--color-teal)]">{related.categoryLabel}</span>
                          <h4 className="text-sm font-medium text-[var(--color-navy)] line-clamp-2 mt-1">
                            {related.title}
                          </h4>
                          <p className="text-xs text-[var(--color-slate)] mt-1">
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

      <CTASection
        title="Stay Updated on Regional Developments"
        description="Contact us to discuss how we can keep you informed about relevant tax and regulatory changes."
      />
    </>
  );
}
