'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { useCart } from '@/context/CartContext';
import { Layers, ShieldCheck, CheckCircle2, ShoppingBag, ArrowRight, Sparkles, Award, Calculator, Info } from 'lucide-react';

export default function FabricsPage() {
  const fabricProducts = PRODUCTS.filter(
    (p) => p.category === 'fabrics' || p.category === 'uniforms' || p.fabric.length > 0
  );

  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedMeters, setSelectedMeters] = useState<number>(2.5);
  const [activeFabric, setActiveFabric] = useState<Product>(fabricProducts[0] || PRODUCTS[0]);
  const { addToCart } = useCart();

  const fabricCategories = [
    { id: 'all', name: 'All Technical Fabrics' },
    { id: 'shirting', name: 'Premium Cotton Shirting' },
    { id: 'linen', name: 'European Pure Linen' },
    { id: 'suiting', name: 'Poly-Viscose Suiting' },
    { id: 'uniform', name: 'Institutional Uniform Fabrics' },
  ];

  const filteredFabrics = fabricProducts.filter((p) => {
    if (selectedType === 'all') return true;
    if (selectedType === 'shirting') return p.name.toLowerCase().includes('shirting') || p.fabric.toLowerCase().includes('cotton');
    if (selectedType === 'linen') return p.fabric.toLowerCase().includes('linen');
    if (selectedType === 'suiting') return p.name.toLowerCase().includes('suiting') || p.fabric.toLowerCase().includes('viscose');
    if (selectedType === 'uniform') return p.category === 'uniforms' || p.name.toLowerCase().includes('uniform');
    return true;
  });

  const pricePerMeter = activeFabric ? Math.round(activeFabric.price / 2.5) : 350;
  const calculatedTotal = Math.round(pricePerMeter * selectedMeters);

  return (
    <div className="bg-white text-neutral-900 min-h-screen pb-20 pt-6">
      {/* 1. Header Showcase Banner */}
      <section className="bg-white border-b border-neutral-200 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal direction="down">
                <span className="inline-flex items-center space-x-2 px-3 py-1 bg-rose-50 border border-rose-200 text-[#D9234B] text-xs font-bold uppercase tracking-[0.25em] rounded-full">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Textile Weave &amp; Mill Sourcing</span>
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-950 mt-2">
                  Technical Fabrics &amp; Unstitched Shirting
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-xl font-light leading-relaxed">
                  High-count 80s 2-ply Mercerized Giza Cottons, 60 Lea European Flax Linen, and commercial anti-pilling uniform rolls for custom tailors and corporate apparel makers.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="p-6 bg-white border border-neutral-200 shadow-xl space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#D9234B] uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Mudra Mill Guarantee</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-neutral-50 border border-neutral-200">
                      <span className="font-bold block text-neutral-900">Color Fastness</span>
                      <span className="text-[11px] text-neutral-500">Grade 4.5+ Wash Tested</span>
                    </div>
                    <div className="p-3 bg-neutral-50 border border-neutral-200">
                      <span className="font-bold block text-neutral-900">Pre-Shrunk</span>
                      <span className="text-[11px] text-neutral-500">Zero Shrinkage Finish</span>
                    </div>
                    <div className="p-3 bg-neutral-50 border border-neutral-200">
                      <span className="font-bold block text-neutral-900">Standard Width</span>
                      <span className="text-[11px] text-neutral-500">58&quot; (147 cm) Width</span>
                    </div>
                    <div className="p-3 bg-neutral-50 border border-neutral-200">
                      <span className="font-bold block text-neutral-900">MOQ Roll</span>
                      <span className="text-[11px] text-neutral-500">50 Meters per Roll</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 2. Interactive Meter Cut & Roll Calculator */}
        <ScrollReveal direction="up">
          <div className="bg-neutral-50 text-neutral-900 p-6 sm:p-10 border border-neutral-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D9234B] flex items-center space-x-1.5">
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Meter &amp; Cut Length Calculator</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                  {activeFabric.name}
                </h3>
                <p className="text-xs text-neutral-600">
                  Select your required meter cut length or select standard garment piece requirements.
                </p>

                {/* Meter Selection Buttons */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-neutral-700 block">Recommended Garment Lengths:</span>
                  <div className="flex flex-wrap gap-2 text-xs font-bold">
                    <button
                      onClick={() => setSelectedMeters(1.6)}
                      className={`px-3.5 py-2 border rounded-sm transition-all ${selectedMeters === 1.6 ? 'bg-[#D9234B] border-[#D9234B] text-white shadow-sm' : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100'}`}
                    >
                      1.6m (Half Sleeve Shirt)
                    </button>
                    <button
                      onClick={() => setSelectedMeters(2.5)}
                      className={`px-3.5 py-2 border rounded-sm transition-all ${selectedMeters === 2.5 ? 'bg-[#D9234B] border-[#D9234B] text-white shadow-sm' : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100'}`}
                    >
                      2.5m (Full Sleeve Shirt Piece)
                    </button>
                    <button
                      onClick={() => setSelectedMeters(3.0)}
                      className={`px-3.5 py-2 border rounded-sm transition-all ${selectedMeters === 3.0 ? 'bg-[#D9234B] border-[#D9234B] text-white shadow-sm' : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100'}`}
                    >
                      3.0m (Trousers Piece)
                    </button>
                    <button
                      onClick={() => setSelectedMeters(50)}
                      className={`px-3.5 py-2 border rounded-sm transition-all ${selectedMeters === 50 ? 'bg-[#D9234B] border-[#D9234B] text-white shadow-sm' : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100'}`}
                    >
                      50m (Full Commercial Roll)
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="lg:col-span-5 bg-white p-6 border border-neutral-200 text-center space-y-4 shadow-md">
                <div className="text-xs text-neutral-500">
                  Price per Meter: <strong className="text-neutral-900 font-bold">₹{pricePerMeter} / meter</strong>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block">Total Cut Price:</span>
                  <div className="font-serif text-4xl font-bold text-[#D9234B] mt-1">
                    ₹{calculatedTotal.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-neutral-500 block mt-1">Includes All Taxes &amp; GST Credit</span>
                </div>
                <button
                  onClick={() => addToCart(activeFabric, selectedMeters >= 50 ? '50m Roll' : `${selectedMeters} Meter Cut`, 'Standard Width', 1, calculatedTotal)}
                  className="w-full py-3.5 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9E1B32] transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {selectedMeters} Meters to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Filter Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-neutral-200">
          {fabricCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedType(cat.id)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedType === cat.id
                  ? 'bg-neutral-950 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 4. Fabric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFabrics.map((fabric) => (
            <ScrollReveal key={fabric.id} direction="up">
              <div
                onClick={() => setActiveFabric(fabric)}
                className={`group cursor-pointer border bg-white p-5 transition-all ${
                  activeFabric.id === fabric.id ? 'border-2 border-[#D9234B] shadow-xl' : 'border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden bg-neutral-100">
                  <Image
                    src={fabric.images?.[0] || 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800'}
                    alt={fabric.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 bg-neutral-900/90 text-white text-[10px] font-bold uppercase tracking-wider">
                    {fabric.fabric}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-base text-neutral-900 group-hover:text-[#D9234B] transition-colors">
                    {fabric.name}
                  </h4>
                  <p className="text-xs text-neutral-500 line-clamp-2">{fabric.description}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-xs">
                    <span className="font-bold text-neutral-900">₹{Math.round(fabric.price / 2.5)} / meter</span>
                    <span className="text-[#D9234B] font-bold text-[11px] uppercase group-hover:underline">
                      Select for Calculator →
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
