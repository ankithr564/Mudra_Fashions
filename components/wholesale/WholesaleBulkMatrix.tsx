'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { AlertCircle, ShoppingBag, FileText, Check } from 'lucide-react';

interface WholesaleBulkMatrixProps {
  product: Product;
  onRequestQuote?: (summary: { totalQty: number; totalPrice: number; sizeQuantities: Record<string, number> }) => void;
}

export const WholesaleBulkMatrix: React.FC<WholesaleBulkMatrixProps> = ({
  product,
  onRequestQuote,
}) => {
  const { addBulkToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [sizeQuantities, setSizeQuantities] = useState<Record<string, number>>(
    product.sizes.reduce((acc, sz) => ({ ...acc, [sz]: 0 }), {})
  );

  const wholesaleUnitPrice = product.wholesalePrice || Math.round(product.price * 0.6);
  const moq = product.moq || 20;

  const handleQtyChange = (size: string, value: number) => {
    const qty = Math.max(0, isNaN(value) ? 0 : value);
    setSizeQuantities((prev) => ({ ...prev, [size]: qty }));
  };

  const totalQuantity = Object.values(sizeQuantities).reduce((acc, q) => acc + q, 0);
  const totalPrice = totalQuantity * wholesaleUnitPrice;
  const isMoqMet = totalQuantity >= moq;

  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAddBulkToCart = () => {
    if (!isMoqMet) return;
    addBulkToCart(product, selectedColor, sizeQuantities, wholesaleUnitPrice);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  return (
    <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-none space-y-5">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#D9234B] font-bold">
            B2B Wholesale Ordering Matrix
          </span>
          <h4 className="font-serif font-bold text-neutral-900 text-lg">
            Bulk Pricing: ₹{wholesaleUnitPrice.toLocaleString('en-IN')}{' '}
            <span className="text-xs font-normal text-neutral-500">/ piece</span>
          </h4>
        </div>
        <div className="text-right">
          <span className="inline-block px-2.5 py-1 bg-neutral-900 text-white text-[11px] font-bold uppercase tracking-wider">
            MOQ: {moq} Pcs
          </span>
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
          Select Bulk Color: <span className="text-neutral-900 font-bold">{selectedColor}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedColor(c.name)}
              className={`flex items-center space-x-2 px-3 py-1.5 text-xs font-medium border transition-all ${
                selectedColor === c.name
                  ? 'border-neutral-900 bg-white ring-1 ring-neutral-900 font-bold'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-600 hover:border-neutral-400'
              }`}
            >
              <span className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: c.hex }} />
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Size Quantities Table */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
          Enter Quantity Per Size:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {product.sizes.map((sz) => (
            <div key={sz} className="border border-neutral-200 bg-white p-2 text-center">
              <span className="block text-xs font-bold text-neutral-900 mb-1">{sz}</span>
              <div className="flex items-center justify-center space-x-1">
                <button
                  type="button"
                  onClick={() => handleQtyChange(sz, (sizeQuantities[sz] || 0) - 5)}
                  className="w-6 h-6 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold text-xs"
                >
                  -
                </button>
                <input
                  type="number"
                  min="0"
                  value={sizeQuantities[sz] || ''}
                  onChange={(e) => handleQtyChange(sz, parseInt(e.target.value) || 0)}
                  placeholder="0"
                  className="w-12 text-center text-xs font-semibold py-1 border border-neutral-300 focus:outline-none focus:border-[#D9234B]"
                />
                <button
                  type="button"
                  onClick={() => handleQtyChange(sz, (sizeQuantities[sz] || 0) + 5)}
                  className="w-6 h-6 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-bold text-xs"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOQ Warning / Order Summary */}
      <div className="p-3 bg-white border border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-neutral-500">Total Pieces Selected: </span>
          <span className={`font-bold text-sm ${isMoqMet ? 'text-emerald-700' : 'text-amber-600'}`}>
            {totalQuantity} pcs
          </span>
          {!isMoqMet && (
            <div className="flex items-center space-x-1 text-amber-600 mt-0.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Add {moq - totalQuantity} more pieces to meet MOQ requirement ({moq} pcs).</span>
            </div>
          )}
        </div>
        <div className="text-right">
          <span className="text-neutral-500">Estimated Total: </span>
          <span className="font-serif font-bold text-base text-neutral-900">
            ₹{totalPrice.toLocaleString('en-IN')}
          </span>
          <span className="block text-[10px] text-neutral-400">+ 5% GST & Shipping</span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <button
          onClick={handleAddBulkToCart}
          disabled={!isMoqMet}
          className={`flex items-center justify-center space-x-2 py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all ${
            isMoqMet
              ? 'bg-[#D9234B] text-white hover:bg-[#9E1B32] shadow-md'
              : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
          }`}
        >
          {addedSuccess ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added to Bulk Order!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bulk Cart</span>
            </>
          )}
        </button>

        <button
          onClick={() =>
            onRequestQuote &&
            onRequestQuote({
              totalQty: totalQuantity,
              totalPrice,
              sizeQuantities,
            })
          }
          className="flex items-center justify-center space-x-2 py-3 px-4 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>Request Custom Quote</span>
        </button>
      </div>
    </div>
  );
};
