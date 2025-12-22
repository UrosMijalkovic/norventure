import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { services, getServiceBySlug } from '@/data/services';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Service Overview */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
                {service.title} Services
              </h2>

              <p className="text-[var(--color-slate)] mb-8 text-lg">
                {service.description}
              </p>

              {/* Sub-services List */}
              <div className="space-y-4">
                {service.subServices.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/services/${service.slug}/${sub.slug}`}
                    className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                          {sub.title}
                        </h3>
                        <p className="text-[var(--color-slate)] text-sm">
                          {sub.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[var(--color-gray-light)] rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-4">
                    Why Choose Our {service.title} Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-charcoal)]">International standards and local expertise</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-charcoal)]">Experienced professional team</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-charcoal)]">Multi-jurisdiction capability</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-charcoal)]">ERP and system integration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[var(--color-navy)] rounded-lg p-6 text-white">
                  <h3 className="font-semibold mb-3">Discuss Your Requirements</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Contact us to discuss how our {service.title.toLowerCase()} services can support your business.
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
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-8">
            Other Service Lines
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
                >
                  <h3 className="font-semibold text-[var(--color-navy)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--color-slate)]">{s.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Discuss Your ${service.title} Requirements`}
        description="Contact our team to learn how we can support your business."
      />
    </>
  );
}
