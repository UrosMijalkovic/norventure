export interface Jurisdiction {
  slug: string;
  name: string;
  code: string;
  overview: string;
  taxSystem: {
    citRate: string;
    vatRate: string;
    keyFeatures: string[];
    treatyNetwork: string;
  };
  employment: {
    overview: string;
    socialContributions: string;
    keyRequirements: string[];
  };
  companyFormation: {
    entityTypes: string[];
    timeline: string;
    capitalRequirements: string;
  };
  regulatoryEnvironment: {
    keyRegulators: string[];
    complianceNotes: string[];
  };
  ourPresence: string;
}

export const jurisdictions: Jurisdiction[] = [
  {
    slug: 'serbia',
    name: 'Serbia',
    code: 'RS',
    overview: 'Serbia offers a strategic location at the crossroads of Central and Southeast Europe, with EU candidate status and a growing economy. The country provides a competitive business environment with qualified workforce, developing infrastructure, and improving regulatory framework.',
    taxSystem: {
      citRate: '15%',
      vatRate: '20% (10% reduced)',
      keyFeatures: [
        'Flat 15% corporate income tax rate',
        'Participation exemption available for qualifying dividends',
        'R&D incentives and IP box regime',
        'Tax holidays available in certain free zones',
        'Loss carry-forward for 5 years'
      ],
      treatyNetwork: 'Serbia has an extensive double tax treaty network covering over 60 countries, including major European economies, the United States, and key Asian markets.'
    },
    employment: {
      overview: 'Serbian labor law provides a balanced framework for employment relationships. The market offers competitive labor costs with a well-educated workforce, particularly in technical and financial fields.',
      socialContributions: 'Total employer cost approximately 64-65% above net salary, including pension (11% employer, 14% employee), health (5.15% employer), and unemployment contributions.',
      keyRequirements: [
        'Written employment contracts mandatory',
        'Minimum wage reviewed annually',
        'Standard working week of 40 hours',
        'Minimum 20 days annual leave',
        'Termination requires valid legal grounds'
      ]
    },
    companyFormation: {
      entityTypes: ['DOO (Limited Liability Company)', 'AD (Joint Stock Company)', 'Branch Office', 'Representative Office'],
      timeline: '1-3 business days for standard DOO registration',
      capitalRequirements: 'Minimum capital of RSD 100 (approximately €1) for DOO, with no minimum for practical purposes for most businesses.'
    },
    regulatoryEnvironment: {
      keyRegulators: [
        'APR (Serbian Business Registers Agency)',
        'National Bank of Serbia',
        'Tax Administration',
        'Securities Commission (for public companies)'
      ],
      complianceNotes: [
        'Annual financial statements filed with APR',
        'Monthly tax reporting requirements',
        'Statistical reporting obligations',
        'Anti-money laundering compliance for certain sectors'
      ]
    },
    ourPresence: 'Our Belgrade office serves as our regional headquarters, with a full team of accounting, tax, and corporate services professionals. We provide comprehensive services to both local entities and international groups operating in Serbia.'
  },
  {
    slug: 'montenegro',
    name: 'Montenegro',
    code: 'ME',
    overview: 'Montenegro offers a business-friendly environment with a developing economy focused on tourism, energy, and services. As an EU candidate country using the Euro, it provides currency stability and increasing alignment with European standards.',
    taxSystem: {
      citRate: '9% (15% for profits over €750k)',
      vatRate: '21% (7% reduced)',
      keyFeatures: [
        'Progressive CIT: 9% up to €750k, 15% above',
        'One of the lowest corporate tax rates in Europe',
        'No withholding tax on dividends to non-residents under certain treaties',
        'Loss carry-forward for 5 years',
        'Various incentives for priority sectors'
      ],
      treatyNetwork: 'Montenegro has double tax treaties with over 40 countries, with ongoing expansion of the network.'
    },
    employment: {
      overview: 'Montenegro has a flexible labor market with competitive costs. The workforce is generally well-educated, with particular strengths in hospitality and services sectors.',
      socialContributions: 'Total employer social contributions approximately 34% of gross salary, covering pension, health, and unemployment insurance.',
      keyRequirements: [
        'Written employment contracts required',
        'Standard 40-hour working week',
        'Minimum 20 days annual leave',
        'Probation period up to 6 months',
        'Severance pay based on length of service'
      ]
    },
    companyFormation: {
      entityTypes: ['DOO (Limited Liability Company)', 'AD (Joint Stock Company)', 'Branch Office', 'Representative Office'],
      timeline: '3-5 business days for standard company registration',
      capitalRequirements: 'Minimum capital of €1 for DOO, no practical minimum for most businesses.'
    },
    regulatoryEnvironment: {
      keyRegulators: [
        'CRPS (Central Registry of Business Entities)',
        'Central Bank of Montenegro',
        'Tax Administration',
        'Capital Market Authority'
      ],
      complianceNotes: [
        'Annual financial statements submission',
        'Monthly tax and contribution reporting',
        'Tourism sector specific regulations',
        'Real estate registration requirements'
      ]
    },
    ourPresence: 'We provide services in Montenegro through our regional network, supporting clients with accounting, tax, and corporate services. Our Serbian team coordinates Montenegro engagements with local regulatory expertise.'
  },
  {
    slug: 'bosnia-herzegovina',
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    overview: 'Bosnia and Herzegovina presents unique opportunities with its complex but navigable regulatory structure across two entities (Federation of BiH and Republika Srpska) and Brčko District. The country offers competitive costs and a skilled workforce.',
    taxSystem: {
      citRate: '10%',
      vatRate: '17%',
      keyFeatures: [
        'Flat 10% corporate tax rate (among lowest in Europe)',
        'Unified VAT system across all entities',
        'Tax incentives for investments in certain areas',
        'Loss carry-forward for 5 years',
        'Different regulations in FBiH and RS require careful compliance'
      ],
      treatyNetwork: 'Bosnia and Herzegovina has double tax treaties with approximately 40 countries.'
    },
    employment: {
      overview: 'BiH offers competitive labor costs with a workforce educated in technical fields. Employment regulations differ between the Federation and Republika Srpska, requiring entity-specific compliance.',
      socialContributions: 'Total employment costs vary by entity, approximately 41% in FBiH and 33% in RS above gross salary.',
      keyRequirements: [
        'Employment contracts mandatory in writing',
        'Working week of 40 hours standard',
        'Minimum 20 days annual leave',
        'Entity-specific labor law compliance',
        'Collective agreements may apply by sector'
      ]
    },
    companyFormation: {
      entityTypes: ['DOO (Limited Liability Company)', 'DD (Joint Stock Company)', 'Branch Office', 'Representative Office'],
      timeline: '5-10 business days depending on entity location',
      capitalRequirements: 'Minimum capital of KM 2,000 (approximately €1,000) for DOO in FBiH, KM 1 in RS.'
    },
    regulatoryEnvironment: {
      keyRegulators: [
        'Entity-level courts for company registration',
        'Entity tax authorities (FBiH Tax Administration, RS Tax Administration)',
        'Indirect Taxation Authority (VAT)',
        'Banking agencies at entity level'
      ],
      complianceNotes: [
        'Registration in appropriate entity required',
        'VAT compliance unified but CIT entity-specific',
        'Different accounting regulations by entity',
        'Annual financial statement filing requirements'
      ]
    },
    ourPresence: 'We support clients operating in Bosnia and Herzegovina through our regional network, providing accounting, tax, and corporate services with understanding of both entity frameworks.'
  },
  {
    slug: 'north-macedonia',
    name: 'North Macedonia',
    code: 'MK',
    overview: 'North Macedonia offers a pro-business environment with significant government incentives for foreign investment. As an EU candidate country, it continues to align regulations with European standards while maintaining competitive operating costs.',
    taxSystem: {
      citRate: '10%',
      vatRate: '18% (5% reduced)',
      keyFeatures: [
        'Flat 10% corporate income tax',
        'Favorable holding company regime',
        'TIDZ zones offer significant tax incentives',
        'No withholding on dividends to non-residents under treaties',
        'Loss carry-forward for 3 years'
      ],
      treatyNetwork: 'North Macedonia has double tax treaties with over 45 countries.'
    },
    employment: {
      overview: 'North Macedonia provides competitive labor costs with a young, educated workforce. The government offers various subsidies for employment creation.',
      socialContributions: 'Total social contributions approximately 27% of gross salary (employer share), among the lowest in the region.',
      keyRequirements: [
        'Written employment contracts mandatory',
        'Standard 40-hour working week',
        'Minimum 20 days annual leave',
        'Probation period up to 4 months',
        'Health and safety compliance required'
      ]
    },
    companyFormation: {
      entityTypes: ['DOOEL (Single-Member LLC)', 'DOO (LLC)', 'AD (Joint Stock Company)', 'Branch Office'],
      timeline: '1-3 business days through one-stop-shop system',
      capitalRequirements: 'Minimum capital of €5,000 for DOO, €25,000 for AD.'
    },
    regulatoryEnvironment: {
      keyRegulators: [
        'Central Registry',
        'Public Revenue Office',
        'National Bank',
        'Securities and Exchange Commission'
      ],
      complianceNotes: [
        'Electronic registration and filing systems',
        'Annual financial statement submission',
        'Monthly tax reporting',
        'Transfer pricing documentation requirements'
      ]
    },
    ourPresence: 'We provide services in North Macedonia through our regional network, supporting clients with compliance and advisory services tailored to the local regulatory environment.'
  },
  {
    slug: 'slovenia',
    name: 'Slovenia',
    code: 'SI',
    overview: 'Slovenia, as an EU and Eurozone member, offers the highest level of regulatory alignment with European standards in the region. It provides excellent infrastructure, a highly skilled workforce, and a stable business environment.',
    taxSystem: {
      citRate: '19%',
      vatRate: '22% (9.5% reduced)',
      keyFeatures: [
        'Standard EU-aligned corporate tax system',
        'Participation exemption for qualifying shareholdings',
        'R&D tax incentives available',
        'No withholding on EU parent-subsidiary dividends',
        'Loss carry-forward unlimited'
      ],
      treatyNetwork: 'As an EU member, Slovenia benefits from EU directives plus bilateral treaties with over 55 countries.'
    },
    employment: {
      overview: 'Slovenia has a well-educated workforce with high productivity. Labor costs are higher than other SEE countries but remain competitive within the EU context.',
      socialContributions: 'Total employer contributions approximately 16.1% of gross salary, with additional employee contributions.',
      keyRequirements: [
        'Strong employment protection legislation',
        'Standard 40-hour working week',
        'Minimum 20 days annual leave (4 weeks)',
        'Works councils may be required',
        'Strict termination procedures'
      ]
    },
    companyFormation: {
      entityTypes: ['D.O.O. (Limited Liability Company)', 'D.D. (Joint Stock Company)', 'Branch Office', 'Representative Office'],
      timeline: '5-7 business days for standard registration',
      capitalRequirements: 'Minimum capital of €7,500 for D.O.O., €25,000 for D.D.'
    },
    regulatoryEnvironment: {
      keyRegulators: [
        'AJPES (Agency for Public Legal Records)',
        'Financial Administration (FURS)',
        'Bank of Slovenia',
        'Securities Market Agency'
      ],
      complianceNotes: [
        'Full EU regulatory compliance required',
        'E-invoicing requirements',
        'Transfer pricing documentation mandatory',
        'GDPR compliance essential'
      ]
    },
    ourPresence: 'We support clients in Slovenia through our regional network, providing services aligned with both Slovenian requirements and group-level standards.'
  },
  {
    slug: 'croatia',
    name: 'Croatia',
    code: 'HR',
    overview: 'Croatia, as an EU and Eurozone member (Euro adopted 2023), offers full European integration with access to the single market. The country combines Mediterranean quality of life with developing business infrastructure.',
    taxSystem: {
      citRate: '10% or 18%',
      vatRate: '25% (13%/5% reduced)',
      keyFeatures: [
        '10% CIT for revenue under HRK 7.5 million, 18% above',
        'EU Parent-Subsidiary Directive benefits',
        'R&D tax incentives available',
        'Participation exemption for qualifying holdings',
        'Loss carry-forward for 5 years'
      ],
      treatyNetwork: 'Croatia benefits from EU directives and has bilateral tax treaties with over 60 countries.'
    },
    employment: {
      overview: 'Croatia offers a skilled workforce, particularly in technical and tourism sectors. Labor regulations are aligned with EU standards.',
      socialContributions: 'Employer contributions approximately 16.5% of gross salary for health and pension contributions.',
      keyRequirements: [
        'Written employment contracts required',
        'Standard 40-hour working week',
        'Minimum 20 days annual leave',
        'EU-aligned worker protection',
        'Works council requirements for larger employers'
      ]
    },
    companyFormation: {
      entityTypes: ['D.O.O. (Limited Liability Company)', 'D.D. (Joint Stock Company)', 'J.D.O.O. (Simple LLC)', 'Branch Office'],
      timeline: '3-7 business days through HITRO.HR one-stop-shop',
      capitalRequirements: 'Minimum capital of €2,500 for D.O.O. (reduced from previous HRK 20,000 with Euro adoption), €25,000 for D.D.'
    },
    regulatoryEnvironment: {
      keyRegulators: [
        'Court Registry (Sudski registar)',
        'Tax Administration',
        'Croatian National Bank',
        'HANFA (Financial Services Supervisory Agency)'
      ],
      complianceNotes: [
        'Full EU regulatory compliance',
        'E-invoicing system implementation',
        'Transfer pricing documentation required',
        'GDPR and EU directive compliance'
      ]
    },
    ourPresence: 'We provide services in Croatia through our regional network, supporting clients with EU-compliant accounting, tax, and corporate services.'
  }
];

export function getJurisdictionBySlug(slug: string): Jurisdiction | undefined {
  return jurisdictions.find(j => j.slug === slug);
}
