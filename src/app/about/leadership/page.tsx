'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const leaders = [
  {
    name: 'Milos Golic',
    role: 'Managing Partner',
    photo: '/team/Milos Golic.jpg',
    bio: 'Milos Golic is a Managing Partner with over 13 years of experience in business and financial advisory and more than 9 years in top-level executive roles within international corporations. He completed his undergraduate studies at the University of California, Santa Barbara, and earned a Master\'s degree in Finance from Bocconi University in Milan, specializing in Investment Banking and Quantitative Finance.',
    fullBio: 'Milos began his career in international consulting, where he worked as a Senior Consultant delivering numerous projects and transactions across a wide range of industries. He later joined a large international manufacturing group, serving as Chief Financial Officer and subsequently as Group CFO at the global level, appointed by the parent company in Northern Europe. From 2019 onward, he served as Group CFO of a renowned multinational group headquartered in Norway.',
    expertise: ['Company valuations', 'Business planning', 'Corporate restructuring', 'Transaction advisory'],
    credentials: 'UC Santa Barbara, Bocconi University, ASA Member, CFA Candidate',
  },
  {
    name: 'Ivan Djurovic',
    role: 'Partner',
    photo: '/team/Ivan Djurovic.jpg',
    bio: 'Ivan Djurovic is a Partner with over 10 years of hands-on experience in financial advisory, valuation, and business planning. He completed his undergraduate studies in Serbia and earned a Master\'s degree in Economics and Social Sciences from Bocconi University in Milan.',
    fullBio: 'During his studies, Ivan worked at the European Commission in Brussels. He later joined an international consulting firm in Belgrade, where he advanced to Senior Consultant in the Valuation and Business Planning department. In 2017, he became a Partner. Ivan has extensive experience leading finance and accounting teams for European, US, and Scandinavian clients, and providing direct support to CEOs and CFOs.',
    expertise: ['Financial modeling', 'Valuations', 'Management reporting', 'Finance automation'],
    credentials: 'Bocconi University, European Commission, ASA Candidate',
  },
];

