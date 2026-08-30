'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Award, ShieldCheck, Layers, Building2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-20 pt-8">
      {/* Hero Header */}
      <div className="bg-white text-neutral-900 py-16 px-4 mb-16 relative overflow-hidden border-b border-neutral-200">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
              Est. Indian Heritage &amp; Innovation
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold mt-2 text-neutral-900">
              The Story of Mudra Fashions
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              Crafting premium menswear, institutional uniforms, and high-thread textiles with timeless elegance and industrial precision.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Brand Mission & Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] w-full bg-neutral-100 border border-neutral-200 overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
                alt="Executive Menswear Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
                Crafting Distinction
              </span>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 leading-tight">
                Designed in India. Made to Move with You.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                Founded with a singular mission: to bridge the gap between luxury retail tailoring and industrial uniform manufacturing. Mudra Fashions combines Egyptian Giza cotton, European flax linen, and heavy-duty poly-viscose weaves to serve individual gentlemen and enterprise workforces nationwide.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-bold text-neutral-900">
                <div className="p-3 bg-neutral-50 border border-neutral-200">
                  <span className="font-serif text-2xl text-[#D9234B] block">100%</span>
                  <span>Pure Organic Fibers</span>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200">
                  <span className="font-serif text-2xl text-[#D9234B] block">500+</span>
                  <span>Enterprise Clients</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Core Divisions */}
        <section>
          <ScrollReveal direction="up">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
                Three Pillars of Excellence
              </span>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-2">Our Specialized Divisions</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-8 bg-neutral-50 border border-neutral-200 space-y-4 hover:border-neutral-400 transition-all">
                <div className="w-12 h-12 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-neutral-900">1. Executive Menswear</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Slim-fit Giza formal shirts, flex-waist trousers, and structured Italian-cut blazers designed for boardroom executives.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-8 bg-neutral-50 border border-neutral-200 space-y-4 hover:border-neutral-400 transition-all">
                <div className="w-12 h-12 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-neutral-900">2. Uniform Solutions</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  High-wear commercial apparel for hotels, hospitals, security guard teams, corporate offices, and educational institutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="p-8 bg-neutral-50 border border-neutral-200 space-y-4 hover:border-neutral-400 transition-all">
                <div className="w-12 h-12 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-neutral-900">3. Textile Mill &amp; Fabrics</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Supplying cut-lengths by the meter and 50m bolts of Giza cotton, Oxford weave, and pure linen to fashion houses and tailors.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Call to Action */}
        <section className="p-12 bg-neutral-50 text-neutral-900 text-center border border-neutral-200 shadow-xl space-y-6">
          <ScrollReveal direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Ready to Experience Mudra Distinction?</h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
              Explore our retail catalog or apply for commercial wholesale partnership today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#9E1B32] transition-colors shadow-md"
              >
                Shop Retail Collection
              </Link>
              <Link
                href="/wholesale/apply"
                className="px-8 py-3.5 bg-white text-neutral-900 text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors border border-neutral-300 shadow-sm"
              >
                Apply for Wholesale B2B
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
