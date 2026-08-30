'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, FileText, Download, Award, Layers, Percent, Truck } from 'lucide-react';

export default function WholesaleLandingPage() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen pb-20 pt-6">
      {/* 1. Hero Enterprise Header */}
      <section className="bg-white text-neutral-900 py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="down">
                <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-rose-50 text-[#D9234B] border border-rose-200 text-xs font-bold uppercase tracking-[0.25em] rounded-full">
                  <Building2 className="w-3.5 h-3.5 text-[#D9234B]" />
                  <span>Enterprise B2B Wholesale Portal</span>
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950 leading-tight">
                  Direct Mill Supply for <br />
                  <span className="text-[#D9234B] italic">Retailers &amp; Enterprises</span>
                </h1>
                <p className="text-xs sm:text-base text-neutral-600 max-w-xl font-light leading-relaxed">
                  Source premium menswear, commercial uniforms, and high-count fabrics directly from Mudra Fashions. Tiered volume discounts up to 55% OFF, low MOQs, and official GST Input Tax Credit invoices.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/wholesale/apply"
                    className="px-8 py-4 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#9E1B32] transition-colors flex items-center space-x-2"
                  >
                    <span>Apply for Wholesale Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/wholesale/dashboard"
                    className="px-8 py-4 bg-white text-neutral-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-100 transition-colors border border-neutral-300 shadow-sm"
                  >
                    Enter B2B Portal
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="p-8 bg-white border border-neutral-200 shadow-xl space-y-6">
                  <h3 className="font-serif font-bold text-xl text-neutral-900 pb-3 border-b border-neutral-200">
                    B2B Commercial Guarantee
                  </h3>
                  <div className="space-y-4 text-xs text-neutral-700">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D9234B] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-900 block">Volume Tier Discounts (Up to 55% Off)</strong>
                        <span>Automatic tier pricing calculated per size matrix or roll volume.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D9234B] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-900 block">Official GST Input Tax Credit</strong>
                        <span>Automated B2B tax invoices generated with your company GSTIN.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D9234B] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-900 block">Custom Logo Embroidery &amp; Labelling</strong>
                        <span>Precision brand identity embroidery for corporate uniform orders.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. B2B Tier Pricing Structure Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
              Transparent Volume Pricing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mt-2">
              B2B Discount Tier Structure
            </h2>
            <p className="text-xs text-neutral-500 mt-2">
              The more you order, the lower your unit cost. Standard MOQs apply per category.
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-white border border-neutral-200 shadow-xl overflow-hidden">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-900 font-serif uppercase tracking-wider border-b border-neutral-200">
                <th className="p-4">Wholesale Tier Level</th>
                <th className="p-4">Minimum Order Quantity (MOQ)</th>
                <th className="p-4">Discount Off Retail</th>
                <th className="p-4">Average Unit Price (Shirts)</th>
                <th className="p-4">Payment Terms</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                <td className="p-4 font-bold text-neutral-900">Tier 1: Starter Retailer</td>
                <td className="p-4 text-neutral-700">20 – 49 Pieces</td>
                <td className="p-4 font-bold text-emerald-700">35% OFF Retail</td>
                <td className="p-4 font-bold text-neutral-900">₹844 / piece</td>
                <td className="p-4 text-neutral-500">Advance / GST Bill</td>
              </tr>
              <tr className="border-b border-neutral-200 bg-rose-50/50 hover:bg-rose-50">
                <td className="p-4 font-bold text-[#9E1B32]">Tier 2: Business Partner (Popular)</td>
                <td className="p-4 text-neutral-700">50 – 199 Pieces</td>
                <td className="p-4 font-bold text-[#D9234B]">45% OFF Retail</td>
                <td className="p-4 font-bold text-neutral-900">₹714 / piece</td>
                <td className="p-4 text-neutral-500">50% Advance + Dispatch Balance</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="p-4 font-bold text-neutral-900">Tier 3: Enterprise &amp; Mill Direct</td>
                <td className="p-4 text-neutral-700">200+ Pieces / Rolls</td>
                <td className="p-4 font-bold text-emerald-800">55% OFF Retail</td>
                <td className="p-4 font-bold text-neutral-900">₹584 / piece</td>
                <td className="p-4 text-neutral-500">Custom Credit Line Available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Call to Action Registration Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 text-neutral-900 p-8 sm:p-12 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D9234B]">
              Ready for Sourcing?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
              Get Instant Access to Wholesale B2B Rates
            </h3>
            <p className="text-xs text-neutral-600 max-w-lg">
              Submit your GSTIN business credentials to get approved within 24 hours.
            </p>
          </div>

          <Link
            href="/wholesale/apply"
            className="px-8 py-4 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#9E1B32] transition-colors whitespace-nowrap shadow-lg"
          >
            Apply for Wholesale Account →
          </Link>
        </div>
      </section>
    </div>
  );
}
