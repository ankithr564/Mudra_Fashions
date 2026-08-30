'use client';

import React from 'react';
import Link from 'next/link';
import { MudraLogo } from '@/components/brand/MudraLogo';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CreditCard, Award, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-neutral-900 pt-16 pb-8 border-t border-neutral-200">
      {/* Brand Value Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mb-12 border-b border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div className="flex items-center space-x-3 text-neutral-700">
          <Award className="w-8 h-8 text-[#D9234B] flex-shrink-0" />
          <div>
            <h5 className="font-serif font-bold text-xs uppercase tracking-wider text-neutral-900">Supreme Textile Quality</h5>
            <p className="text-[11px] text-neutral-500">100% Giza cotton &amp; certified fabrics</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-neutral-700">
          <Truck className="w-8 h-8 text-[#D9234B] flex-shrink-0" />
          <div>
            <h5 className="font-serif font-bold text-xs uppercase tracking-wider text-neutral-900">Pan-India Delivery</h5>
            <p className="text-[11px] text-neutral-500">Fast express shipping &amp; bulk freight</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-neutral-700">
          <ShieldCheck className="w-8 h-8 text-[#D9234B] flex-shrink-0" />
          <div>
            <h5 className="font-serif font-bold text-xs uppercase tracking-wider text-neutral-900">B2B GST Tax Compliance</h5>
            <p className="text-[11px] text-neutral-500">Official GST input tax invoices</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-neutral-700">
          <CreditCard className="w-8 h-8 text-[#D9234B] flex-shrink-0" />
          <div>
            <h5 className="font-serif font-bold text-xs uppercase tracking-wider text-neutral-900">Flexible Payment Options</h5>
            <p className="text-[11px] text-neutral-500">UPI, NetBanking, Cards &amp; COD</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <MudraLogo variant="light" size="md" />
          <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
            MUDRA FASHIONS is India&apos;s premier corporate menswear, custom uniform, and textile fabric manufacturer. Serving luxury retail buyers and bulk corporate enterprises nationwide.
          </p>
          <div className="space-y-2 text-xs text-neutral-700 pt-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#D9234B]" />
              <span>Mudra Textile Hub, Commercial Complex, Bengaluru, KA 560038</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#D9234B]" />
              <span>+91 (080) 4567-8900 / +91 98765-43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#D9234B]" />
              <span>contact@mudrafashions.com | bulk@mudrafashions.com</span>
            </div>
          </div>
        </div>

        {/* Col 2: Shop Links */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-neutral-900 mb-4 border-b border-rose-300 pb-1 inline-block">
            Shop Collections
          </h4>
          <ul className="space-y-2 text-xs text-neutral-600">
            <li><Link href="/shop/shirts" className="hover:text-[#D9234B] transition-colors">Men&apos;s Shirts</Link></li>
            <li><Link href="/shop/pants" className="hover:text-[#D9234B] transition-colors">Men&apos;s Pants &amp; Chinos</Link></li>
            <li><Link href="/shop/formal-wear" className="hover:text-[#D9234B] transition-colors">Formal Blazers &amp; Suits</Link></li>
            <li><Link href="/uniforms" className="hover:text-[#D9234B] transition-colors">Corporate Uniforms</Link></li>
            <li><Link href="/uniforms" className="hover:text-[#D9234B] transition-colors">Hospital &amp; Lab Coats</Link></li>
            <li><Link href="/fabrics" className="hover:text-[#D9234B] transition-colors">Giza Cotton &amp; Linen Fabrics</Link></li>
          </ul>
        </div>

        {/* Col 3: Business & B2B */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-neutral-900 mb-4 border-b border-rose-300 pb-1 inline-block">
            Wholesale &amp; B2B
          </h4>
          <ul className="space-y-2 text-xs text-neutral-600">
            <li><Link href="/login" className="font-bold text-[#D9234B] hover:underline">Sign In / Login Options</Link></li>
            <li><Link href="/register" className="font-bold text-neutral-900 hover:underline">Register New Account</Link></li>
            <li><Link href="/wholesale" className="hover:text-[#D9234B] transition-colors">Wholesale Portal Overview</Link></li>
            <li><Link href="/wholesale/apply" className="hover:text-[#D9234B] transition-colors">Apply for Wholesale Account</Link></li>
            <li><Link href="/wholesale/dashboard" className="hover:text-[#D9234B] transition-colors">Bulk Order Matrix</Link></li>
            <li><Link href="/wholesale/quotations" className="hover:text-[#D9234B] transition-colors">Request RFQ Quotation</Link></li>
            <li><Link href="/admin" className="text-[#D9234B] hover:underline font-bold transition-colors">Admin Dashboard</Link></li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-neutral-900 mb-4 border-b border-rose-300 pb-1 inline-block">
            Newsletter &amp; Catalog
          </h4>
          <p className="text-xs text-neutral-600 mb-3">
            Subscribe to receive corporate fabric catalogs, new season collection drops, and bulk trade offers.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter business email..."
                className="w-full bg-white border border-neutral-300 px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#D9234B]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-[#D9234B] text-white flex items-center justify-center hover:bg-[#9E1B32] transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-[10px] text-neutral-500 block">Strict privacy policy. Zero spam guaranteed.</span>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <div>
          © {new Date().getFullYear()} MUDRA FASHIONS. All Rights Reserved. Men&apos;s Wear • Uniforms • Fabrics.
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-neutral-900">Privacy Policy</Link>
          <Link href="/about" className="hover:text-neutral-900">Terms of Supply</Link>
          <Link href="/contact" className="hover:text-neutral-900">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};
