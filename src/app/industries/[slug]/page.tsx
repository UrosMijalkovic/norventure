import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import IndustryIcon from '@/components/IndustryIcon';
import { industries, getIndustryBySlug } from '@/data/industries';
import { CheckCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Industry Not Found' };
  }

  return {
    title: industry.name,
    description: `Accounting, tax, and corporate services for ${industry.name.toLowerCase()} companies operating in Southeast Europe. ${industry.description}`,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const otherIndustries = industries.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <PageHeader
        title={industry.name}
        subtitle={industry.description}
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: industry.name },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
                  Industry Overview
                </h2>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  {industry.overview}
                </p>
              </div>

              {/* Key Services */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
                  Key Services for {industry.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {industry.keyServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-[var(--color-gray-light)] rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
                  Industry Challenges We Address
                </h2>
                <ul className="space-y-3">
                  {industry.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Experience */}
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
                  Our Experience
                </h2>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  {industry.experience}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-xl bg-[var(--color-teal)]/10 flex items-center justify-center">
                    <IndustryIcon name={industry.iconName} className="w-12 h-12 text-[var(--color-teal)]" />
                  </div>
                </div>

                <div className="bg-[var(--color-navy)] rounded-lg p-6 text-white mb-6">
                  <h3 className="font-semibold mb-3">Discuss {industry.name} Services</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Contact us to discuss how we can support your {industry.name.toLowerCase()} operations in Southeast Europe.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center py-3 bg-white text-[var(--color-navy)] font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="bg-[var(--color-gray-light)] rounded-lg p-6">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-4">Other Industries</h3>
                  <ul className="space-y-3">
                    {otherIndustries.map((i) => (
                      <li key={i.slug}>
                        <Link
                          href={`/industries/${i.slug}`}
                          className="flex items-center space-x-3 text-[var(--color-slate)] hover:text-[var(--color-teal)] transition-colors"
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
        </div>
      </section>

      <CTASection
        title={`Discuss Your ${industry.name} Requirements`}
        description={`Contact us to learn how we can support your ${industry.name.toLowerCase()} operations in Southeast Europe.`}
      />
    </>
  );
}
