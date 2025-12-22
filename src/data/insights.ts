export interface Insight {
  slug: string;
  title: string;
  category: 'tax-update' | 'regulatory' | 'business-guide' | 'analysis';
  categoryLabel: string;
  date: string;
  jurisdiction?: string;
  summary: string;
  content: string[];
  keyPoints: string[];
  author: string;
  authorRole: string;
}

export const insights: Insight[] = [
  {
    slug: 'serbia-tax-changes-2025',
    title: 'Serbia Tax Changes for 2025: Key Updates for International Businesses',
    category: 'tax-update',
    categoryLabel: 'Tax Update',
    date: '2024-12-15',
    jurisdiction: 'Serbia',
    summary: 'Overview of significant tax law changes in Serbia effective January 2025, including corporate income tax amendments, VAT updates, and transfer pricing requirements.',
    content: [
      'The Serbian Parliament has adopted several amendments to tax legislation that will take effect from January 1, 2025. These changes affect corporate income tax, value-added tax, and transfer pricing compliance requirements.',
      'Corporate Income Tax: The amendments introduce modifications to the treatment of certain expenses and clarify deductibility rules for related-party transactions. Companies should review their current expense policies to ensure compliance with the new provisions.',
      'VAT Changes: New rules regarding the timing of VAT obligations for certain service types have been introduced. Additionally, the documentation requirements for zero-rated supplies have been enhanced.',
      'Transfer Pricing: The threshold for mandatory transfer pricing documentation has been adjusted, and new benchmarking requirements apply to certain categories of related-party transactions.',
    ],
    keyPoints: [
      'Corporate income tax deductibility rules updated for related-party expenses',
      'VAT timing rules modified for specific service categories',
      'Transfer pricing documentation thresholds revised',
      'New benchmarking requirements for certain transactions',
      'Effective date: January 1, 2025',
    ],
    author: 'Ana Nikolić',
    authorRole: 'Partner, Tax Services',
  },
  {
    slug: 'regional-vat-compliance-guide',
    title: 'VAT Compliance Across Southeast Europe: A Comparative Guide',
    category: 'business-guide',
    categoryLabel: 'Business Guide',
    date: '2024-11-28',
    summary: 'Practical guide comparing VAT compliance requirements across Serbia, Montenegro, Bosnia and Herzegovina, North Macedonia, Slovenia, and Croatia.',
    content: [
      'Operating across multiple Southeast European jurisdictions requires careful attention to varying VAT compliance requirements. This guide provides a comparative overview of key obligations in each country we serve.',
      'While VAT rates vary across the region (ranging from 17% to 25%), the more significant differences lie in registration thresholds, filing frequencies, and documentation requirements.',
      'Companies establishing regional presence should plan their VAT structure early, considering factors such as registration obligations, group VAT treatment where available, and cross-border transaction handling.',
    ],
    keyPoints: [
      'VAT rates range from 17% (Bosnia) to 25% (Croatia)',
      'Registration thresholds vary significantly by jurisdiction',
      'Filing frequencies range from monthly to quarterly',
      'Group VAT treatment available in some jurisdictions',
      'Cross-border supply rules differ between EU and non-EU countries',
    ],
    author: 'Stefan Jovanović',
    authorRole: 'Partner, Accounting Services',
  },
  {
    slug: 'montenegro-corporate-environment',
    title: 'Montenegro Corporate Environment: Opportunities and Considerations',
    category: 'analysis',
    categoryLabel: 'Analysis',
    date: '2024-11-15',
    jurisdiction: 'Montenegro',
    summary: 'Analysis of Montenegro as a jurisdiction for international business operations, covering tax regime, regulatory environment, and practical considerations.',
    content: [
      'Montenegro continues to attract international investment through its competitive tax regime and EU candidate status. This analysis examines the key factors for businesses considering Montenegro operations.',
      'The corporate tax rate of 9% (15% for profits exceeding EUR 1.5 million) positions Montenegro as one of the more tax-efficient jurisdictions in the region. Combined with an extensive treaty network and no withholding tax on dividends to non-residents in many cases, the tax environment is favorable for holding structures.',
      'Practical considerations include the relatively small local market, developing infrastructure in some areas, and the evolving regulatory framework as Montenegro progresses toward EU accession.',
    ],
    keyPoints: [
      'Competitive 9%/15% corporate tax rate structure',
      'No withholding tax on dividends in many scenarios',
      'EU candidate country with ongoing accession process',
      'Suitable for certain holding and regional structures',
      'Developing regulatory framework aligned with EU standards',
    ],
    author: 'Jelena Todorović',
    authorRole: 'Director, Regional Operations',
  },
  {
    slug: 'transfer-pricing-documentation-requirements',
    title: 'Transfer Pricing Documentation: Regional Requirements and Best Practices',
    category: 'regulatory',
    categoryLabel: 'Regulatory',
    date: '2024-10-30',
    summary: 'Comprehensive overview of transfer pricing documentation requirements across Southeast Europe, with practical guidance on compliance approaches.',
    content: [
      'Transfer pricing compliance has become increasingly important across Southeast Europe, with tax authorities in all jurisdictions now actively reviewing related-party transactions. This article outlines current documentation requirements and practical compliance approaches.',
      'Documentation requirements vary by jurisdiction, with different thresholds, filing deadlines, and content specifications. Companies operating across multiple countries should develop a coordinated approach that satisfies local requirements while maintaining consistency in methodology and documentation.',
      'Best practices include maintaining contemporaneous documentation, conducting regular benchmarking updates, and proactively reviewing significant transactions before year-end.',
    ],
    keyPoints: [
      'All SEE jurisdictions now have transfer pricing documentation requirements',
      'Thresholds and deadlines vary significantly by country',
      'Contemporaneous documentation is increasingly required',
      'Regional coordination can reduce compliance burden',
      'Proactive planning is preferable to reactive compliance',
    ],
    author: 'Ana Nikolić',
    authorRole: 'Partner, Tax Services',
  },
  {
    slug: 'employment-law-update-serbia-2024',
    title: 'Serbia Employment Law Update: Changes Affecting International Employers',
    category: 'regulatory',
    categoryLabel: 'Regulatory',
    date: '2024-10-15',
    jurisdiction: 'Serbia',
    summary: 'Summary of recent employment law amendments in Serbia relevant to international employers, including changes to contract requirements and termination procedures.',
    content: [
      'Recent amendments to Serbian labor legislation have introduced several changes that international employers should understand. These modifications affect employment contracts, working arrangements, and termination procedures.',
      'Key changes include updated requirements for fixed-term employment contracts, clarified rules regarding remote work arrangements, and modified procedures for collective redundancies.',
      'Employers should review their current employment documentation and HR practices to ensure alignment with the updated requirements.',
    ],
    keyPoints: [
      'Fixed-term contract limitations clarified',
      'Remote work arrangements now explicitly regulated',
      'Collective redundancy procedures modified',
      'Employment contract template updates may be required',
      'Compliance deadline for existing arrangements: Q1 2025',
    ],
    author: 'Marko Petrović',
    authorRole: 'Managing Partner',
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export function getInsightsByCategory(category: Insight['category']): Insight[] {
  return insights.filter((insight) => insight.category === category);
}

export function getInsightsByJurisdiction(jurisdiction: string): Insight[] {
  return insights.filter((insight) => insight.jurisdiction === jurisdiction);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
