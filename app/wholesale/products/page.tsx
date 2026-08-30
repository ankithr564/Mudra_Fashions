'use client';

import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { WholesaleBulkMatrix } from '@/components/wholesale/WholesaleBulkMatrix';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function WholesaleProductsPage() {
  return (
    <div className="bg-white min-h-screen pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D9234B]">B2B Catalog</span>
            <h1 className="font-serif text-3xl font-bold text-neutral-900 mt-1">Wholesale Products &amp; Tier Rates</h1>
          </div>
          <Link href="/wholesale/dashboard" className="text-xs font-bold text-neutral-600 hover:text-neutral-900 underline">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, idx) => (
            <ScrollReveal key={product.id} direction="up" delay={0.05 * idx}>
              <div className="bg-white border border-neutral-200 p-6 shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D9234B]">{product.subcategory}</span>
                    <h3 className="font-serif text-xl font-bold text-neutral-900">{product.name}</h3>
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">
                    MOQ: {product.moq || 20} Pcs
                  </span>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 flex justify-between text-xs">
                  <div>
                    <span className="text-neutral-500 block">Retail MSRP</span>
                    <span className="font-bold line-through text-neutral-400">₹{product.price.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#D9234B] font-bold block">Wholesale Rate</span>
                    <span className="font-serif font-bold text-lg text-neutral-900">₹{(product.wholesalePrice || Math.round(product.price * 0.6)).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <WholesaleBulkMatrix product={product} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
