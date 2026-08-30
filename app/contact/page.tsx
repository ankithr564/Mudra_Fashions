'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    requirementType: 'Retail Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-white min-h-screen pb-20 pt-8">
      {/* Header */}
      <div className="bg-white text-neutral-900 py-16 px-4 mb-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
              Get in Touch
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-neutral-900">
              Contact Mudra Fashions
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mt-2 font-light">
              Have questions regarding retail orders, B2B wholesale, uniform customization, or fabric swatches? Contact our team.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3">
              <MapPin className="w-6 h-6 text-[#D9234B]" />
              <h3 className="font-serif font-bold text-base text-neutral-900">Head Office &amp; Showroom</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Mudra Textile Hub, #42 Indiranagar 100ft Road, Commercial Complex, Bengaluru, KA 560038
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3">
              <Phone className="w-6 h-6 text-[#D9234B]" />
              <h3 className="font-serif font-bold text-base text-neutral-900">Phone Support</h3>
              <p className="text-xs text-neutral-600">Retail Desk: +91 (080) 4567-8900</p>
              <p className="text-xs text-neutral-600">Wholesale B2B Hotline: +91 98765-43210</p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3">
              <Mail className="w-6 h-6 text-[#D9234B]" />
              <h3 className="font-serif font-bold text-base text-neutral-900">Email Desks</h3>
              <p className="text-xs text-neutral-600">General: contact@mudrafashions.com</p>
              <p className="text-xs text-neutral-600">Bulk &amp; B2B: bulk@mudrafashions.com</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 text-center space-y-4 my-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif font-bold text-2xl text-neutral-900">Message Sent Successfully!</h3>
                <p className="text-xs text-neutral-600">
                  Thank you for reaching out. Our team will get back to you within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 p-8 shadow-lg space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-neutral-900">Send Us a Message</h3>
                  <p className="text-xs text-neutral-500">Fill in the requirement details below.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-[#D9234B]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-[#D9234B]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-[#D9234B]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Requirement Type *</label>
                    <select
                      value={formData.requirementType}
                      onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                      className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-[#D9234B]"
                    >
                      <option>Retail Order Enquiry</option>
                      <option>Wholesale B2B Account</option>
                      <option>Corporate Uniform Requirement</option>
                      <option>Fabric &amp; Textile Meterage</option>
                      <option>Bulk Custom Clothing</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-neutral-700 mb-1">Subject</label>
                    <input
                      type="text"
                      placeholder="Brief title of your enquiry..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-[#D9234B]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-neutral-700 mb-1">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Details regarding your order or enquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-[#D9234B]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center space-x-2 hover:bg-[#9E1B32] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
