"use client";

import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { ShoppingBag, CreditCard } from "lucide-react";
import Link from "next/link";

export default function CartSummary() {
  const { cart, subtotal, totalItems } = useStore();

  // Calculate shipping (free over $50)
  const shippingCost = subtotal >= 50 ? 0 : 5.99;

  // Calculate tax (8.25%)
  const taxRate = 0.0825;
  const taxAmount = subtotal * taxRate;

  // Calculate total
  const total = subtotal + shippingCost + taxAmount;

  return (
    <div className="bg-[#4E342E]/40 rounded-lg p-6 sticky top-4">
      <h2 className="text-xl font-bold mb-4 font-dm-sans text-[#FFF8E7]">
        Order Summary
      </h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-[#FFF8E7] font-open-sans">
          <span>Subtotal ({totalItems} items)</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between text-[#FFF8E7] font-open-sans">
          <span>Shipping</span>
          <span>
            {shippingCost === 0 ? "Free" : formatCurrency(shippingCost)}
          </span>
        </div>

        <div className="flex justify-between text-[#FFF8E7] font-open-sans">
          <span>Tax (8.25%)</span>
          <span>{formatCurrency(taxAmount)}</span>
        </div>

        {subtotal < 50 && (
          <div className="text-[#FF6B35] text-sm mt-2 font-open-sans">
            Add {formatCurrency(50 - subtotal)} more to qualify for free
            shipping!
          </div>
        )}

        <div className="border-t border-[#6E7F80]/30 pt-3 mt-3">
          <div className="flex justify-between font-bold text-[#FFF8E7]">
            <span className="font-dm-sans">Total</span>
            <span className="text-[#FF6B35] font-dm-sans">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </div>

      <Link href="/checkout">
        <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#FFF8E7] mb-3">
          <CreditCard className="mr-2 h-4 w-4" />
          Proceed to Checkout
        </Button>
      </Link>

      <Link href="/products">
        <Button
          variant="outline"
          className="w-full border-[#6E7F80] text-[#FFF8E7] hover:bg-[#4E342E]/60"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>
      </Link>

      <div className="mt-6 text-xs text-[#6E7F80] font-open-sans">
        <p className="mb-2">We accept:</p>
        <div className="flex gap-2">
          <div className="h-6 w-10 bg-[#6E7F80]/20 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="1" y="1" width="22" height="14" rx="2" />
              <path d="M1 5h22" />
            </svg>
          </div>
          <div className="h-6 w-10 bg-[#6E7F80]/20 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
            >
              <circle cx="7" cy="8" r="4" fill="#FF6B35" fillOpacity="0.7" />
              <circle cx="17" cy="8" r="4" fill="#FFF8E7" fillOpacity="0.7" />
            </svg>
          </div>
          <div className="h-6 w-10 bg-[#6E7F80]/20 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M22 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12V4C23 3.44772 22.5523 3 22 3Z"
                stroke="#FFF8E7"
                strokeOpacity="0.7"
              />
              <path
                d="M14 8L18 8"
                stroke="#FFF8E7"
                strokeOpacity="0.7"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 8L10 8"
                stroke="#FFF8E7"
                strokeOpacity="0.7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="h-6 w-10 bg-[#6E7F80]/20 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M12 3L1 8L12 13L23 8L12 3Z"
                stroke="#FFF8E7"
                strokeOpacity="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
