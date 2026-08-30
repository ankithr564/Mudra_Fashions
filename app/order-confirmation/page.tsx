'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CheckCircle2, ShoppingBag, FileText, ArrowRight, Truck } from 'lucide-react';

export default function OrderConfirmationPage() {
  const [orderNum, setOrderNum] = useState<string>('MF-2026-8891');

  useEffect(() => {
    setOrderNum(`MF-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20 pt-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <ScrollReveal direction="up">
          <div className="p-8 md:p-12 bg-neutral-50 border border-neutral-200 shadow-2xl space-y-6">
            <div className="w-20 h-20 bg-rose-50 text-[#D9234B] rounded-full flex items-center justify-center mx-auto border-2 border-rose-200">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D9234B]">Order Placed Successfully</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
                Thank You for Choosing Mudra Fashions
              </h1>
              <p className="text-xs text-neutral-500 mt-1">
                Your order confirmation and official GST tax invoice details have been generated.
              </p>
            </div>

            <div className="p-4 bg-white border border-neutral-200 text-xs space-y-2 text-left">
              <div className="flex justify-between border-b border-neutral-100 pb-2">
                <span className="text-neutral-500">Order Reference ID:</span>
                <span className="font-bold text-neutral-900">{orderNum}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-2">
                <span className="text-neutral-500">Payment Status:</span>
                <span className="font-bold text-emerald-700 uppercase">Paid / Confirmed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated Dispatch:</span>
                <span className="font-bold text-neutral-900">Within 24 Hours</span>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="py-4 space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Fulfillment Timeline:</span>
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
                <div className="p-2 bg-emerald-100 text-emerald-800 border border-emerald-300">Order Confirmed</div>
                <div className="p-2 bg-rose-100 text-[#D9234B] border border-rose-300">Tailoring / Packing</div>
                <div className="p-2 bg-neutral-100 text-neutral-500">Freight Shipped</div>
                <div className="p-2 bg-neutral-100 text-neutral-500">Delivered</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/account"
                className="px-6 py-3 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Track Order in Account</span>
              </Link>
              <Link
                href="/shop"
                className="px-6 py-3 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9E1B32] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
