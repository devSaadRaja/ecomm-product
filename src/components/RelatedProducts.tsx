"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useStore } from "@/lib/store";

// Mock related products
const relatedProducts = [
  {
    id: "2",
    name: "Baby Swaddle Blanket Set",
    price: 34.99,
    rating: 4.7,
    reviewCount: 89,
    image:
      "/soft-baby-blanket.png",
    isNew: true,
  },
  {
    id: "3",
    name: "Organic Cotton Swaddle",
    price: 12.99,
    rating: 4.5,
    reviewCount: 56,
    image: "/organic-cotton-swaddle.png",
    isNew: false,
  },
  {
    id: "4",
    name: "Organic Cotton Onesie",
    price: 9.99,
    rating: 4.3,
    reviewCount: 42,
    image: "/organic-cotton-onesie.png",
    isNew: false,
  },
  {
    id: "5",
    name: "Organic Baby Socks Pack",
    price: 14.99,
    rating: 4.6,
    reviewCount: 78,
    image: "/placeholder.png",
    isNew: true,
  },
  {
    id: "6",
    name: "Baby Teething Toy",
    price: 15.99,
    rating: 4.8,
    reviewCount: 112,
    image: "/wooden-baby-teether.png",
    isNew: false,
  },
];

export default function RelatedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useStore();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Approximate card width + gap

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      1
    );
  };

  return (
    <div className="relative">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {relatedProducts.map((product) => (
          <Card
            key={product.id}
            className="min-w-[250px] max-w-[250px] flex-shrink-0 snap-start"
          >
            <CardContent className="p-0">
              <div className="relative">
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Link>
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-primary">
                    New
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <Link
                  href={`/products/${product.id}`}
                  className="hover:underline"
                >
                  <h3 className="font-medium line-clamp-2 h-12">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-1 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviewCount})
                  </span>
                </div>

                <div className="mt-2 font-bold">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
