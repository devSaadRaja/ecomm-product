"use client";

import Link from "next/link";
import { BabyIcon } from "@/components/BabyIcon";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Badge } from "lucide-react";
import { useStore } from "@/lib/store";

export default function Header() {
  const { cart } = useStore();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#6E7F80]/20 bg-[#4E342E] backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <BabyIcon.Rattle className="w-8 h-8 text-[#FF6B35]" />
          </div>
          <span className="text-xl font-bold font-heading text-[#FF6B35]">
            BabyBliss
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-[#FF6B35] transition-colors font-sans"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-[#FF6B35] transition-colors font-sans"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-[#FF6B35] transition-colors font-sans"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-[#FF6B35] transition-colors font-sans"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/wishlist"
            className="hidden sm:flex items-center justify-center rounded-full w-9 h-9 bg-[#6E7F80]/10 hover:bg-[#6E7F80]/20 transition-colors"
          >
            <Heart className="h-5 w-5 text-[#FFF8E7]" />
            <span className="sr-only">Wishlist</span>
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center justify-center rounded-full w-9 h-9 bg-[#6E7F80]/10 hover:bg-[#6E7F80]/20 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-[#FFF8E7]" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#FF6B35] rounded-full">
                {cartItemsCount > 20 ? '20+' : cartItemsCount}
              </span>
            )}
          </Link>
          <Button
            variant="outline"
            className="hidden md:flex border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-[#FFF8E7]"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
