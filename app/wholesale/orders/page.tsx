'use client';

import React from 'react';
import Link from 'next/link';
import { MOCK_ORDERS } from '@/data/customers';

export default function WholesaleOrdersPage() {
  const orders = MOCK_ORDERS.filter((o) => o.type === 'wholesale');

  return (
    <div className="bg-white min-h-screen pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#D9234B]">B2B Logistics</span>
            <h1 className="font-serif text-3xl font-bold text-neutral-900 mt-1">Wholesale Orders &amp; Dispatch History</h1>
          </div>
          <Link href="/wholesale/dashboard" className="text-xs font-bold text-neutral-600 hover:text-neutral-900 underline">
            ← Back to Dashboard
          </Link>
        </div>

        <div className="border border-neutral-200 bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-900 font-serif uppercase tracking-wider border-b border-neutral-200">
                <th className="p-3">Order ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">Shipping Address</th>
                <th className="p-3">Total Amount</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((ord) => (
                <tr key={ord.id} className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 font-bold text-neutral-900">{ord.orderNumber}</td>
                  <td className="p-3 text-neutral-600">{ord.createdAt}</td>
                  <td className="p-3 text-neutral-700 max-w-xs truncate">{ord.shippingAddress}</td>
                  <td className="p-3 font-bold text-neutral-900">₹{ord.totalAmount.toLocaleString('en-IN')}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                      {ord.paymentStatus}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase">
                      {ord.orderStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
