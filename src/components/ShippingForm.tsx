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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ShippingFormProps {
  form: UseFormReturn<any>;
}

const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "UK", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
];

const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export default function ShippingForm({ form }: ShippingFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="shipping.firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              First Name
            </FormLabel>
            <FormControl>
              <Input
                placeholder="John"
                {...field}
                className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11"
              />
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Last Name
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Doe"
                {...field}
                className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11"
              />
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Email
            </FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="john.doe@example.com"
                {...field}
                className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11"
              />
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Phone
            </FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="(123) 456-7890"
                {...field}
                className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11"
              />
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.address"
        render={({ field }) => (
          <FormItem className="md:col-span-2">
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Address
            </FormLabel>
            <FormControl>
              <Input
                placeholder="123 Main St"
                {...field}
                className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11"
              />
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.city"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              City
            </FormLabel>
            <FormControl>
              <Input
                placeholder="New York"
                {...field}
                className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11"
              />
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.state"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              State
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus:ring-[#FF6B35] rounded-lg h-11">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7]">
                {US_STATES.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.zipCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Zip Code
            </FormLabel>
            <FormControl>
              <Input
                placeholder="10001"
                {...field}
                className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus-visible:ring-[#FF6B35] rounded-lg h-11"
              />
            </FormControl>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shipping.country"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFF8E7] font-medium mb-1.5 block">
              Country
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7] focus:ring-[#FF6B35] rounded-lg h-11">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-[#4E342E] border-[#6E7F80]/30 text-[#FFF8E7]">
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage className="text-[#FF6B35]" />
          </FormItem>
        )}
      />
    </div>
  );
}
