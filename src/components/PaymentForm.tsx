"use client";

import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreditCard, Calendar, User, Lock } from "lucide-react";

interface PaymentFormProps {
  form: UseFormReturn<any>;
}

export default function PaymentForm({ form }: PaymentFormProps) {
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  // Format expiry date (MM/YY)
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }

    return value;
  };

  return (
    <div className="mt-6 space-y-4">
      <FormField
        control={form.control}
        name="payment.cardNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Card Number
            </FormLabel>
            <FormControl>
              <div className="relative">
                <CreditCard
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6E7F80]"
                  size={18}
                />
                <Input
                  placeholder="4242 4242 4242 4242"
                  {...field}
                  value={formatCardNumber(field.value || "")}
                  onChange={(e) => {
                    const formattedValue = formatCardNumber(e.target.value);
                    field.onChange(formattedValue);
                  }}
                  maxLength={19}
                  className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11 pl-10"
                />
              </div>
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="payment.cardName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Name on Card
            </FormLabel>
            <FormControl>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6E7F80]"
                  size={18}
                />
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11 pl-10"
                />
              </div>
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="payment.expiryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
                Expiry Date
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6E7F80]"
                    size={18}
                  />
                  <Input
                    placeholder="MM/YY"
                    {...field}
                    value={formatExpiryDate(field.value || "")}
                    onChange={(e) => {
                      const formattedValue = formatExpiryDate(e.target.value);
                      field.onChange(formattedValue);
                    }}
                    maxLength={5}
                    className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11 pl-10"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-[#FF6B35]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="payment.cvv"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
                CVV
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6E7F80]"
                    size={18}
                  />
                  <Input
                    type="password"
                    placeholder="123"
                    {...field}
                    maxLength={4}
                    className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11 pl-10"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-[#FF6B35]" />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
