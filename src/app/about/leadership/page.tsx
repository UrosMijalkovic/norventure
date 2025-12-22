import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { Linkedin, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet the leadership team at Norventure Services - experienced professionals in accounting, tax, and corporate services.',
};

const leaders = [
  {
    name: 'Marko Petrović',
    role: 'Managing Partner',
    bio: 'Marko founded Norventure Services in 2013 after 15 years in professional services, including senior roles at international accounting firms. He leads client relationships and firm strategy, with particular expertise in serving multinational groups entering Southeast European markets.',
    expertise: ['Strategic advisory', 'International structuring', 'M&A transactions'],
    credentials: 'CPA (Serbia), ACCA',
  },
  {
    name: 'Ana Nikolić',
    role: 'Partner, Tax Services',
    bio: 'Ana heads our tax practice, bringing 18 years of experience in corporate tax, transfer pricing, and international tax planning. She previously led the tax department at a Big Four firm in Belgrade and advises multinational clients on complex cross-border tax matters.',
    expertise: ['Corporate tax', 'Transfer pricing', 'International tax'],
    credentials: 'Tax Advisor (Serbia), LLM Taxation',
  },
  {
    name: 'Stefan Jovanović',
    role: 'Partner, Accounting Services',
    bio: 'Stefan leads our accounting services practice, overseeing financial reporting and management accounting for our portfolio of international clients. His background includes controller positions at multinational manufacturing companies before joining professional services.',
    expertise: ['IFRS reporting', 'Group consolidation', 'ERP implementation'],
    credentials: 'CPA (Serbia), CIMA',
  },
  {
    name: 'Jelena Todorović',
    role: 'Director, Regional Operations',
    bio: 'Jelena oversees service delivery across our regional network, ensuring consistent quality and coordination for clients operating in multiple jurisdictions. She manages relationships with our partner firms and leads multi-jurisdiction engagement teams.',
    expertise: ['Regional coordination', 'Service delivery', 'Quality assurance'],
    credentials: 'CPA (Serbia)',
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Leadership"
        subtitle="Our leadership team combines deep regional expertise with international professional services experience."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Leadership' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">
              Experienced Leadership
            </h2>
            <p className="text-[var(--color-charcoal)]">
              Our partners and directors bring decades of combined experience in professional services, with backgrounds at international accounting firms and multinational corporations. This experience informs our understanding of what international clients require from their local service providers.
            </p>
          </div>

          <div className="space-y-12">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-4 gap-8 pb-12 border-b border-[var(--color-gray-border)] last:border-0"
              >
                <div className="lg:col-span-1">
                  <div className="w-32 h-32 bg-[var(--color-gray-light)] rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl text-[var(--color-slate)]">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-navy)]">{leader.name}</h3>
                  <p className="text-[var(--color-teal)] font-medium">{leader.role}</p>
                  <p className="text-sm text-[var(--color-slate)] mt-1">{leader.credentials}</p>
                  <div className="flex space-x-3 mt-3">
                    <a href="#" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[var(--color-slate)] hover:text-[var(--color-teal)]">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[var(--color-charcoal)] mb-4">{leader.bio}</p>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-navy)] mb-2">Areas of Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((area, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[var(--color-gray-light)] text-sm text-[var(--color-charcoal)] rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Navigation */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-8">
            Learn More About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/about/approach"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Our Approach</h3>
              <p className="text-sm text-[var(--color-slate)]">How we deliver services and work with clients.</p>
            </Link>
            <Link
              href="/about/infrastructure"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Infrastructure</h3>
              <p className="text-sm text-[var(--color-slate)]">Our operational capability and team structure.</p>
            </Link>
            <Link
              href="/about/technology"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Technology</h3>
              <p className="text-sm text-[var(--color-slate)]">ERP systems and technology capabilities.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
