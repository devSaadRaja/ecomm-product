import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BabyIcon } from "@/components/BabyIcon";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviewCount: number;
    badge?: string;
  };
  inWishlist?: boolean;
}

export default function ProductCard({
  product,
  inWishlist = false,
}: ProductCardProps) {
  const { id, name, price, image, rating, reviewCount, badge } = product;

  return (
    <div className="group relative overflow-hidden rounded-[20px] bg-[#4E342E] border-2 border-[#6E7F80]/20 hover:border-[#FF6B35]/30 transition-all hover:shadow-lg hover:shadow-[#FF6B35]/5">
      <Link
        href={`/products/${id}`}
        className="relative block aspect-square overflow-hidden rounded-t-[18px]"
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-[#FF6B35] px-3 py-1 rounded-full transform -rotate-6">
            <p className="text-xs font-bold text-[#FFF8E7]">{badge}</p>
          </div>
        )}
        <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#4E342E]/80 text-[#FFF8E7] opacity-0 transition-opacity hover:text-[#FF6B35] group-hover:opacity-100">
          <Heart className={`h-4 w-4 ${inWishlist ? "fill-[#FF6B35]" : ""}`} />
          <span className="sr-only">
            {inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          </span>
        </button>
        <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <BabyIcon.Blocks className="w-10 h-10 text-[#FF6B35] transform rotate-12" />
        </div>
      </Link>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium text-[#FFF8E7] font-heading">{name}</h3>
          <div className="px-2 py-1 bg-[#FF6B35]/10 rounded-full">
            <p className="font-bold text-[#FF6B35] text-sm">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="mb-4 flex items-center text-[#FFF8E7]/80">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < Math.floor(rating) ? "#FF6B35" : "none"}
                stroke="#FF6B35"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-xs">({reviewCount})</span>
        </div>
        <Button
          className="w-full bg-[#FF6B35] text-[#FFF8E7] hover:bg-[#FF6B35]/90 font-sans rounded-full"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
