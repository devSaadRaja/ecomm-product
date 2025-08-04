"use client";

import { useState } from "react";
import { Share2, Trash2, ShoppingCart } from "lucide-react";
import { useWishlistStore, useStore } from "@/lib/store";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function WishlistActions() {
  const { items, clearWishlist } = useWishlistStore();
  const { addToCart } = useStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddAllToCart = () => {
    items.forEach((item) => {
      addToCart(item, 1);
    });

    toast.success(`${items.length} items have been added to your cart`);
  };

  const handleClearWishlist = () => {
    clearWishlist();
    setIsDialogOpen(false);

    toast.success("All items have been removed from your wishlist");
  };

  const handleShareWishlist = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Baby Bliss Wishlist",
          text: "Check out my wishlist on Baby Bliss!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast.success("Wishlist link copied to clipboard");
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={handleAddAllToCart}
        className="btn-primary flex items-center gap-2"
      >
        <ShoppingCart className="w-4 h-4" />
        Add All to Cart
      </button>

      <button
        onClick={handleShareWishlist}
        className="btn-secondary flex items-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        Share Wishlist
      </button>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger asChild>
          <button className="btn-secondary flex items-center gap-2 text-[#FF6B35] border-[#FF6B35]">
            <Trash2 className="w-4 h-4" />
            Clear Wishlist
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#4E342E] border border-[#6E7F80]/30">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#FFF8E7]">
              Clear wishlist?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#FFF8E7]/70">
              This will remove all items from your wishlist. This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent border border-[#6E7F80] text-[#FFF8E7]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleClearWishlist}
              className="bg-[#FF6B35] text-[#FFF8E7] hover:opacity-90"
            >
              Clear
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
