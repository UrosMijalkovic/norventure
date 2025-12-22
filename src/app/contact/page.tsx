'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Discuss your requirements with our team. We respond to all inquiries within one business day."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-[var(--color-forest)]/10 border border-[var(--color-forest)] rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-4">
                    Thank You for Your Inquiry
                  </h2>
                  <p className="text-[var(--color-charcoal)]">
                    We have received your message and will respond within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-[var(--color-navy)] mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-[var(--color-gray-border)] rounded focus:outline-none focus:border-[var(--color-teal)]"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-[var(--color-gray-border)] rounded focus:outline-none focus:border-[var(--color-teal)]"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-[var(--color-gray-border)] rounded focus:outline-none focus:border-[var(--color-teal)]"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-[var(--color-gray-border)] rounded focus:outline-none focus:border-[var(--color-teal)]"
                          placeholder="+381..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--color-gray-border)] rounded focus:outline-none focus:border-[var(--color-teal)]"
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
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--color-charcoal)] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--color-gray-border)] rounded focus:outline-none focus:border-[var(--color-teal)] resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full md:w-auto disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-[var(--color-gray-light)] rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@norventureservices.rs"
                      className="flex items-start space-x-3 text-[var(--color-charcoal)] hover:text-[var(--color-teal)] transition-colors"
                    >
                      <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>info@norventureservices.rs</span>
                    </a>
                    <a
                      href="tel:+381665050222"
                      className="flex items-start space-x-3 text-[var(--color-charcoal)] hover:text-[var(--color-teal)] transition-colors"
                    >
                      <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>+381 66 50 50 222</span>
                    </a>
                    <div className="flex items-start space-x-3 text-[var(--color-charcoal)]">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <p>Beogradska 51</p>
                        <p>Belgrade, Serbia</p>
                      </div>
                    </div>
                    <a
                      href="https://linkedin.com/company/norventure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-[var(--color-charcoal)] hover:text-[var(--color-teal)] transition-colors"
                    >
                      <Linkedin className="w-5 h-5 flex-shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="bg-[var(--color-navy)] rounded-lg p-6 text-white">
                  <h3 className="font-semibold mb-3">Response Time</h3>
                  <p className="text-sm text-gray-300">
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
