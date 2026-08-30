'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    tax,
    shipping,
    total,
    totalItemsCount,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="w-screen max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col justify-between border-l border-neutral-200"
          >
            {/* Header */}
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#D9234B]" />
                <h3 className="font-serif text-lg font-bold text-neutral-900">
                  Shopping Bag ({totalItemsCount})
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-neutral-800 text-lg">Your bag is empty</h4>
                  <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                    Explore our premium men&apos;s collection, uniforms, and fabrics to add items to your cart.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block px-6 py-2.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 p-3 border border-neutral-200 bg-white relative group"
                  >
                    <div className="relative w-20 h-24 bg-neutral-100 flex-shrink-0 border border-neutral-200">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-xs font-bold text-neutral-900 line-clamp-1 pr-4">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-neutral-400 hover:text-[#D9234B] transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5 space-x-2">
                          <span>Size: <strong className="text-neutral-800">{item.size}</strong></span>
                          <span>•</span>
                          <span>Color: <strong className="text-neutral-800">{item.color}</strong></span>
                        </div>
                        {item.isWholesale && (
                          <span className="inline-block px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[9px] font-bold uppercase tracking-wider mt-1">
                            B2B Bulk Price
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-neutral-300 text-xs font-bold">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-serif font-bold text-sm text-neutral-900">
                          ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-neutral-200 bg-neutral-50 space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-neutral-900">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Estimated Tax (5% GST)</span>
                    <span className="font-semibold text-neutral-900">₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? <strong className="text-emerald-700 uppercase">FREE</strong> : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-serif font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                    <span>Grand Total</span>
                    <span className="text-[#D9234B]">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    href="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="py-3 px-3 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider text-center hover:bg-neutral-800 transition-colors"
                  >
                    View Bag
                  </Link>
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="py-3 px-3 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center space-x-1 hover:bg-[#9E1B32] transition-colors"
                  >
                    <span>Checkout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-1 text-[10px] text-neutral-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Secure 256-Bit SSL Encrypted Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
