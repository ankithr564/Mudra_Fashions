'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useRole } from '@/context/RoleContext';
import { SizeChartModal } from '@/components/size-guide/SizeChartModal';
import { X, Star, Heart, ShoppingBag, Ruler, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { role } = useRole();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [added, setAdded] = useState(false);

  if (!isOpen) return null;

  const isWholesaleUser = role === 'wholesale_approved';
  const unitPrice = isWholesaleUser && product.wholesalePrice ? product.wholesalePrice : product.price;
  const isFav = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity, unitPrice, isWholesaleUser);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white text-neutral-900 w-full max-w-4xl overflow-hidden shadow-2xl relative border border-neutral-200"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-neutral-500 hover:text-neutral-900 bg-white/80 backdrop-blur-sm hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Gallery */}
              <div className="p-6 bg-neutral-50 flex flex-col justify-between">
                <div className="relative aspect-[3/4] w-full mb-4 overflow-hidden border border-neutral-200">
                  <Image
                    src={product.images[selectedImage] || product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto pb-1">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-16 h-20 flex-shrink-0 border-2 ${
                          selectedImage === idx ? 'border-[#D9234B]' : 'border-transparent'
                        }`}
                      >
                        <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Product Details */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D9234B] font-bold">
                    {product.subcategory}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-1 mb-2">
                    {product.name}
                  </h2>

                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center text-amber-500 space-x-1">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="text-xs font-bold text-neutral-800">{product.rating}</span>
                    </div>
                    <span className="text-xs text-neutral-400">({product.reviewsCount} reviews)</span>
                  </div>

                  <div className="mb-4">
                    <span className="font-serif text-2xl font-bold text-neutral-900">
                      ₹{unitPrice.toLocaleString('en-IN')}
                    </span>
                    {isWholesaleUser ? (
                      <span className="ml-2 text-xs font-bold text-emerald-700">
                        (Wholesale MOQ: {product.moq || 20} Pcs)
                      </span>
                    ) : (
                      <span className="ml-2 text-sm text-neutral-400 line-through">
                        ₹{Math.round(unitPrice * 1.25).toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Colors */}
                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Color: <span className="text-neutral-900">{selectedColor}</span>
                    </label>
                    <div className="flex space-x-2">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-7 h-7 rounded-full border-2 transition-all ${
                            selectedColor === c.name ? 'border-neutral-900 scale-110' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sizes & Size Guide */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Size:
                      </label>
                      <button
                        onClick={() => setIsSizeGuideOpen(true)}
                        className="flex items-center space-x-1 text-xs font-semibold text-[#D9234B] hover:underline"
                      >
                        <Ruler className="w-3.5 h-3.5" />
                        <span>View Size Chart</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 text-xs font-bold border transition-all ${
                            selectedSize === sz
                              ? 'border-neutral-900 bg-neutral-900 text-white'
                              : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-neutral-200">
                  <div className="flex space-x-3">
                    <div className="flex items-center border border-neutral-300">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 text-xs font-bold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="flex-1 py-3 px-4 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-[#9E1B32] transition-colors"
                    >
                      {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                      <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
                    </button>

                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`p-3 border transition-colors ${
                        isFav
                          ? 'border-rose-200 bg-rose-50 text-[#D9234B]'
                          : 'border-neutral-300 text-neutral-600 hover:border-neutral-900'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isFav ? 'fill-[#D9234B]' : ''}`} />
                    </button>
                  </div>

                  <Link
                    href={`/product/${product.slug}`}
                    onClick={onClose}
                    className="block text-center text-xs font-semibold text-neutral-600 hover:text-neutral-900 underline"
                  >
                    View Full Product Details & Specifications →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      <SizeChartModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        chartType={product.sizeChartType}
      />
    </>
  );
};