const team = [
  {
    name: 'Andjela Stojkovic',
    role: 'Senior Associate',
    photo: '/team/Andjela Stojkovic.jpg',
    shortBio: 'Over five years of experience in financial and business advisory.',
    bio: 'Andjela Stojkovic is a Senior Associate with over five years of experience in financial and business advisory, with involvement in corporate finance projects, business consulting, and professional client support. She has worked on numerous valuation and transaction advisory engagements for both domestic and international clients.',
    expertise: ['Corporate finance', 'Business consulting', 'Project management'],
    credentials: 'University of Belgrade',
  },
  {
    name: 'Neda Zloporubovic',
    role: 'Manager - Supply Chain',
    photo: '/team/Neda Zloporubovic.jpg',
    shortBio: 'Nine years of international experience in procurement and supply chain.',
    bio: 'Neda Zloporubovic is a Manager specializing in Supply Chain Advisory with over nine years of international experience in procurement and supply chain leadership across automotive, manufacturing, and energy sectors. She has led strategic sourcing initiatives and cost optimization projects for multinational corporations.',
    expertise: ['Supply chain', 'Procurement', 'Strategic sourcing', 'Cost optimization'],
    credentials: 'Singidunum University, PhD Candidate',
  },
  {
    name: 'Ana Krstonic',
    role: 'Consultant',
    photo: '/team/Ana Krstonic.jpg',
    shortBio: 'Seven years of experience in financial controlling and reporting.',
    bio: 'Ana Krstonic is a Consultant with over seven years of experience in financial advisory, focusing on controlling and reporting projects for domestic and international clients. She specializes in management reporting, budgeting processes, and financial analysis.',
    expertise: ['Financial reporting', 'Budgeting', 'Controlling'],
    credentials: 'University of Belgrade',
  },
  {
    name: 'Milica Stanic',
    role: 'Junior Analyst',
    photo: '/team/Milica Stanic.jpeg',
    shortBio: 'Finance and accounting support with focus on process improvement.',
    bio: 'Milica Stanic is a Junior Analyst with experience in finance and accounting support, financial reporting, and process improvement initiatives. She supports engagement teams with data analysis, documentation, and client deliverables.',
    expertise: ['Finance support', 'Financial reporting', 'Process improvement'],
    credentials: 'University of Belgrade',
  },
  {
    name: 'Tamara Djordjevic',
    role: 'Junior Analyst',
    photo: '/team/Tamara Djordjevic.jpeg',
    shortBio: 'Seven years of professional experience in financial services.',
    bio: 'Tamara Djordjevic is a Junior Analyst with more than seven years of professional experience spanning sales, operational support, and financial services. She brings strong client management skills and attention to detail to engagement delivery.',
    expertise: ['Financial analysis', 'Business reporting', 'Client management'],
    credentials: 'Business Academy Novi Sad',
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.png" alt="Leadership" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <Link href="/about" className="text-white/60 text-sm hover:text-white transition-colors">About</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Leadership</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Leadership</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Leadership</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Our leadership team combines deep regional expertise with international professional services experience.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section - Light */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Leadership
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#0a0f18] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Partners
            </h2>
            <p className="text-[#0a0f18]/70 text-lg">
              Our partners bring decades of combined experience in professional services, with backgrounds at international consulting firms and multinational corporations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white border border-[#0a0f18]/10 overflow-hidden hover:border-[#2a9d96]/30 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3
                    className="text-2xl font-light text-[#0a0f18] mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {leader.name}
                  </h3>
                  <p className="text-[#2a9d96] font-medium mb-4">{leader.role}</p>
                  <p className="text-[#0a0f18]/70 mb-4 leading-relaxed">{leader.bio}</p>
                  {leader.fullBio && (
                    <p className="text-[#0a0f18]/60 text-sm mb-6 leading-relaxed">{leader.fullBio}</p>
                  )}
                  <div className="mb-4">
                    <p className="text-[#2a9d96] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                      Areas of Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((area, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#2a9d96]/10 text-xs text-[#2a9d96] rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#0a0f18]/50">{leader.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Dark */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Professionals
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
            >
              Our Team
            </h2>
            <p className="text-white/70 text-lg">
              Our experienced team of professionals delivers exceptional service across all our practice areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 overflow-hidden hover:border-[#2a9d96]/30 transition-colors flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="!text-white font-medium text-base mb-1">{member.name}</h3>
                  <p className="text-sm text-[#2a9d96] font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-white/60 mb-4 flex-1">{member.shortBio}</p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {member.expertise.slice(0, 2).map((area, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/10 text-[10px] text-white/70"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Navigation - Light Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Explore More
          </p>
          <h2
            className="text-2xl md:text-3xl font-light text-[#0a0f18] mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Learn More About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/about/approach"
              className="block p-8 bg-white border border-[#0a0f18]/10 hover:border-[#2a9d96]/30 transition-colors group"
            >
              <h3 className="font-medium text-[#0a0f18] mb-2 group-hover:text-[#2a9d96] transition-colors">Our Approach</h3>
              <p className="text-sm text-[#0a0f18]/60">How we deliver services and work with clients.</p>
            </Link>
            <Link
              href="/about/infrastructure"
              className="block p-8 bg-white border border-[#0a0f18]/10 hover:border-[#2a9d96]/30 transition-colors group"
            >
              <h3 className="font-medium text-[#0a0f18] mb-2 group-hover:text-[#2a9d96] transition-colors">Infrastructure</h3>
              <p className="text-sm text-[#0a0f18]/60">Our operational capability and team structure.</p>
            </Link>
            <Link
              href="/about/technology"
              className="block p-8 bg-white border border-[#0a0f18]/10 hover:border-[#2a9d96]/30 transition-colors group"
            >
              <h3 className="font-medium text-[#0a0f18] mb-2 group-hover:text-[#2a9d96] transition-colors">Technology</h3>
              <p className="text-sm text-[#0a0f18]/60">ERP systems and technology capabilities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Section */}
      <section className="py-28 bg-[#0a0f18]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Get Started
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-display)', color: '#3ec9c1' }}
            >
              Ready to Work With Our Team?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Contact us to discuss how our experienced professionals can support your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#2a9d96] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#238b85] transition-all duration-500"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-white/5 transition-all duration-500"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
