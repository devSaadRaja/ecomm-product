import Link from "next/link";
import { BabyIcon } from "@/components/BabyIcon";
import { Twitter, Instagram, Facebook } from "lucide-react";
import BabyPattern from "./BabyPattern";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#6E7F80]/20 bg-[#4E342E] relative overflow-hidden">
      <BabyPattern className="absolute inset-0 opacity-5" />
      <div className="container py-12 md:py-16 relative">
        <div className="absolute top-10 right-10 animate-float">
          <BabyIcon.Star className="w-6 h-6 text-[#FF6B35]/20" />
        </div>
        <div className="absolute bottom-10 left-10 animate-float-delay">
          <BabyIcon.Moon className="w-8 h-8 text-[#FF6B35]/20" />
        </div>

        {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"> */}
        <div className="flex flex-col justify-between gap-8 sm:flex-col md:flex-row">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <BabyIcon.Rattle className="w-8 h-8 text-[#FF6B35]" />
              </div>
              <span className="text-xl font-bold font-heading text-[#FF6B35]">
                BabyBliss
              </span>
            </Link>
            <p className="text-sm text-[#FFF8E7]/80 font-sans">
              Premium newborn essentials designed with love for your baby's
              comfort and your peace of mind.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#6E7F80]/10 flex items-center justify-center hover:bg-[#FF6B35]/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-[#FFF8E7]" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#6E7F80]/10 flex items-center justify-center hover:bg-[#FF6B35]/20 transition-colors"
              >
                <Instagram className="h-4 w-4 text-[#FFF8E7]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#6E7F80]/10 flex items-center justify-center hover:bg-[#FF6B35]/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-[#FFF8E7]" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] font-heading">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/clothing"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="/products/blankets"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Blankets & Swaddles
                </Link>
              </li>
              <li>
                <Link
                  href="/products/toys"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Toys
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] font-heading">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] font-heading">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-[#FFF8E7]/80 hover:text-[#FF6B35] transition-colors font-sans"
                >
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[#6E7F80]/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#FFF8E7]/60 font-sans">
            &copy; {new Date().getFullYear()} BabyBliss. All rights reserved.
          </p>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            {[
              { name: "Visa", icon: "visa-icon.png" },
              { name: "Mastercard", icon: "mastercard-icon.png" },
              { name: "PayPal", icon: "paypal-icon.png" },
              { name: "Apple Pay", icon: "apple-pay-icon.png" },
            ].map((payment, i) => (
              <div
                key={i}
                className="h-8 w-12 bg-white rounded-md flex items-center justify-center p-1 overflow-hidden"
              >
                <Image
                  src={`/${payment.icon}`}
                  alt={`${payment.name} payment method`}
                  width={40}
                  height={24}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
