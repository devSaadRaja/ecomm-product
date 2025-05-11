"use client";

import { useStore } from "@/lib/store";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartContent() {
  const { cart, totalItems } = useStore();

  if (totalItems === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ShoppingBag className="h-16 w-16 mb-4 text-[#FF6B35]" />
        <h2 className="text-2xl font-bold mb-2 font-dm-sans text-[#FFF8E7]">
          Your cart is empty
        </h2>
        <p className="text-[#6E7F80] mb-8 max-w-md font-open-sans">
          Looks like you haven't added any baby essentials to your cart yet.
        </p>
        <Link href="/products">
          <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#FFF8E7]">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-[#4E342E]/40 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 font-dm-sans text-[#FFF8E7]">
            Cart Items ({totalItems})
          </h2>
          <div className="space-y-6">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <CartSummary />
      </div>
    </div>
  );
}
