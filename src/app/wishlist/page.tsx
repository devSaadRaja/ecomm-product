"use client";

import { useEffect, useState } from "react";
import { useWishlistStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import EmptyWishlist from "@/components/EmptyWishlist";
import WishlistActions from "@/components/wishlist-actions";
import type { WishlistItem } from "@/types";

export default function WishlistPage() {
  const { items } = useWishlistStore();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // This effect is needed because of hydration
  useEffect(() => {
    setWishlistItems(items);
    setIsLoading(false);
  }, [items]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6B35]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Wishlist</h1>
          <p className="text-[#FFF8E7]/70">
            {wishlistItems.length > 0
              ? `You have ${wishlistItems.length} item${
                  wishlistItems.length === 1 ? "" : "s"
                } in your wishlist`
              : "Start adding items to your wishlist"}
          </p>
        </div>

        <WishlistActions />
      </div>

      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <ProductCard
              key={item.id}
              product={{ ...item, reviewCount: 0 }}
              inWishlist={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
