import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { jurisdictions } from '@/data/jurisdictions';
import { ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Jurisdictions',
  description: 'Accounting, tax, and corporate services across Serbia, Montenegro, Bosnia and Herzegovina, North Macedonia, Slovenia, and Croatia.',
};

export default function JurisdictionsPage() {
  return (
    <>
      <PageHeader
        title="Jurisdictions"
        subtitle="We provide services across six Southeast European jurisdictions, offering coordinated support for groups with regional operations."
        breadcrumbs={[{ label: 'Jurisdictions' }]}
        variant="large"
      />

      {/* Jurisdictions Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jurisdictions.map((jurisdiction) => (
              <Link
                key={jurisdiction.slug}
                href={`/jurisdictions/${jurisdiction.slug}`}
                className="block p-8 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-[var(--color-navy)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{jurisdiction.code}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h2 className="text-xl font-semibold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                  {jurisdiction.name}
                </h2>
                <div className="space-y-2 text-sm text-[var(--color-slate)] mb-4">
                  <p>CIT: {jurisdiction.taxSystem.citRate}</p>
                  <p>VAT: {jurisdiction.taxSystem.vatRate}</p>
                </div>
                <p className="text-sm text-[var(--color-charcoal)] line-clamp-3">
                  {jurisdiction.overview.substring(0, 150)}...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Approach */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
              Coordinated Regional Services
            </h2>
            <p className="text-[var(--color-charcoal)] mb-8">
              Our regional capability enables us to provide coordinated services across multiple jurisdictions through a single engagement. We standardize processes and reporting while maintaining compliance with local requirements in each country.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Single Point of Contact</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  One engagement team coordinates services across all your regional entities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Consistent Standards</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Standardized processes and deliverables adapted to local requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">Local Expertise</h3>
                <p className="text-sm text-[var(--color-slate)]">
                  Deep understanding of each jurisdiction&apos;s regulatory environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Regional Requirements"
        description="Contact us to discuss how we can support your operations across Southeast Europe."
      />
    </>
  );
}
