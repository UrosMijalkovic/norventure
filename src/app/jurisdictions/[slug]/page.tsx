import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { jurisdictions, getJurisdictionBySlug } from '@/data/jurisdictions';
import { CheckCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jurisdictions.map((jurisdiction) => ({
    slug: jurisdiction.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const jurisdiction = getJurisdictionBySlug(slug);

  if (!jurisdiction) {
    return { title: 'Jurisdiction Not Found' };
  }

  return {
    title: jurisdiction.name,
    description: `Accounting, tax, and corporate services in ${jurisdiction.name}. ${jurisdiction.overview.substring(0, 150)}`,
  };
}

export default async function JurisdictionPage({ params }: PageProps) {
  const { slug } = await params;
  const jurisdiction = getJurisdictionBySlug(slug);

  if (!jurisdiction) {
    notFound();
  }

  const otherJurisdictions = jurisdictions.filter((j) => j.slug !== jurisdiction.slug);

  return (
    <>
      <PageHeader
        title={jurisdiction.name}
        subtitle={jurisdiction.overview}
        breadcrumbs={[
          { label: 'Jurisdictions', href: '/jurisdictions' },
          { label: jurisdiction.name },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Tax System */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Tax System</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[var(--color-gray-light)] rounded-lg p-6">
                    <p className="text-sm text-[var(--color-slate)] mb-1">Corporate Income Tax</p>
                    <p className="text-2xl font-semibold text-[var(--color-navy)]">{jurisdiction.taxSystem.citRate}</p>
                  </div>
                  <div className="bg-[var(--color-gray-light)] rounded-lg p-6">
                    <p className="text-sm text-[var(--color-slate)] mb-1">Value Added Tax</p>
                    <p className="text-2xl font-semibold text-[var(--color-navy)]">{jurisdiction.taxSystem.vatRate}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {jurisdiction.taxSystem.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[var(--color-slate)]">
                  <strong>Treaty Network:</strong> {jurisdiction.taxSystem.treatyNetwork}
                </p>
              </div>

              {/* Employment */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Employment</h2>
                <p className="text-[var(--color-charcoal)] mb-4">{jurisdiction.employment.overview}</p>
                <p className="text-sm text-[var(--color-slate)] mb-4">
                  <strong>Social Contributions:</strong> {jurisdiction.employment.socialContributions}
                </p>
                <h3 className="font-semibold text-[var(--color-navy)] mb-3">Key Requirements</h3>
                <ul className="space-y-2">
                  {jurisdiction.employment.keyRequirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Formation */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Company Formation</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-[var(--color-navy)] mb-3">Entity Types</h3>
                    <ul className="space-y-2">
                      {jurisdiction.companyFormation.entityTypes.map((type, index) => (
                        <li key={index} className="text-[var(--color-charcoal)]">• {type}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-sm text-[var(--color-slate)] mb-1">Typical Timeline</p>
                      <p className="font-semibold text-[var(--color-navy)]">{jurisdiction.companyFormation.timeline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-slate)] mb-1">Capital Requirements</p>
                      <p className="text-[var(--color-charcoal)]">{jurisdiction.companyFormation.capitalRequirements}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory Environment */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Regulatory Environment</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-[var(--color-navy)] mb-3">Key Regulators</h3>
                    <ul className="space-y-2">
                      {jurisdiction.regulatoryEnvironment.keyRegulators.map((reg, index) => (
                        <li key={index} className="text-[var(--color-charcoal)]">• {reg}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-navy)] mb-3">Compliance Notes</h3>
                    <ul className="space-y-2">
                      {jurisdiction.regulatoryEnvironment.complianceNotes.map((note, index) => (
                        <li key={index} className="text-[var(--color-charcoal)]">• {note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Presence */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">Our Presence in {jurisdiction.name}</h2>
                <p className="text-[var(--color-charcoal)]">{jurisdiction.ourPresence}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-xl bg-[var(--color-navy)] flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">{jurisdiction.code}</span>
                  </div>
                </div>

                <div className="bg-[var(--color-navy)] rounded-lg p-6 text-white mb-6">
                  <h3 className="font-semibold mb-3">Discuss Operations in {jurisdiction.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Contact us to discuss how we can support your business in {jurisdiction.name}.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center py-3 bg-white text-[var(--color-navy)] font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="bg-[var(--color-gray-light)] rounded-lg p-6">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-4">Other Jurisdictions</h3>
                  <ul className="space-y-3">
                    {otherJurisdictions.map((j) => (
                      <li key={j.slug}>
                        <Link
                          href={`/jurisdictions/${j.slug}`}
                          className="flex items-center space-x-3 text-[var(--color-slate)] hover:text-[var(--color-teal)] transition-colors"
                        >
                          <span className="w-8 h-8 rounded bg-[var(--color-navy)] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {j.code}
                          </span>
                          <span>{j.name}</span>
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
        title={`Discuss Your ${jurisdiction.name} Operations`}
        description={`Contact us to learn how we can support your business in ${jurisdiction.name}.`}
      />
    </>
  );
}
