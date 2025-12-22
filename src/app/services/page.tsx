import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive accounting, tax, payroll, and corporate services for international businesses operating in Southeast Europe.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive accounting, tax, payroll, and corporate services designed for international businesses and multinational groups operating in Southeast Europe."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Lines */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-12 text-center">
            Explore Our Service Lines
          </h2>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-slate)] mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[var(--color-teal)] font-medium hover:underline"
                  >
                    View {service.title} Services →
                  </Link>
                </div>

                <div className={`grid grid-cols-1 gap-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {service.subServices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${service.slug}/${sub.slug}`}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors group"
                    >
                      <span className="font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-navy)]">
                        {sub.title}
                      </span>
                      <span className="text-[var(--color-teal)]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Service Requirements"
        description="Contact us to discuss how we can support your business with our comprehensive range of services."
      />
    </>
  );
}
