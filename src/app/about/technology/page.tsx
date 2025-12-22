import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import { CheckCircle, Monitor, Database, Cloud, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology',
  description: 'ERP systems expertise and technology capabilities at Norventure Services - supporting international businesses with modern accounting infrastructure.',
};

const erpSystems = [
  {
    name: 'SAP',
    description: 'Extensive experience with SAP ERP systems, including SAP S/4HANA and SAP Business One. We support clients using SAP for their local entities and provide integration with group instances.',
    capabilities: ['Local chart of accounts mapping', 'Intercompany transaction processing', 'Statutory reporting configuration', 'User training and support'],
  },
  {
    name: 'Microsoft Dynamics',
    description: 'Full capability across Microsoft Dynamics products including D365 Finance & Operations and Business Central. We implement local compliance requirements and maintain ongoing system support.',
    capabilities: ['Localization setup', 'VAT configuration', 'Reporting customization', 'Integration support'],
  },
  {
    name: 'Oracle',
    description: 'Experience with Oracle ERP Cloud and Oracle NetSuite for clients using these platforms. We handle local requirements within the global system framework.',
    capabilities: ['Local subsidiary setup', 'Tax engine configuration', 'Consolidation support', 'Compliance reporting'],
  },
  {
    name: 'Local Systems',
    description: 'Proficiency with locally prevalent accounting systems used in the region, enabling flexibility in serving clients with varying technology environments.',
    capabilities: ['Multi-system capability', 'Data migration support', 'System selection advisory', 'Implementation assistance'],
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Enterprise-grade security measures protecting client financial data, including encryption, access controls, and regular security assessments.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Secure cloud-based systems enabling remote access, collaboration, and business continuity with regular backups and disaster recovery protocols.',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Structured data management practices ensuring accuracy, completeness, and availability of financial information for reporting and analysis.',
  },
  {
    icon: Monitor,
    title: 'Reporting Tools',
    description: 'Modern reporting and analytics tools providing clients with timely visibility into their financial position and key performance metrics.',
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        title="Technology"
        subtitle="ERP expertise and technology infrastructure supporting modern accounting operations."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Technology' },
        ]}
      />

      {/* ERP Expertise */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-4">
              ERP Systems Expertise
            </h2>
            <p className="text-[var(--color-charcoal)]">
              We work within your technology environment, not alongside it. Our teams maintain current expertise in major ERP platforms, enabling us to operate directly in your systems rather than maintaining parallel processes that require reconciliation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {erpSystems.map((system, index) => (
              <div
                key={index}
                className="bg-[var(--color-gray-light)] rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-3">
                  {system.name}
                </h3>
                <p className="text-[var(--color-charcoal)] mb-4">{system.description}</p>
                <ul className="space-y-2">
                  {system.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-charcoal)]">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Approach */}
      <section className="section bg-[var(--color-gray-light)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
                Integration Approach
              </h2>
              <p className="text-[var(--color-charcoal)] mb-4">
                Our technology approach centers on integration with your existing infrastructure. Rather than requiring you to adapt to our systems, we configure our operations to work seamlessly with your technology environment.
              </p>
              <p className="text-[var(--color-charcoal)] mb-6">
                This means your local entity data flows directly into group consolidation, your reporting formats remain consistent with group standards, and your team maintains visibility through familiar interfaces.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Direct posting to client ERP systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Group chart of accounts alignment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Automated data interfaces where appropriate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-charcoal)]">Custom reporting in required formats</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <feature.icon className="w-8 h-8 text-[var(--color-teal)] mb-3" />
                  <h3 className="font-semibold text-[var(--color-navy)] mb-2">{feature.title}</h3>
                  <p className="text-xs text-[var(--color-slate)]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Standards */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[var(--color-navy)] mb-6">
              Technology Standards
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">Security & Compliance</h3>
                <p className="text-[var(--color-charcoal)]">
                  We maintain security standards appropriate for handling sensitive financial data. Our infrastructure includes encryption for data in transit and at rest, multi-factor authentication, role-based access controls, and regular security assessments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">Business Continuity</h3>
                <p className="text-[var(--color-charcoal)]">
                  Our cloud-based infrastructure ensures business continuity with regular backups, disaster recovery protocols, and redundant systems. We maintain documented procedures for data protection and system recovery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-2">Continuous Development</h3>
                <p className="text-[var(--color-charcoal)]">
                  We invest in ongoing team training to maintain current expertise in evolving ERP platforms and emerging technologies. This ensures our capability remains aligned with client technology environments as they evolve.
                </p>
              </div>
            </div>
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
              href="/about/leadership"
              className="block p-6 bg-white rounded-lg border border-[var(--color-gray-border)] hover:border-[var(--color-teal)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-navy)] mb-2">Leadership</h3>
              <p className="text-sm text-[var(--color-slate)]">Meet our leadership team and their professional backgrounds.</p>
            </Link>
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
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
