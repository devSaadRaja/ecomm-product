import CartContent from "@/components/CartContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Baby Essentials",
  description: "View and manage your shopping cart items",
};

export default function CartPage() {
  return (
    <div className="container mx-auto py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 font-dm-sans text-[#FFF8E7]">
        Shopping Cart
      </h1>
      <CartContent />
    </div>
  );
}
