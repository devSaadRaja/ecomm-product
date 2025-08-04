"use client";

import type React from "react";

import { useStore } from "@/lib/store";
import type { CartItem as CartItemType } from "@/lib/store";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useStore();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number.parseInt(e.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) {
      setQuantity(1);
      updateQuantity(item.product.id, 1);
    } else {
      setQuantity(newQuantity);
      updateQuantity(item.product.id, newQuantity);
    }
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(item.product.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(item.product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-[#6E7F80]/30">
      <div className="relative h-24 w-24 rounded-md overflow-hidden bg-[#6E7F80]/20 flex-shrink-0">
        <Image
          src={item.product.image || "/placeholder.svg"}
          alt={item.product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium mb-1 truncate font-dm-sans text-[#FFF8E7]">
          {item.product.name}
        </h3>
        <p className="text-sm text-[#6E7F80] mb-2 font-open-sans">
          {item.category}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center border border-[#6E7F80]/30 rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#FF6B35] hover:text-[#FF6B35]/80 hover:bg-[#4E342E]/60"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 text-center bg-transparent border-x border-[#6E7F80]/30 h-8 text-[#FFF8E7] font-open-sans"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#FF6B35] hover:text-[#FF6B35]/80 hover:bg-[#4E342E]/60"
              onClick={handleIncrement}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-[#FF6B35] hover:text-[#FF6B35]/80 hover:bg-[#4E342E]/60 p-0"
            onClick={handleRemove}
          >
            <Trash2 className="h-4 w-4 mr-1" />
            <span className="text-xs font-open-sans">Remove</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 mt-2 sm:mt-0">
        <span className="text-lg font-bold text-[#FF6B35] font-dm-sans">
          {formatCurrency(item.product.price)}
        </span>
        {quantity > 1 && (
          <span className="text-xs text-[#6E7F80] font-open-sans">
            {formatCurrency(item.product.price)} each
          </span>
        )}
      </div>
    </div>
  );
}
