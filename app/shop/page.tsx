'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Filter, SlidersHorizontal, Grid2X2, Grid3X3, LayoutGrid, X, Check, ArrowUpDown, Sparkles } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(4);
  const [isFilterMobileOpen, setIsFilterMobileOpen] = useState<boolean>(false);

  const fabrics = ['Giza Cotton', 'Italian Linen', 'Poly-Viscose', 'Wool Blend', 'Cotton-Linen Blend'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Fabric Filter
      if (selectedFabric !== 'all' && !product.fabric.toLowerCase().includes(selectedFabric.toLowerCase())) {
        return false;
      }
      // Stock Filter
      if (inStockOnly && !product.inStock) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }, [selectedCategory, selectedFabric, inStockOnly, sortBy]);

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) + (selectedFabric !== 'all' ? 1 : 0) + (inStockOnly ? 1 : 0);

  return (
    <div className="bg-white text-neutral-900 min-h-screen pb-20 pt-6">
      {/* 1. Header & Breadcrumb Banner */}
      <div className="bg-white border-b border-neutral-200 py-10 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down">
            <div className="flex items-center space-x-2 text-xs text-neutral-500 mb-2">
              <Link href="/" className="hover:text-neutral-900">Home</Link>
              <span>/</span>
              <span className="text-[#D9234B] font-bold uppercase tracking-wider">Product Catalog</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D9234B]">
                  Tailored Excellence
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-950 mt-1">
                  Men&apos;s Wear &amp; Technical Textiles
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
                Showing {filteredProducts.length} items curated for luxury gentlemen, institutional uniforms, and bulk fabric orders.
              </p>
            </div>
          </ScrollReveal>

          {/* 2. Top Category Pills Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pt-8 pb-2 no-scrollbar border-t border-neutral-200/60 mt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-neutral-950 text-white shadow-md'
                  : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              All Catalog ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-[#D9234B] text-white shadow-md'
                    : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {cat.name} ({cat.itemCount})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3. Catalog Control Bar (Filters, Sort, Grid Switcher) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsFilterMobileOpen(!isFilterMobileOpen)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            <span className="text-xs font-semibold text-neutral-500 hidden sm:inline">
              Showing <strong className="text-neutral-900">{filteredProducts.length}</strong> Results
            </span>

            {activeFilterCount > 0 && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedFabric('all');
                  setInStockOnly(false);
                }}
                className="text-xs text-[#D9234B] font-bold hover:underline flex items-center space-x-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-neutral-500 font-semibold hidden md:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="p-2 bg-white border border-neutral-300 text-xs font-bold text-neutral-900 focus:outline-none focus:border-[#D9234B]"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid Column Selector (Desktop) */}
            <div className="hidden md:flex items-center space-x-1 border-l border-neutral-300 pl-4">
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 ${gridCols === 2 ? 'text-[#D9234B] bg-rose-50' : 'text-neutral-400 hover:text-neutral-900'}`}
                title="2 Columns"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 ${gridCols === 3 ? 'text-[#D9234B] bg-rose-50' : 'text-neutral-400 hover:text-neutral-900'}`}
                title="3 Columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-1.5 ${gridCols === 4 ? 'text-[#D9234B] bg-rose-50' : 'text-neutral-400 hover:text-neutral-900'}`}
                title="4 Columns"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. Main Grid & Filter Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Filter Panel */}
          <aside className={`lg:col-span-3 space-y-6 ${isFilterMobileOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="p-5 bg-neutral-50 border border-neutral-200/80 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <h3 className="font-serif font-bold text-base text-neutral-900 flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-[#D9234B]" />
                  <span>Refine Catalog</span>
                </h3>
              </div>

              {/* Fabric Type Filter */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 block">
                  Textile Fabric Weave
                </span>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => setSelectedFabric('all')}
                    className={`w-full text-left p-2 rounded transition-colors flex items-center justify-between ${
                      selectedFabric === 'all' ? 'bg-[#D9234B] text-white font-bold' : 'hover:bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    <span>All Fabrics</span>
                  </button>
                  {fabrics.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFabric(f)}
                      className={`w-full text-left p-2 rounded transition-colors flex items-center justify-between ${
                        selectedFabric === f ? 'bg-[#D9234B] text-white font-bold' : 'hover:bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      <span>{f}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* In Stock Filter Toggle */}
              <div className="pt-2 border-t border-neutral-200">
                <label className="flex items-center space-x-2 text-xs font-bold text-neutral-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-[#D9234B] w-4 h-4"
                  />
                  <span>In Stock Items Only</span>
                </label>
              </div>

              {/* B2B Wholesale Info Callout */}
              <div className="p-4 bg-rose-50 border border-rose-200 space-y-2 text-xs">
                <span className="font-bold text-[#9E1B32] block">Ordering Bulk (20+ Pcs)?</span>
                <p className="text-neutral-600 text-[11px]">
                  Apply for a B2B Wholesale Partner account to unlock 35% to 55% volume tier discounts and GST Tax Invoices.
                </p>
                <Link
                  href="/wholesale/apply"
                  className="inline-block pt-1 text-[#D9234B] font-bold underline hover:text-[#9E1B32]"
                >
                  Apply for Wholesale →
                </Link>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-neutral-50 border border-neutral-200 space-y-4">
                <p className="text-base text-neutral-600 font-serif">
                  No products found matching your active filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedFabric('all');
                    setInStockOnly(false);
                  }}
                  className="px-6 py-2.5 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  gridCols === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : gridCols === 3
                    ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {filteredProducts.map((product, idx) => (
                  <ScrollReveal key={product.id} direction="up" delay={0.04 * idx}>
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
