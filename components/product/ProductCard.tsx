'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useRole } from '@/context/RoleContext';
import { Heart, Star, Eye, ShoppingBag, Check } from 'lucide-react';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { role } = useRole();

  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const isFavorite = isInWishlist(product.id);
  const isWholesaleUser = role === 'wholesale_approved';
  const displayPrice = isWholesaleUser && product.wholesalePrice ? product.wholesalePrice : product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(
      product,
      product.sizes[0] || 'M',
      product.colors[0]?.name || 'Standard',
      1,
      displayPrice,
      isWholesaleUser
    );
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <>
      <div className="group relative bg-white border border-neutral-200/80 hover:border-neutral-400 transition-all duration-300 flex flex-col h-full overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
          {product.isNew && (
            <span className="px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="px-2 py-0.5 bg-[#D9234B] text-white text-[10px] font-bold uppercase tracking-widest">
              SALE
            </span>
          )}
          {isWholesaleUser && (
            <span className="px-2 py-0.5 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest">
              WHOLESALE TIER
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-neutral-600 hover:text-[#D9234B] shadow-sm hover:scale-110 transition-all"
          title={isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#D9234B] text-[#D9234B]' : ''}`} />
        </button>

        {/* Image Container */}
        <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            />
          )}

          {/* Hover Overlay Action Buttons */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
              className="flex-1 py-2 px-3 bg-white text-neutral-900 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1 hover:bg-neutral-100 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
            <button
              onClick={handleAddToCart}
              className="py-2 px-3 bg-[#D9234B] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center hover:bg-[#9E1B32] transition-colors"
              title="Add to Cart"
            >
              {addedSuccess ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
            </button>
          </div>
        </Link>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-neutral-500 uppercase tracking-wider mb-1">
              <span>{product.subcategory || product.category}</span>
              <div className="flex items-center space-x-1 text-amber-500">
                <Star className="w-3 h-3 fill-amber-400" />
                <span className="text-neutral-700 font-semibold">{product.rating}</span>
              </div>
            </div>

            <Link href={`/product/${product.slug}`} className="block group-hover:text-[#D9234B] transition-colors">
              <h3 className="font-serif font-semibold text-sm text-neutral-900 line-clamp-1 mb-1">
                {product.name}
              </h3>
            </Link>

            <p className="text-xs text-neutral-500 line-clamp-1 mb-3">{product.fabric}</p>
          </div>

          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
            <div>
              <span className="font-serif text-base font-bold text-neutral-900">
                ₹{displayPrice.toLocaleString('en-IN')}
              </span>
              {isWholesaleUser ? (
                <span className="block text-[10px] text-emerald-700 font-semibold">
                  MOQ: {product.moq || 20} pcs
                </span>
              ) : (
                <span className="text-xs text-neutral-400 line-through ml-2">
                  ₹{Math.round(displayPrice * 1.25).toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="text-xs font-bold text-[#D9234B] hover:text-[#9E1B32] uppercase tracking-wider underline underline-offset-4"
            >
              {addedSuccess ? 'Added!' : '+ Cart'}
            </button>
          </div>
        </div>
      </div>

      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={product}
      />
    </>
  );
};
