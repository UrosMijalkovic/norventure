export interface Industry {
  slug: string;
  name: string;
  iconName: 'Factory' | 'Monitor' | 'Briefcase' | 'ShoppingBag' | 'Building2' | 'Landmark';
  description: string;
  overview: string;
  challenges: string[];
  keyServices: string[];
  experience: string;
}

export const industries: Industry[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    iconName: 'Factory',
    description: 'Comprehensive financial and operational support for manufacturing operations across Southeast Europe.',
    overview: 'Manufacturing operations in Southeast Europe require careful attention to inventory accounting, transfer pricing for goods movement, customs compliance, and multi-site operational coordination. We understand the financial complexities of production environments, from automotive suppliers to FMCG producers. Our experience spans the full range of manufacturing sub-sectors present in the region.',
    challenges: [
      'Complex inventory valuation and costing methods',
      'Transfer pricing for intercompany goods transactions',
      'Customs and import duty management',
      'Multi-shift payroll complexity',
      'Capital investment and depreciation planning',
      'Environmental compliance and reporting'
    ],
    keyServices: [
      'Financial Reporting',
      'Transfer Pricing',
      'VAT & Indirect Tax',
      'Payroll Processing',
      'Multi-Jurisdiction Accounting',
      'Management Accounting'
    ],
    experience: 'We serve manufacturing clients ranging from automotive component suppliers and industrial equipment manufacturers to FMCG production facilities and food and beverage producers. Our team understands the operational rhythms of manufacturing environments and the financial reporting requirements specific to production businesses.'
  },
  {
    slug: 'technology',
    name: 'Technology',
    iconName: 'Monitor',
    description: 'Financial and tax services tailored to the unique needs of technology companies in the region.',
    overview: 'Technology companies operating in Southeast Europe benefit from competitive talent costs and growing technical ecosystems. We support tech businesses with their unique accounting needs including revenue recognition, R&D incentives, and international structuring. From startups establishing their first regional entity to established tech firms scaling operations, we provide the financial infrastructure that supports growth.',
    challenges: [
      'Revenue recognition for software and SaaS',
      'R&D tax credit optimization',
      'IP structuring and transfer pricing',
      'Stock-based compensation accounting',
      'Rapid scaling and entity setup',
      'Remote workforce compliance'
    ],
    keyServices: [
      'Tax Advisory',
      'Transfer Pricing',
      'Company Formation',
      'Payroll Processing',
      'International Tax',
      'Corporate Secretarial'
    ],
    experience: 'Our technology client portfolio includes software development companies, SaaS providers, IT services firms, gaming studios, and fintech operations. We understand the pace at which tech companies operate and provide responsive service that matches their agility.'
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    iconName: 'Briefcase',
    description: 'Back-office support enabling professional services firms to focus on client delivery.',
    overview: 'Professional services firms including consultancies, law firms, and other service providers require efficient back-office support to focus on client delivery. We provide the financial infrastructure that supports professional practice operations. Our services enable firms to maintain lean internal operations while ensuring compliance and accurate financial management.',
    challenges: [
      'Project-based revenue recognition',
      'Partner compensation structures',
      'Multi-currency billing and collections',
      'Time and billing system integration',
      'Professional liability considerations',
      'International secondment management'
    ],
    keyServices: [
      'Management Accounting',
      'Payroll Processing',
      'Expatriate Services',
      'VAT & Indirect Tax',
      'Corporate Secretarial',
      'Financial Reporting'
    ],
    experience: 'We serve management consulting firms, law firm regional offices, engineering consultancies, architecture practices, and recruitment agencies. Our team understands the billing models and operational structures common in professional services.'
  },
  {
    slug: 'retail-consumer',
    name: 'Retail & Consumer',
    iconName: 'ShoppingBag',
    description: 'Supporting retail and consumer goods companies with high-volume transaction environments.',
    overview: 'Retail and consumer goods companies face unique challenges in inventory management, VAT compliance across channels, and seasonal workforce fluctuations. Our experience spans from e-commerce operations to traditional retail networks. We handle the high transaction volumes and operational complexity that characterize retail operations.',
    challenges: [
      'High-volume transaction processing',
      'Inventory management and valuation',
      'Multi-channel VAT compliance',
      'Seasonal payroll fluctuations',
      'Promotional accounting and accruals',
      'Franchise and distribution structures'
    ],
    keyServices: [
      'Bookkeeping',
      'VAT & Indirect Tax',
      'Payroll Processing',
      'Financial Reporting',
      'Transfer Pricing',
      'Management Accounting'
    ],
    experience: 'Our retail clients include e-commerce retailers, fashion and apparel retail operations, consumer electronics distributors, food and beverage retail chains, and franchise operations. We understand the seasonal nature of retail and the importance of timely financial information.'
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    iconName: 'Building2',
    description: 'Comprehensive support for real estate investors and developers in Southeast Europe.',
    overview: 'Real estate investment and development in Southeast Europe requires understanding of local property laws, tax implications, and financing structures. We support investors and developers with comprehensive financial and tax services. From initial acquisition structuring through ongoing property management accounting, we provide the full range of services real estate operations require.',
    challenges: [
      'Property acquisition structuring',
      'Development cost capitalization',
      'VAT on property transactions',
      'Rental income compliance',
      'Asset holding structure optimization',
      'Cross-border investment structures'
    ],
    keyServices: [
      'Tax Advisory',
      'Corporate Services',
      'Financial Reporting',
      'Cross-Border Structuring',
      'Due Diligence',
      'Company Formation'
    ],
    experience: 'We serve commercial property investors, residential developers, logistics and warehouse operators, hotel and hospitality properties, and real estate funds. Our team understands the long-term nature of real estate investment and the importance of optimal structuring.'
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    iconName: 'Landmark',
    description: 'Specialized services for financial institutions operating under regulatory oversight.',
    overview: 'Financial services firms operate under heightened regulatory scrutiny. We understand the compliance requirements, regulatory reporting obligations, and accounting complexities specific to banks, insurers, and investment firms. Our team includes professionals with direct experience in financial services regulation.',
    challenges: [
      'Regulatory capital calculations',
      'Prudential reporting requirements',
      'IFRS for financial instruments',
      'Anti-money laundering compliance',
      'Central bank reporting',
      'Investment fund accounting'
    ],
    keyServices: [
      'Financial Reporting',
      'Regulatory Compliance',
      'Tax Advisory',
      'Corporate Secretarial',
      'Due Diligence',
      'Internal Audit Support'
    ],
    experience: 'Our financial services clients include payment service providers, leasing companies, insurance operations, investment funds, and microfinance institutions. We understand the regulatory environment and reporting requirements specific to each sub-sector.'
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}
