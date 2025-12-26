'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0a0f18] -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 z-0">
          <img src="/hero-all.png" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 15, 24, 0.9) 0%, rgba(10, 15, 24, 0.75) 50%, rgba(10, 15, 24, 0.85) 100%)' }} />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <span className="text-white text-sm">Contact</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#2a9d96] to-transparent" />
              <span className="text-[#2a9d96] text-sm font-medium tracking-[0.3em] uppercase">Get In Touch</span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1.1 }}>
              <span className="text-[#2a9d96] text-4xl md:text-5xl lg:text-6xl">Contact Us</span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Discuss your requirements with our team. We respond to all inquiries within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-28 bg-[#fdfcfa]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-[#2a9d96]/10 border border-[#2a9d96] p-8 text-center">
                  <h2 className="text-2xl text-[#0a0f18] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Thank You for Your Inquiry
                  </h2>
                  <p className="text-[#64748b]">
                    We have received your message and will respond within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-[#1d7a74] text-sm font-medium tracking-[0.3em] uppercase block mb-4">Send a Message</span>
                  <h2 className="text-[#0a0f18] text-2xl md:text-3xl font-light mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                    Tell us about your <span className="italic">requirements</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#0a0f18] mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-[#e2e8f0] focus:outline-none focus:border-[#2a9d96] transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#0a0f18] mb-2">Company *</label>
                        <input
                          type="text"
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-[#e2e8f0] focus:outline-none focus:border-[#2a9d96] transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#0a0f18] mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-[#e2e8f0] focus:outline-none focus:border-[#2a9d96] transition-colors"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#0a0f18] mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-[#e2e8f0] focus:outline-none focus:border-[#2a9d96] transition-colors"
                          placeholder="+381..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-[#0a0f18] mb-2">Inquiry Type *</label>
                      <select
                        id="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#e2e8f0] focus:outline-none focus:border-[#2a9d96] transition-colors"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="accounting">Accounting Services</option>
                        <option value="tax">Tax Services</option>
                        <option value="payroll">Payroll Services</option>
                        <option value="corporate">Corporate Services</option>
                        <option value="advisory">Advisory Services</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#0a0f18] mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#e2e8f0] focus:outline-none focus:border-[#2a9d96] transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 bg-[#0a0f18] text-white px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#2a9d96] transition-all duration-500 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#0a0f18] p-8">
                  <h3 className="!text-[#3ec9c1] text-lg font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>Contact Information</h3>
                  <div className="space-y-4">
                    <a href="mailto:info@norventureservices.rs" className="flex items-start gap-3 text-white/70 hover:text-[#2a9d96] transition-colors">
                      <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>info@norventureservices.rs</span>
                    </a>
                    <a href="tel:+381665050222" className="flex items-start gap-3 text-white/70 hover:text-[#2a9d96] transition-colors">
                      <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>+381 66 50 50 222</span>
                    </a>
                    <div className="flex items-start gap-3 text-white/70">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p>Beogradska 51</p>
                        <p>Belgrade, Serbia</p>
                      </div>
                    </div>
                    <a href="https://linkedin.com/company/norventure" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-[#2a9d96] transition-colors">
                      <Linkedin className="w-5 h-5 flex-shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="bg-[#1d7a74] p-8">
                  <h3 className="text-white text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-display)' }}>Response Time</h3>
                  <p className="text-white/80 text-sm">
                    We respond to all inquiries within one business day. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
