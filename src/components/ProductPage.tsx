"use client";

import { useState } from "react";
import Image from "next/image";
import { useStore } from "@/lib/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Star,
  Minus,
  Plus,
  Check,
  ShoppingCart,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductReviews from "@/components/ProductReviews";
import RelatedProducts from "@/components/RelatedProducts";

// Mock product data
const product = {
  id: "1",
  name: "Organic Cotton Baby Onesie",
  price: 29.99,
  rating: 4.8,
  reviewCount: 124,
  description:
    "Our premium organic cotton onesie provides ultimate comfort for your newborn. Made with 100% GOTS certified organic cotton, it's gentle on your baby's sensitive skin and perfect for everyday wear.",
  features: [
    "100% GOTS certified organic cotton",
    "Snap closures for easy diaper changes",
    "Expandable shoulders for easy dressing",
    "Reinforced seams for durability",
    "Free from harmful chemicals and dyes",
  ],
  specifications: {
    Material: "100% Organic Cotton",
    Weight: "150g",
    "Age Range": "0-12 months",
    "Available Sizes": "Newborn, 0-3m, 3-6m, 6-9m, 9-12m",
    "Care Instructions": "Machine wash cold, tumble dry low",
  },
  images: [
    "/baby-onesie-main.png",
    "/baby-onesie-back.png",
    "/baby-onesie-detail.png",
  ],
  colors: ["White", "Beige", "Sage", "Lavender"],
  sizes: ["Newborn", "0-3m", "3-6m", "6-9m", "9-12m"],
  inStock: true,
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState("0-3m");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      },
      quantity
    );
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-dm-sans">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold font-dm-sans">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <Separator />

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Color: <span className="font-bold">{selectedColor}</span>
            </h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? "default" : "outline"}
                  className={`h-10 px-4 rounded-full ${
                    selectedColor === color ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Size: <span className="font-bold">{selectedSize}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className={`h-10 px-4 ${
                    selectedSize === size ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQuantity}
                className="h-8 w-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>

            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Shipping Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <Card className="p-3 flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <div className="text-xs">
                <p className="font-medium">Free Shipping</p>
                <p className="text-muted-foreground">On orders over $50</p>
              </div>
            </Card>
            <Card className="p-3 flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-primary" />
              <div className="text-xs">
                <p className="font-medium">Easy Returns</p>
                <p className="text-muted-foreground">30 day return policy</p>
              </div>
            </Card>
            <Card className="p-3 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <div className="text-xs">
                <p className="font-medium">Secure Checkout</p>
                <p className="text-muted-foreground">SSL Encrypted</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="features">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            <TabsTrigger
              value="features"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
            >
              Reviews ({product.reviewCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="pt-6">
            <div className="flex flex-col justify-between gap-8 sm:flex-col md:flex-row">
              <div>
                <h3 className="text-xl font-bold mb-4 font-dm-sans">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Image
                  src="/baby-onesie-detail.png"
                  alt="Baby wearing organic onesie"
                  width={450}
                  height={450}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="pt-6">
            <h3 className="text-xl font-bold mb-4 font-dm-sans">
              Product Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="pt-6">
            <ProductReviews
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 font-dm-sans">
          You May Also Like
        </h2>
        <RelatedProducts />
      </div>
    </div>
  );
}
