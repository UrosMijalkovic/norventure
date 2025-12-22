export interface SubService {
  slug: string;
  title: string;
  description: string;
  overview: string;
  scope: string[];
  approach: string;
  targetAudience: string;
  relatedServices: string[];
}

export interface ServiceLine {
  slug: string;
  title: string;
  description: string;
  icon: string;
  subServices: SubService[];
}

export const services: ServiceLine[] = [
  {
    slug: 'accounting',
    title: 'Accounting',
    description: 'Comprehensive accounting services from transaction processing to group consolidation, delivered to international standards.',
    icon: 'calculator',
    subServices: [
      {
        slug: 'financial-reporting',
        title: 'Financial Reporting',
        description: 'Statutory accounts and financial statements prepared under IFRS or local GAAP.',
        overview: 'We prepare statutory financial statements and management accounts in accordance with IFRS, local GAAP, or group reporting requirements. Our team ensures accurate, timely reporting that meets both regulatory obligations and internal management needs.',
        scope: [
          'Statutory financial statement preparation',
          'IFRS and local GAAP compliance',
          'Group reporting package preparation',
          'Audit support and liaison',
          'Regulatory filing submissions'
        ],
        approach: 'We apply a structured close process with defined timelines, reconciliation procedures, and multi-level review to ensure accuracy and compliance.',
        targetAudience: 'Subsidiaries of multinational groups, companies requiring statutory accounts, entities transitioning to IFRS.',
        relatedServices: ['management-accounting', 'group-consolidation', 'corporate-tax']
      },
      {
        slug: 'management-accounting',
        title: 'Management Accounting',
        description: 'Internal reporting, budgeting, and KPI tracking to support operational decision-making.',
        overview: 'We provide management accounting services that deliver actionable financial insights. From budget preparation to variance analysis and KPI reporting, we support informed decision-making at every level.',
        scope: [
          'Budget preparation and forecasting',
          'Monthly management reporting',
          'Variance analysis and commentary',
          'KPI development and tracking',
          'Cost center and profit center reporting'
        ],
        approach: 'We design reporting frameworks aligned with your business structure and decision-making requirements, with standardized monthly deliverables and ad-hoc analysis capability.',
        targetAudience: 'Mid-market companies, subsidiaries requiring head office reporting, businesses seeking enhanced financial visibility.',
        relatedServices: ['financial-reporting', 'group-consolidation', 'process-optimization']
      },
      {
        slug: 'group-consolidation',
        title: 'Group Consolidation',
        description: 'Multi-entity consolidation, elimination entries, and consolidated reporting packages.',
        overview: 'We prepare consolidated financial statements for groups with multiple entities across jurisdictions. Our service covers intercompany eliminations, currency translation, and preparation of consolidation packages to group specifications.',
        scope: [
          'Consolidation package preparation',
          'Intercompany reconciliation and elimination',
          'Currency translation adjustments',
          'Consolidated financial statement preparation',
          'Sub-consolidation for regional groups'
        ],
        approach: 'We implement systematic consolidation procedures using established elimination matrices and reconciliation controls, ensuring consistency across all group entities.',
        targetAudience: 'Holding companies, regional headquarters, groups with multiple SEE subsidiaries.',
        relatedServices: ['financial-reporting', 'intercompany-transactions', 'multi-jurisdiction-accounting']
      },
      {
        slug: 'bookkeeping',
        title: 'Bookkeeping',
        description: 'Transaction processing, accounts payable and receivable management, and general ledger maintenance.',
        overview: 'We handle day-to-day transaction processing, maintaining accurate books and records in accordance with local requirements and group policies. Our bookkeeping services form the foundation for reliable financial reporting.',
        scope: [
          'Transaction recording and classification',
          'Accounts payable processing',
          'Accounts receivable management',
          'Bank reconciliations',
          'General ledger maintenance'
        ],
        approach: 'We apply consistent recording policies, regular reconciliation cycles, and documented procedures to maintain accurate, audit-ready books.',
        targetAudience: 'Subsidiaries requiring local bookkeeping, companies outsourcing finance functions, new market entrants.',
        relatedServices: ['financial-reporting', 'vat-indirect-tax', 'payroll-processing']
      },
      {
        slug: 'accounting-system-implementation',
        title: 'Accounting System Implementation',
        description: 'ERP setup, chart of accounts design, system migration, and integration support.',
        overview: 'We support the implementation and configuration of accounting systems, from chart of accounts design to data migration and user training. Our experience spans major ERP platforms and local accounting software.',
        scope: [
          'Chart of accounts design and setup',
          'System configuration and customization',
          'Data migration from legacy systems',
          'Integration with group systems',
          'User training and documentation'
        ],
        approach: 'We follow a structured implementation methodology covering requirements gathering, configuration, testing, migration, and post-go-live support.',
        targetAudience: 'Companies implementing new systems, groups standardizing across subsidiaries, businesses outgrowing existing solutions.',
        relatedServices: ['financial-reporting', 'management-accounting', 'process-optimization']
      }
    ]
  },
  {
    slug: 'tax',
    title: 'Tax',
    description: 'Corporate tax, VAT, transfer pricing, and international tax services across Southeast European jurisdictions.',
    icon: 'landmark',
    subServices: [
      {
        slug: 'corporate-tax',
        title: 'Corporate Tax',
        description: 'Corporate income tax compliance, planning, and return preparation.',
        overview: 'We provide comprehensive corporate tax services including tax return preparation, provisional tax calculations, and ongoing compliance management. Our team stays current with legislative changes to ensure accurate, optimized tax positions.',
        scope: [
          'Corporate income tax return preparation',
          'Provisional tax calculations',
          'Tax accounting and deferred tax',
          'Tax incentive identification and application',
          'Tax authority correspondence'
        ],
        approach: 'We maintain a compliance calendar for each client, conduct regular tax position reviews, and apply a documented review process for all filings.',
        targetAudience: 'All corporate entities operating in SEE jurisdictions.',
        relatedServices: ['tax-compliance', 'tax-advisory', 'international-tax']
      },
      {
        slug: 'transfer-pricing',
        title: 'Transfer Pricing',
        description: 'Documentation, benchmarking studies, and policy development for intercompany transactions.',
        overview: 'We prepare transfer pricing documentation compliant with local regulations and OECD guidelines. Our services include benchmarking studies, policy development, and support during tax authority reviews.',
        scope: [
          'Local file preparation',
          'Master file contribution',
          'Benchmarking studies',
          'Transfer pricing policy development',
          'Defense file preparation',
          'Tax authority inquiry support'
        ],
        approach: 'We apply OECD-aligned methodology with functional analysis, comparable selection from established databases, and clear documentation of pricing rationale.',
        targetAudience: 'Groups with intercompany transactions, entities approaching documentation thresholds, companies under tax authority scrutiny.',
        relatedServices: ['international-tax', 'intercompany-transactions', 'corporate-tax']
      },
      {
        slug: 'vat-indirect-tax',
        title: 'VAT & Indirect Tax',
        description: 'VAT registration, returns, recovery optimization, and compliance management.',
        overview: 'We manage VAT compliance including registration, periodic returns, and recovery optimization. Our team navigates the complexities of SEE VAT systems to ensure compliance while maximizing legitimate recovery.',
        scope: [
          'VAT registration and deregistration',
          'Periodic VAT return preparation',
          'Input VAT recovery optimization',
          'Cross-border transaction analysis',
          'VAT audit support'
        ],
        approach: 'We implement systematic VAT compliance procedures with invoice verification, recovery tracking, and regular position monitoring.',
        targetAudience: 'All VAT-registered entities, companies with cross-border transactions, businesses seeking recovery optimization.',
        relatedServices: ['corporate-tax', 'tax-compliance', 'bookkeeping']
      },
      {
        slug: 'international-tax',
        title: 'International Tax',
        description: 'Cross-border tax planning, treaty application, and permanent establishment risk management.',
        overview: 'We advise on international tax matters including treaty application, withholding tax optimization, and permanent establishment risk assessment. Our regional perspective enables coordinated tax planning across SEE jurisdictions.',
        scope: [
          'Double tax treaty application',
          'Withholding tax optimization',
          'Permanent establishment risk assessment',
          'Holding structure analysis',
          'Cross-border transaction structuring'
        ],
        approach: 'We analyze structures from a multi-jurisdictional perspective, coordinating with local advisors to identify optimization opportunities while managing compliance risk.',
        targetAudience: 'Multinational groups, companies with cross-border operations, businesses establishing regional structures.',
        relatedServices: ['transfer-pricing', 'corporate-tax', 'cross-border-structuring']
      },
      {
        slug: 'tax-compliance',
        title: 'Tax Compliance',
        description: 'Filing management, deadline tracking, and penalty avoidance across all tax types.',
        overview: 'We manage comprehensive tax compliance including all filing obligations, deadline monitoring, and correspondence with tax authorities. Our systematic approach prevents missed deadlines and associated penalties.',
        scope: [
          'Tax compliance calendar management',
          'Filing preparation and submission',
          'Payment scheduling and tracking',
          'Tax authority correspondence',
          'Penalty and interest management'
        ],
        approach: 'We maintain detailed compliance calendars, implement reminder systems, and conduct regular status reviews to ensure all obligations are met on time.',
        targetAudience: 'All entities with tax filing obligations, companies seeking to outsource compliance management.',
        relatedServices: ['corporate-tax', 'vat-indirect-tax', 'payroll-processing']
      },
      {
        slug: 'tax-advisory',
        title: 'Tax Advisory',
        description: 'Strategic tax planning, transaction structuring, and tax opinion services.',
        overview: 'We provide strategic tax advice on business decisions, transactions, and structures. Our advisory services help clients understand tax implications and optimize their position within legal boundaries.',
        scope: [
          'Transaction tax analysis',
          'Restructuring tax advice',
          'Tax opinion preparation',
          'Incentive and relief identification',
          'Tax risk assessment'
        ],
        approach: 'We analyze each situation comprehensively, considering all relevant taxes and jurisdictions, and provide clear, actionable recommendations with supporting rationale.',
        targetAudience: 'Companies undertaking transactions, businesses considering restructuring, entities seeking tax optimization.',
        relatedServices: ['corporate-tax', 'international-tax', 'transaction-support']
      }
    ]
  },
  {
    slug: 'payroll',
    title: 'Payroll',
    description: 'Payroll processing, employment tax compliance, and personnel administration services.',
    icon: 'users',
    subServices: [
      {
        slug: 'payroll-processing',
        title: 'Payroll Processing',
        description: 'Monthly payroll calculation, payslip generation, and bank file preparation.',
        overview: 'We process monthly payroll including gross-to-net calculations, statutory deductions, and payment file preparation. Our service ensures employees are paid accurately and on time while maintaining full compliance.',
        scope: [
          'Monthly payroll calculation',
          'Payslip generation and distribution',
          'Bank payment file preparation',
          'Payroll reconciliation',
          'Year-end processing'
        ],
        approach: 'We follow a structured monthly cycle with data collection deadlines, calculation verification, and approval workflows before payment release.',
        targetAudience: 'Companies of all sizes requiring payroll outsourcing, subsidiaries establishing local operations.',
        relatedServices: ['employment-tax', 'personnel-administration', 'social-contributions']
      },
      {
        slug: 'employment-tax',
        title: 'Employment Tax',
        description: 'Withholding tax calculation, reporting, and compliance for employment income.',
        overview: 'We manage employment tax obligations including income tax withholding calculations, mandatory reporting, and compliance with evolving regulations. Our team ensures correct treatment across all employee categories.',
        scope: [
          'Income tax withholding calculations',
          'Employment tax returns',
          'Annual employee tax certificates',
          'Tax authority reporting',
          'Compliance monitoring'
        ],
        approach: 'We maintain current knowledge of employment tax regulations and apply systematic calculation and reporting procedures.',
        targetAudience: 'All employers, companies with complex remuneration structures.',
        relatedServices: ['payroll-processing', 'social-contributions', 'expatriate-services']
      },
      {
        slug: 'personnel-administration',
        title: 'Personnel Administration',
        description: 'Employment contracts, HR documentation, and statutory record maintenance.',
        overview: 'We provide personnel administration services including employment contract preparation, mandatory documentation, and statutory record maintenance. Our service ensures compliance with labor law requirements.',
        scope: [
          'Employment contract preparation',
          'Mandatory HR documentation',
          'Employee file maintenance',
          'Labor law compliance monitoring',
          'Termination documentation'
        ],
        approach: 'We maintain standardized templates and checklists aligned with current labor law requirements, with regular compliance reviews.',
        targetAudience: 'Companies without dedicated HR function, subsidiaries requiring local compliance support.',
        relatedServices: ['payroll-processing', 'employment-tax', 'regulatory-compliance']
      },
      {
        slug: 'expatriate-services',
        title: 'Expatriate Services',
        description: 'Cross-border employment support including tax equalization, social security, and work permits.',
        overview: 'We support companies with internationally mobile employees, managing the tax, social security, and administrative complexities of cross-border assignments. Our service covers inbound and outbound assignments.',
        scope: [
          'Assignment tax planning',
          'Tax equalization calculations',
          'Social security certificate applications',
          'Work permit coordination',
          'Shadow payroll management'
        ],
        approach: 'We coordinate across jurisdictions to manage assignment costs, ensure compliance, and support smooth employee mobility.',
        targetAudience: 'Companies with international assignees, multinationals deploying staff to SEE region.',
        relatedServices: ['employment-tax', 'international-tax', 'payroll-processing']
      },
      {
        slug: 'social-contributions',
        title: 'Social Contributions',
        description: 'Pension, health, and unemployment contribution calculation, reporting, and payment.',
        overview: 'We calculate and report mandatory social contributions including pension, health insurance, and unemployment contributions. Our service ensures correct calculations and timely payments to relevant funds.',
        scope: [
          'Contribution calculations',
          'Fund reporting and filing',
          'Payment preparation',
          'Contribution reconciliation',
          'Audit support'
        ],
        approach: 'We apply current contribution rates and thresholds, with systematic reconciliation between payroll and contribution filings.',
        targetAudience: 'All employers with local employees.',
        relatedServices: ['payroll-processing', 'employment-tax', 'tax-compliance']
      }
    ]
  },
  {
    slug: 'corporate-services',
    title: 'Corporate Services',
    description: 'Company formation, corporate secretarial, and regulatory compliance services for market entry and ongoing operations.',
    icon: 'building',
    subServices: [
      {
        slug: 'company-formation',
        title: 'Company Formation',
        description: 'Entity registration, licensing, and establishment support for new market entrants.',
        overview: 'We manage the company formation process from entity selection through registration and post-formation setup. Our experience with local procedures enables efficient establishment with appropriate structure.',
        scope: [
          'Entity type selection advice',
          'Registration document preparation',
          'Business registry filings',
          'Tax registration',
          'Bank account opening support'
        ],
        approach: 'We follow a structured formation checklist covering all regulatory requirements, with clear timelines and milestone tracking.',
        targetAudience: 'Foreign companies entering SEE markets, entrepreneurs establishing new entities.',
        relatedServices: ['corporate-secretarial', 'registered-office', 'regulatory-compliance']
      },
      {
        slug: 'corporate-secretarial',
        title: 'Corporate Secretarial',
        description: 'Statutory records, board minutes, and corporate governance documentation.',
        overview: 'We maintain corporate records and support governance requirements including board minutes, shareholder registers, and statutory filings. Our service ensures entities remain compliant with corporate law obligations.',
        scope: [
          'Board and shareholder minute preparation',
          'Statutory register maintenance',
          'Annual filing preparation',
          'Corporate change documentation',
          'Governance calendar management'
        ],
        approach: 'We maintain organized corporate records with systematic tracking of filing deadlines and governance requirements.',
        targetAudience: 'All corporate entities, subsidiaries requiring local corporate support.',
        relatedServices: ['company-formation', 'regulatory-compliance', 'registered-office']
      },
      {
        slug: 'registered-office',
        title: 'Registered Office',
        description: 'Official address, mail handling, and physical presence services.',
        overview: 'We provide registered office services including official address, mail handling, and representation for entities requiring local presence. Our service supports companies without physical operations in the jurisdiction.',
        scope: [
          'Registered office address',
          'Mail receipt and forwarding',
          'Official correspondence handling',
          'Regulatory notification address',
          'Document storage'
        ],
        approach: 'We maintain professional premises with systematic mail handling and prompt forwarding of time-sensitive correspondence.',
        targetAudience: 'Foreign companies requiring local presence, holding entities, representative offices.',
        relatedServices: ['company-formation', 'directorship-services', 'corporate-secretarial']
      },
      {
        slug: 'directorship-services',
        title: 'Directorship Services',
        description: 'Local director provision for entities requiring resident representation.',
        overview: 'We provide qualified local directors for entities requiring resident representation. Our directors fulfill statutory requirements while maintaining appropriate governance standards.',
        scope: [
          'Local director provision',
          'Board meeting attendance',
          'Signing authority (as agreed)',
          'Regulatory representation',
          'Ongoing compliance oversight'
        ],
        approach: 'We engage experienced professionals who understand their fiduciary duties and maintain appropriate involvement in entity governance.',
        targetAudience: 'Foreign-owned entities requiring local directors, companies establishing subsidiary governance.',
        relatedServices: ['registered-office', 'corporate-secretarial', 'company-formation']
      },
      {
        slug: 'regulatory-compliance',
        title: 'Regulatory Compliance',
        description: 'License management, permit renewals, and regulatory reporting.',
        overview: 'We manage regulatory compliance including license applications, permit renewals, and mandatory reporting. Our service covers industry-specific regulations and general business compliance requirements.',
        scope: [
          'License application support',
          'Permit renewal management',
          'Regulatory filing preparation',
          'Compliance calendar management',
          'Regulatory change monitoring'
        ],
        approach: 'We maintain comprehensive compliance calendars and monitoring systems to ensure all regulatory obligations are identified and met.',
        targetAudience: 'Regulated entities, companies with multiple permit requirements, businesses entering regulated sectors.',
        relatedServices: ['corporate-secretarial', 'company-formation', 'tax-compliance']
      }
    ]
  },
  {
    slug: 'international-groups',
    title: 'International Group Services',
    description: 'Coordinated accounting, tax, and payroll services for multinational groups operating across Southeast Europe.',
    icon: 'globe',
    subServices: [
      {
        slug: 'multi-jurisdiction-accounting',
        title: 'Multi-Jurisdiction Accounting',
        description: 'Standardized accounting services across multiple SEE entities with consistent reporting.',
        overview: 'We provide coordinated accounting services across multiple jurisdictions, delivering consistent reporting and standardized processes. A single engagement team manages all entities, ensuring alignment and efficiency.',
        scope: [
          'Standardized chart of accounts implementation',
          'Consistent closing procedures',
          'Unified reporting formats',
          'Cross-entity reconciliation',
          'Single point of contact coordination'
        ],
        approach: 'We implement group-wide standards while accommodating local requirements, with centralized oversight and quality control.',
        targetAudience: 'Multinational groups with multiple SEE subsidiaries, regional headquarters.',
        relatedServices: ['group-consolidation', 'regional-consolidation', 'financial-reporting']
      },
      {
        slug: 'cross-border-structuring',
        title: 'Cross-Border Structuring',
        description: 'Legal and tax-efficient structure design for regional operations.',
        overview: 'We advise on optimal structures for regional operations, considering legal, tax, and operational factors. Our regional perspective enables identification of efficient structures that meet business objectives.',
        scope: [
          'Structure analysis and design',
          'Holding location assessment',
          'Financing structure optimization',
          'Operational model alignment',
          'Implementation support'
        ],
        approach: 'We analyze business requirements and model various structural options, providing clear comparison of implications across all relevant dimensions.',
        targetAudience: 'Companies establishing regional presence, groups restructuring existing operations.',
        relatedServices: ['international-tax', 'company-formation', 'transfer-pricing']
      },
      {
        slug: 'regional-consolidation',
        title: 'Regional Consolidation',
        description: 'Sub-consolidation and reporting package preparation for SEE regional groups.',
        overview: 'We prepare regional consolidations for groups with SEE sub-holding structures, delivering consolidated results at the regional level for group reporting purposes.',
        scope: [
          'Regional sub-consolidation',
          'Intercompany elimination at regional level',
          'Regional reporting package preparation',
          'Currency translation management',
          'Regional analysis and commentary'
        ],
        approach: 'We coordinate across all regional entities to gather data, perform eliminations, and deliver consistent regional results on group timelines.',
        targetAudience: 'Groups with SEE regional structure, regional headquarters responsible for sub-consolidation.',
        relatedServices: ['group-consolidation', 'multi-jurisdiction-accounting', 'financial-reporting']
      },
      {
        slug: 'intercompany-transactions',
        title: 'Intercompany Transactions',
        description: 'Transfer pricing compliance, intercompany reconciliation, and transaction documentation.',
        overview: 'We manage intercompany transaction compliance including pricing documentation, reconciliation, and settlement coordination. Our service ensures intercompany positions are properly documented and controlled.',
        scope: [
          'Intercompany pricing implementation',
          'Transaction documentation',
          'Regular reconciliation',
          'Settlement coordination',
          'Audit trail maintenance'
        ],
        approach: 'We implement systematic procedures for intercompany transaction recording, reconciliation, and documentation to support transfer pricing compliance.',
        targetAudience: 'Groups with intercompany trading, entities with management charges or financing arrangements.',
        relatedServices: ['transfer-pricing', 'group-consolidation', 'multi-jurisdiction-accounting']
      },
      {
        slug: 'subsidiary-management',
        title: 'Subsidiary Management',
        description: 'Full back-office support for foreign subsidiaries operating in SEE.',
        overview: 'We provide comprehensive back-office support for foreign subsidiaries, covering accounting, tax, payroll, and corporate services through a single engagement. This enables headquarters to maintain oversight without local administrative burden.',
        scope: [
          'Full accounting services',
          'Tax compliance management',
          'Payroll administration',
          'Corporate secretarial support',
          'Management reporting to headquarters'
        ],
        approach: 'We act as an extension of headquarters finance function, providing comprehensive local support with regular reporting and communication.',
        targetAudience: 'Headquarters managing SEE subsidiaries, PE portfolio companies in the region.',
        relatedServices: ['multi-jurisdiction-accounting', 'payroll-processing', 'corporate-secretarial']
      }
    ]
  },
  {
    slug: 'advisory',
    title: 'Advisory',
    description: 'Transaction support, due diligence, and strategic advisory services for deals and restructuring.',
    icon: 'briefcase',
    subServices: [
      {
        slug: 'transaction-support',
        title: 'Transaction Support',
        description: 'Buy-side and sell-side support for M&A transactions and carve-outs.',
        overview: 'We support M&A transactions from both buy and sell perspectives, providing financial analysis, deal structuring advice, and transaction execution support throughout the deal lifecycle.',
        scope: [
          'Deal structuring advice',
          'Financial modeling support',
          'Transaction documentation review',
          'Closing accounts preparation',
          'Post-deal integration support'
        ],
        approach: 'We engage at appropriate transaction stages, providing focused support aligned with deal timelines and requirements.',
        targetAudience: 'Companies undertaking acquisitions or divestitures, PE firms executing transactions.',
        relatedServices: ['due-diligence', 'tax-advisory', 'restructuring']
      },
      {
        slug: 'due-diligence',
        title: 'Due Diligence',
        description: 'Financial and tax due diligence for acquirers and investors.',
        overview: 'We conduct financial and tax due diligence to identify risks, validate value drivers, and support informed investment decisions. Our reports provide clear findings with actionable recommendations.',
        scope: [
          'Financial due diligence',
          'Tax due diligence',
          'Working capital analysis',
          'Quality of earnings assessment',
          'Red flag identification'
        ],
        approach: 'We follow structured due diligence procedures with clear scoping, systematic analysis, and findings-focused reporting.',
        targetAudience: 'Acquirers, PE investors, lenders.',
        relatedServices: ['transaction-support', 'tax-advisory', 'financial-reporting']
      },
      {
        slug: 'restructuring',
        title: 'Restructuring',
        description: 'Legal, operational, and tax restructuring for groups and distressed situations.',
        overview: 'We advise on restructuring situations including legal entity rationalization, operational restructuring, and financial restructuring. Our approach considers tax, legal, and practical implementation factors.',
        scope: [
          'Entity rationalization planning',
          'Merger and demerger execution',
          'Operational restructuring support',
          'Tax-efficient restructuring design',
          'Implementation project management'
        ],
        approach: 'We develop comprehensive restructuring plans considering all stakeholder impacts and implementation requirements.',
        targetAudience: 'Groups with complex legacy structures, companies in financial difficulty, businesses undergoing strategic change.',
        relatedServices: ['transaction-support', 'tax-advisory', 'cross-border-structuring']
      },
      {
        slug: 'process-optimization',
        title: 'Process Optimization',
        description: 'Finance function improvement, process documentation, and efficiency enhancement.',
        overview: 'We review and optimize finance function processes, identifying efficiency improvements and implementing enhanced procedures. Our focus is practical improvement with measurable benefits.',
        scope: [
          'Finance process review',
          'Control assessment',
          'Process documentation',
          'Improvement implementation',
          'Technology enablement advice'
        ],
        approach: 'We assess current state, identify improvement opportunities, prioritize by impact and effort, and support implementation.',
        targetAudience: 'Companies seeking finance function improvement, businesses preparing for growth or transaction.',
        relatedServices: ['accounting-system-implementation', 'management-accounting', 'subsidiary-management']
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceLine | undefined {
  return services.find(s => s.slug === slug);
}

export function getSubServiceBySlug(serviceSlug: string, subServiceSlug: string): SubService | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices.find(ss => ss.slug === subServiceSlug);
}

export function getAllSubServices(): { service: ServiceLine; subService: SubService }[] {
  const result: { service: ServiceLine; subService: SubService }[] = [];
  services.forEach(service => {
    service.subServices.forEach(subService => {
      result.push({ service, subService });
    });
  });
  return result;
}
