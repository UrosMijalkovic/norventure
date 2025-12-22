import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import IndustryIcon from '@/components/IndustryIcon';
import { industries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Industry-specific accounting, tax, and corporate services for international businesses across Southeast Europe.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries"
        subtitle="We serve international clients across diverse industries, applying our regional expertise to sector-specific requirements."
        breadcrumbs={[{ label: 'Industries' }]}
        variant="large"
      />

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="block p-8 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-teal)]/10 flex items-center justify-center">
                    <IndustryIcon name={industry.iconName} className="w-6 h-6 text-[var(--color-teal)]" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h2 className="text-xl font-semibold text-[var(--color-navy)] mb-3 group-hover:text-[var(--color-teal)] transition-colors">
                  {industry.name}
                </h2>
                <p className="text-sm text-[var(--color-charcoal)] mb-4">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.keyServices.slice(0, 3).map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[var(--color-gray-light)] text-xs text-[var(--color-slate)] rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capability */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
              Sector-Specific Expertise
            </h2>
            <p className="text-[var(--color-charcoal)] mb-8">
              While our core services remain consistent, we recognize that different industries have distinct requirements. Our team includes professionals with backgrounds in key sectors, enabling us to understand industry-specific regulations, reporting requirements, and business practices.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Industry Knowledge</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Team members with relevant industry backgrounds and ongoing sector training.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Regulatory Understanding</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Familiarity with sector-specific regulations and compliance requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Practical Experience</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Direct experience serving clients in each sector we highlight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Industry Requirements"
        description="Contact us to discuss how our industry experience can benefit your operations in Southeast Europe."
      />
    </>
  );
}
