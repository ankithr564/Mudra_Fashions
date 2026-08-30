'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import { ProductCard } from '@/components/product/ProductCard';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Heart, ShoppingBag } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-white min-h-screen pb-20 pt-8">
      <div className="bg-white text-neutral-900 py-12 px-4 mb-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal direction="down">
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#D9234B]">
              Saved Products
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-neutral-900">
              Your Personal Wishlist ({wishlist.length})
            </h1>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {wishlist.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 border border-neutral-200 space-y-4">
            <div className="w-16 h-16 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-neutral-800">Your wishlist is empty</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Save your favorite formal shirts, tailored pants, uniforms, and luxury fabric items to view them later.
            </p>
            <Link
              href="/shop"
              className="inline-block px-6 py-2.5 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9E1B32] transition-colors shadow-sm"
            >
              Browse Catalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
