"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ShippingForm from "@/components/ShippingForm";
import PaymentForm from "@/components/PaymentForm";

const formSchema = z.object({
  shippingMethod: z.enum(["standard", "express"]),
  paymentMethod: z.enum(["card", "paypal"]),
  // Shipping fields will be nested
  shipping: z.object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    address: z
      .string()
      .min(5, { message: "Address must be at least 5 characters" }),
    city: z.string().min(2, { message: "City must be at least 2 characters" }),
    state: z.string().min(2, { message: "Please select a state" }),
    zipCode: z.string().min(5, { message: "Please enter a valid zip code" }),
    country: z.string().min(2, { message: "Please select a country" }),
  }),
  // Payment fields will be conditionally validated based on payment method
  payment: z
    .object({
      cardNumber: z.string().optional(),
      cardName: z.string().optional(),
      expiryDate: z.string().optional(),
      cvv: z.string().optional(),
    })
    .refine((data) => {
      // We'll validate these fields in the component based on selected payment method
      return true;
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shippingMethod: "standard",
      paymentMethod: "card",
      shipping: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "US",
      },
      payment: {
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
      },
    },
  });

  const paymentMethod = form.watch("paymentMethod");

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", data);

      // Redirect to confirmation page
      router.push("/checkout/confirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className="bg-[#4E342E] border border-[#6E7F80]/30 rounded-xl overflow-hidden shadow-lg">
          <CardHeader className="bg-[#4E342E] border-b border-[#6E7F80]/30 px-6 py-4">
            <CardTitle className="text-xl font-dmSans text-[#FF6B35]">
              Shipping Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ShippingForm form={form} />
          </CardContent>
        </Card>

        <Card className="bg-[#4E342E] border border-[#6E7F80]/30 rounded-xl overflow-hidden shadow-lg">
          <CardHeader className="bg-[#4E342E] border-b border-[#6E7F80]/30 px-6 py-4">
            <CardTitle className="text-xl font-dmSans text-[#FF6B35]">
              Shipping Method
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <FormField
              control={form.control}
              name="shippingMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-3"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border border-[#6E7F80]/30 p-4">
                        <FormControl>
                          <RadioGroupItem
                            value="standard"
                            className="border-[#FF6B35]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-[#FFF8E7] cursor-pointer flex-1">
                          <div className="font-medium">Standard Shipping</div>
                          <div className="text-sm text-[#FFF8E7]/70">
                            3-5 business days
                          </div>
                        </FormLabel>
                        <div className="text-[#FF6B35] font-medium">Free</div>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border border-[#6E7F80]/30 p-4">
                        <FormControl>
                          <RadioGroupItem
                            value="express"
                            className="border-[#FF6B35]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-[#FFF8E7] cursor-pointer flex-1">
                          <div className="font-medium">Express Shipping</div>
                          <div className="text-sm text-[#FFF8E7]/70">
                            1-2 business days
                          </div>
                        </FormLabel>
                        <div className="text-[#FF6B35] font-medium">$12.99</div>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="bg-[#4E342E] border border-[#6E7F80]/30 rounded-xl overflow-hidden shadow-lg">
          <CardHeader className="bg-[#4E342E] border-b border-[#6E7F80]/30 px-6 py-4">
            <CardTitle className="text-xl font-dmSans text-[#FF6B35]">
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-3"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border border-[#6E7F80]/30 p-4">
                        <FormControl>
                          <RadioGroupItem
                            value="card"
                            className="border-[#FF6B35]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-[#FFF8E7] cursor-pointer">
                          Credit / Debit Card
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border border-[#6E7F80]/30 p-4">
                        <FormControl>
                          <RadioGroupItem
                            value="paypal"
                            className="border-[#FF6B35]"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-[#FFF8E7] cursor-pointer">
                          PayPal
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {paymentMethod === "card" && <PaymentForm form={form} />}

            {paymentMethod === "paypal" && (
              <div className="mt-6 p-4 bg-[#6E7F80]/10 rounded-lg border border-[#6E7F80]/30">
                <p className="text-[#FFF8E7]/80 font-openSans text-sm">
                  You will be redirected to PayPal to complete your payment
                  after reviewing your order.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#FFF8E7] font-dmSans rounded-lg py-3 text-lg flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Complete Order
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
