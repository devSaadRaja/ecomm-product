import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Order Confirmation | Tiny Treasures",
  description: "Your order has been confirmed",
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#4E342E] text-[#FFF8E7] py-12">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="bg-[#4E342E] border border-[#6E7F80]/30 rounded-xl overflow-hidden shadow-lg">
          <CardHeader className="flex flex-col items-center pt-8 pb-6 px-6">
            <div className="w-16 h-16 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-[#FF6B35]" />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-[#FF6B35] font-dmSans">
              Order Confirmed!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center px-6 pb-6 space-y-6">
            <p className="text-[#FFF8E7]/90 font-openSans">
              Thank you for your purchase. We've received your order and will
              process it right away.
            </p>
            <div className="bg-[#6E7F80]/10 p-4 rounded-lg border border-[#6E7F80]/30">
              <p className="text-[#FF6B35] font-medium font-dmSans text-lg mb-1">
                Order #TT-12345
              </p>
              <p className="text-[#FFF8E7]/80 text-sm font-openSans">
                A confirmation email has been sent to your email address.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-[#FFF8E7]/90 font-openSans">
                <Package className="h-5 w-5 text-[#FF6B35]" />
                <span>Your items will be shipped within 1-2 business days</span>
              </div>
              <p className="text-[#FFF8E7]/70 text-sm">
                Estimated delivery: 3-5 business days
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3 px-6 pb-8">
            <Button
              asChild
              className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#FFF8E7] font-dmSans rounded-lg py-3 h-12"
            >
              <Link href="/account/orders">Track Order</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-[#6E7F80]/30 text-[#FFF8E7] hover:bg-[#6E7F80]/10 font-dmSans rounded-lg py-3 h-12"
            >
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
