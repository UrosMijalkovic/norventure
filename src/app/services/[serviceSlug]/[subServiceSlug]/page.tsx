import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { services, getServiceBySlug, getSubServiceBySlug, getAllSubServices } from '@/data/services';
import { CheckCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
}

export async function generateStaticParams() {
  return getAllSubServices().map(({ service, subService }) => ({
    serviceSlug: service.slug,
    subServiceSlug: subService.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceSlug, subServiceSlug } = await params;
  const subService = getSubServiceBySlug(serviceSlug, subServiceSlug);

  if (!subService) {
    return { title: 'Service Not Found' };
  }

  return {
    title: subService.title,
    description: subService.description,
  };
}

export default async function SubServicePage({ params }: PageProps) {
  const { serviceSlug, subServiceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlug(serviceSlug, subServiceSlug);

  if (!service || !subService) {
    notFound();
  }

  // Find related services from the relatedServices array
  const relatedServices = subService.relatedServices
    .map((slug) => {
      for (const s of services) {
        const found = s.subServices.find((sub) => sub.slug === slug);
        if (found) {
          return { service: s, subService: found };
        }
      }
      return null;
    })
    .filter(Boolean);

  return (
    <>
      <PageHeader
        title={subService.title}
        subtitle={subService.description}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
          { label: subService.title },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">Overview</h2>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  {subService.overview}
                </p>
              </div>

              {/* Scope */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">Scope of Service</h2>
                <ul className="space-y-3">
                  {subService.scope.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-charcoal)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">Our Approach</h2>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  {subService.approach}
                </p>
              </div>

              {/* Target Audience */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">Who This Service Is For</h2>
                <p className="text-[var(--color-charcoal)] leading-relaxed">
                  {subService.targetAudience}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Other services in this line */}
                <div className="bg-[var(--color-gray-light)] rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-4">
                    Other {service.title} Services
                  </h3>
                  <ul className="space-y-2">
                    {service.subServices
                      .filter((s) => s.slug !== subService.slug)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${service.slug}/${s.slug}`}
                            className="text-sm text-[var(--color-slate)] hover:text-[var(--color-teal)] transition-colors"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-[var(--color-navy)] rounded-lg p-6 text-white">
                  <h3 className="font-semibold mb-3">Discuss {subService.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Contact us to discuss how this service can support your business requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center py-3 bg-white text-[var(--color-navy)] font-medium rounded hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-[var(--color-gray-light)]">
          <div className="container">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-8">
              Related Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.slice(0, 3).map((item) => {
                if (!item) return null;
                return (
                  <Link
                    key={item.subService.slug}
                    href={`/services/${item.service.slug}/${item.subService.slug}`}
                    className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
                  >
                    <p className="text-xs text-[var(--color-teal)] mb-1">{item.service.title}</p>
                    <h3 className="font-semibold text-[var(--color-navy)] mb-2">{item.subService.title}</h3>
                    <p className="text-sm text-[var(--color-slate)]">{item.subService.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Discuss ${subService.title} Requirements`}
        description="Contact our team to learn how we can support your business with this service."
      />
    </>
  );
}
