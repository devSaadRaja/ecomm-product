"use client";

import Link from "next/link";
import { BabyIcon } from "@/components/BabyIcon";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { cart } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
            className={`text-sm font-medium transition-colors font-sans ${
              pathname === "/" ? "text-[#FF6B35]" : "hover:text-[#FF6B35]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`text-sm font-medium transition-colors font-sans ${
              pathname === "/products"
                ? "text-[#FF6B35]"
                : "hover:text-[#FF6B35]"
            }`}
          >
            Products
          </Link>
          <Link
            href="/history"
            className={`text-sm font-medium transition-colors font-sans ${
              pathname === "/history"
                ? "text-[#FF6B35]"
                : "hover:text-[#FF6B35]"
            }`}
          >
            Order History
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/wishlist"
            className="relative hidden sm:flex items-center justify-center rounded-full w-9 h-9 bg-[#6E7F80]/10 hover:bg-[#6E7F80]/20 transition-colors"
          >
            <Heart className="h-5 w-5 text-[#FFF8E7]" />
            <span className="sr-only">Wishlist</span>
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#FF6B35] rounded-full">
              1
            </span>
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center justify-center rounded-full w-9 h-9 bg-[#6E7F80]/10 hover:bg-[#6E7F80]/20 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-[#FFF8E7]" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#FF6B35] rounded-full">
                {cartItemsCount > 20 ? "20+" : cartItemsCount}
              </span>
            )}
          </Link>
          <Button
            variant="outline"
            className="hidden md:flex border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-[#FFF8E7]"
          >
            Sign In
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center rounded-full w-9 h-9 bg-[#6E7F80]/10 hover:bg-[#6E7F80]/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[#FFF8E7]" />
            ) : (
              <Menu className="h-5 w-5 text-[#FFF8E7]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-[#4E342E] border-b border-[#6E7F80]/20 py-4">
          <div className="container flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors font-sans px-2 py-2 ${
                pathname === "/" ? "text-[#FF6B35]" : "hover:text-[#FF6B35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors font-sans px-2 py-2 ${
                pathname === "/products"
                  ? "text-[#FF6B35]"
                  : "hover:text-[#FF6B35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/history"
              className={`text-sm font-medium transition-colors font-sans px-2 py-2 ${
                pathname === "/history"
                  ? "text-[#FF6B35]"
                  : "hover:text-[#FF6B35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Order History
            </Link>
            <Link
              href="/wishlist"
              className={`text-sm font-medium transition-colors font-sans px-2 py-2 flex items-center gap-2 ${
                pathname === "/wishlist"
                  ? "text-[#FF6B35]"
                  : "hover:text-[#FF6B35]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="h-4 w-4" />
              Wishlist
            </Link>
            <Button
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-[#FFF8E7] w-full justify-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
