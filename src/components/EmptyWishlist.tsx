import Link from "next/link";
import { Heart } from "lucide-react";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="bg-[#6E7F80]/20 p-6 rounded-full mb-6">
        <Heart className="w-16 h-16 text-[#FF6B35]" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
      <p className="text-[#FFF8E7]/70 max-w-md mb-8">
        Save your favorite baby items to your wishlist so you can easily find
        them later.
      </p>
      <Link href="/categories" className="btn-primary">
        Browse Products
      </Link>
    </div>
  );
}
