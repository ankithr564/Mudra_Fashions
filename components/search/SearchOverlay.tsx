'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearch } from '@/context/SearchContext';
import { PRODUCTS } from '@/data/products';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isSearchOpen) closeSearch();
        else {
          // toggle search
        }
      }
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.fabric.toLowerCase().includes(query.toLowerCase()) ||
          p.subcategory.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = ['Formal Shirts', 'Cotton Fabrics', 'Security Uniforms', 'Chinos', 'Lab Coats', 'Blazers'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white text-neutral-900 w-full max-w-3xl border border-neutral-200 shadow-2xl overflow-hidden relative"
        >
          {/* Search Bar Input Header */}
          <div className="p-4 border-b border-neutral-200 flex items-center space-x-3 bg-neutral-50">
            <Search className="w-5 h-5 text-[#D9234B] flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, fabrics, uniforms, categories..."
              className="w-full text-base font-serif text-neutral-900 bg-transparent focus:outline-none placeholder-neutral-400"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-xs text-neutral-400 hover:text-neutral-900">
                Clear
              </button>
            )}
            <button
              onClick={closeSearch}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {query.trim() === '' ? (
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 block">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-700 hover:bg-rose-50 hover:text-[#D9234B] border border-neutral-200 text-xs font-semibold transition-colors"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 block">
                  Search Results ({filteredProducts.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={closeSearch}
                      className="flex space-x-3 p-2 border border-neutral-200 hover:border-[#D9234B] bg-white transition-colors group"
                    >
                      <div className="relative w-16 h-20 bg-neutral-100 flex-shrink-0">
                        <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-0.5">
                        <div>
                          <span className="text-[10px] text-[#D9234B] font-bold uppercase tracking-wider block">
                            {product.subcategory}
                          </span>
                          <h4 className="font-serif text-xs font-bold text-neutral-900 group-hover:text-[#D9234B] line-clamp-1">
                            {product.name}
                          </h4>
                        </div>
                        <span className="font-serif text-xs font-bold text-neutral-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-sm font-semibold text-neutral-600 mb-2">No matching products found for &quot;{query}&quot;</p>
                <p className="text-xs text-neutral-400">Try searching for shirts, trousers, fabrics, or uniforms.</p>
              </div>
            )}
          </div>

          <div className="px-6 py-3 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
            <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 font-mono text-[10px]">ESC</kbd> to close</span>
            <Link href="/shop" onClick={closeSearch} className="flex items-center space-x-1 font-bold text-[#D9234B] hover:underline">
              <span>View All Catalog</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
