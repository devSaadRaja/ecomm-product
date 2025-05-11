import type { Metadata } from "next";
import CheckoutForm from "@/components/CheckoutForm";
import OrderSummary from "@/components/CartSummary";

export const metadata: Metadata = {
  title: "Checkout | Tiny Treasures",
  description: "Complete your purchase of newborn baby items",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#4E342E] text-[#FFF8E7]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold font-dmSans mb-2 text-[#FF6B35] text-center">
          Checkout
        </h1>
        <p className="text-center mb-8 text-[#FFF8E7]/80 font-openSans">
          Complete your order to receive your newborn essentials
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
