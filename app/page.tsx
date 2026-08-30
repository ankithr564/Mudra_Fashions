'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ArrowRight, ShieldCheck, Building2, Layers, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="space-y-20 pb-16 overflow-hidden bg-white text-neutral-900">
      {/* 1. LIGHT CLEAN HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-white border-b border-neutral-200/80 overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <ScrollReveal direction="down" delay={0.1}>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-rose-50 border border-rose-200 text-[#D9234B] text-xs font-bold uppercase tracking-[0.25em] rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-[#D9234B]" />
                  <span>Distinguished Apparel &amp; Technical Fabrics</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-none">
                  Premium Men&apos;s Clothing <br />
                  <span className="italic font-normal text-[#D9234B]">&amp; Fabrics</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Quality apparel, professional uniforms and fabrics for retail gentlemen and bulk commercial wholesale partners.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  {/* Primary Crimson CTA */}
                  <Link
                    href="/shop"
                    className="w-full sm:w-auto px-8 py-4 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-[#9E1B32] transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                  >
                    <span>Shop Collection</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Clean Bordered Secondary Button (Replaced heavy black block) */}
                  <Link
                    href="/wholesale"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-900 hover:text-white transition-all shadow-sm flex items-center justify-center space-x-2"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Explore Wholesale B2B</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden border-4 border-white shadow-2xl bg-neutral-100">
                  <Image
                    src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800"
                    alt="Mudra Fashions Executive Menswear"
                    fill
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-sm border border-neutral-200 text-neutral-900 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#D9234B] tracking-widest block">
                      Featured Executive Series
                    </span>
                    <h4 className="font-serif font-bold text-sm">Giza Cotton Royale Shirting</h4>
                    <span className="text-xs font-bold text-neutral-800">₹1,299 / piece</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
              Refined Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
              Explore Our Collections
            </h2>
            <p className="text-xs md:text-sm text-neutral-500 max-w-lg mx-auto mt-2">
              Discover meticulous tailored menswear, high-durability institutional uniforms, and luxury shirting textiles.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, index) => (
            <ScrollReveal key={cat.id} direction="up" delay={0.08 * index}>
              <Link
                href={`/shop/${cat.slug}`}
                className="group relative h-96 block overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-300 mb-1">
                    {cat.itemCount}+ Designs Available
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-rose-200 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-200 line-clamp-2 mt-1 mb-4 opacity-90">
                    {cat.description}
                  </p>
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-300 group-hover:translate-x-1 transition-transform">
                    <span>Discover Category</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
                Curated Showcase
              </span>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-1">
                Featured Apparel &amp; Fabrics
              </h2>
            </div>
            <Link
              href="/shop"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#D9234B] hover:text-[#9E1B32] underline underline-offset-4"
            >
              <span>View Full Shop Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} direction="up" delay={0.05 * idx}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. WHOLESALE B2B HIGHLIGHT BANNER (Clean Light Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative bg-rose-50/60 text-neutral-900 overflow-hidden p-8 sm:p-12 md:p-14 border border-rose-200 shadow-md">
            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-rose-300 text-[#D9234B] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-[#D9234B]" />
                <span>Enterprise B2B Solutions</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
                Wholesale Clothing &amp; Fabric Supply for Bulk Buyers
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Reliable sourcing for retailers, commercial businesses, hospitality groups, hospitals, and institutional buyers. Get wholesale tier pricing, flexible MOQ, and dedicated account support.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold pt-2 text-neutral-800">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9234B]" />
                  <span>Tiered Volume Discounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9234B]" />
                  <span>Custom Logo Embroidery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9234B]" />
                  <span>Official GST Tax Invoices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9234B]" />
                  <span>Dedicated B2B Logistics</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/wholesale/apply"
                  className="px-6 py-3.5 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9E1B32] transition-colors shadow-md"
                >
                  Apply for Wholesale Account
                </Link>
                <Link
                  href="/wholesale"
                  className="px-6 py-3.5 bg-white text-neutral-900 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors border-2 border-neutral-900 shadow-sm"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. BRAND CRAFTSMANSHIP & QUALITY COMMITMENT */}
      <section className="bg-neutral-50 py-16 border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
                The Mudra Standard
              </span>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-2">
                Uncompromising Quality &amp; Heritage
              </h2>
              <p className="text-xs text-neutral-500 mt-2">
                Every thread, seam, and button is selected to meet international corporate standards.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-white p-8 border border-neutral-200 text-center space-y-4 hover:border-neutral-400 transition-all">
                <div className="w-12 h-12 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-900">Giza &amp; Organic Fibers</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We source long-staple Giza cotton and 100% European flax linen for unmatched softness, sheen, and durability over hundreds of washes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white p-8 border border-neutral-200 text-center space-y-4 hover:border-neutral-400 transition-all">
                <div className="w-12 h-12 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center mx-auto">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-900">Precision Tailoring</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  German interlining collars, split yokes, and double-stitched stress points guarantee structural elegance throughout long workday wear.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-white p-8 border border-neutral-200 text-center space-y-4 hover:border-neutral-400 transition-all">
                <div className="w-12 h-12 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-900">Commercial Tested</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our uniform fabrics undergo rigorous color-fastness, anti-pilling, and high-temperature wash testing for 24/7 commercial reliability.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
