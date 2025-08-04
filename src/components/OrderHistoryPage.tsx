"use client";

import { useState, useEffect } from "react";
import {
  Download,
  ChevronDown,
  ChevronUp,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Search,
  Filter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { generatePDF } from "@/lib/pdf-generator";
import { formatDate, formatCurrency } from "@/lib/utils";
import type { Order } from "@/types";
import { mockOrders } from "@/lib/mock-data";
import { FilterSummary } from "@/components/FilterSummary";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(mockOrders);
  const [expandedOrderIds, setExpandedOrderIds] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<
    "newest" | "oldest" | "highest" | "lowest"
  >("newest");

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrderIds((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleDownloadInvoice = async (order: Order) => {
    await generatePDF(order);
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "processing":
        return <Package className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "shipped":
        return "bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20";
      case "processing":
        return "bg-[#6E7F80]/10 text-white/70 border-[#6E7F80]/20";
      default:
        return "bg-[#6E7F80]/10 text-white/70 border-[#6E7F80]/20";
    }
  };

  const availableStatuses = Array.from(
    new Set(orders.map((order) => order.status))
  );

  const toggleFilter = (status: string) => {
    setActiveFilters((prev) => {
      if (prev.includes(status)) {
        return prev.filter((s) => s !== status);
      } else {
        return [...prev, status];
      }
    });
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchQuery("");
  };

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Filter and sort orders
  useEffect(() => {
    let result = [...orders];

    // Apply status filters
    if (activeFilters.length > 0) {
      result = result.filter((order) => activeFilters.includes(order.status));
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (order) =>
          order.orderNumber.toLowerCase().includes(query) ||
          order.items.some((item) => item.name.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortOrder) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "highest":
          return b.total - a.total;
        case "lowest":
          return a.total - b.total;
        default:
          return 0;
      }
    });

    setFilteredOrders(result);
  }, [orders, activeFilters, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-[#4E342E] text-[#FFF8E7]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 font-dm-sans text-[#FFF8E7]">
            Order History
          </h1>
          <p className="mb-6 font-open-sans">
            View and manage your past orders
          </p>

          <div className="flex flex-col space-y-4 mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/70" />
              </div>
              <Input
                type="text"
                placeholder="Search orders..."
                className="pl-10 bg-[#3A2723] border-[#6E7F80]/30 text-[#FFF8E7] placeholder:text-white/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center mr-2">
                  <Filter className="h-4 w-4 text-white/70 mr-2" />
                  <span className="text-sm text-white/70">Filter by:</span>
                </div>

                {availableStatuses.map((status) => (
                  <Badge
                    key={status}
                    className={`cursor-pointer px-3 py-1 ${
                      activeFilters.includes(status)
                        ? "bg-[#FF6B35] text-[#FFF8E7]"
                        : "bg-[#3A2723] text-white/70 hover:bg-[#FF6B35]/10"
                    }`}
                    onClick={() => toggleFilter(status)}
                  >
                    {getStatusIcon(status)}
                    <span className="ml-1">{status}</span>
                  </Badge>
                ))}
              </div>

              <div className="flex items-center">
                <span className="text-sm text-white/70 mr-2">Sort by:</span>
                <select
                  className="bg-[#3A2723] text-[#FFF8E7] border border-[#6E7F80]/30 rounded-md text-sm p-1"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="highest">Highest amount</option>
                  <option value="lowest">Lowest amount</option>
                </select>
              </div>
            </div>

            {(activeFilters.length > 0 || searchQuery) && (
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-[#FF6B35] hover:bg-transparent mt-2 p-0 h-auto"
                onClick={clearFilters}
              >
                <X className="h-4 w-4 mr-1" />
                Clear all filters
              </Button>
            )}

            <FilterSummary
              activeFilters={activeFilters}
              searchQuery={searchQuery}
              onRemoveFilter={removeFilter}
              onClearSearch={clearSearch}
            />
            {filteredOrders.length > 0 && (
              <div className="mb-4 text-sm text-white/70">
                Showing {filteredOrders.length}{" "}
                {filteredOrders.length === 1 ? "order" : "orders"}
                {(activeFilters.length > 0 || searchQuery) &&
                  " matching your filters"}
              </div>
            )}
          </div>
        </div>

        {filteredOrders.length === 0 &&
        (activeFilters.length > 0 || searchQuery) ? (
          <Card className="bg-[#3A2723] border-[#6E7F80]/20 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="rounded-full bg-[#FF6B35]/10 p-4 mb-4">
                <Filter className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <h2 className="text-xl font-medium mb-2 text-[#FFF8E7] font-dm-sans">
                No matching orders
              </h2>
              <p className="text-white/60 mb-6 max-w-md text-center">
                No orders match your current filters. Try adjusting your search
                or filters.
              </p>
              <Button
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#FFF8E7]"
                onClick={clearFilters}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        ) : filteredOrders.length === 0 ? (
          <Card className="bg-[#3A2723] border-[#6E7F80]/20 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="rounded-full bg-[#FF6B35]/10 p-4 mb-4">
                <Package className="h-8 w-8 text-[#FF6B35]" />
              </div>
              <h2 className="text-xl font-medium mb-2 text-[#FFF8E7] font-dm-sans">
                No orders yet
              </h2>
              <p className="text-white/60 mb-6 max-w-md text-center">
                When you place orders, they will appear here
              </p>
              <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#FFF8E7]">
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <Card
                key={order.id}
                className={`bg-[#3A2723] border-[#6E7F80]/20 shadow-lg overflow-hidden transition-all duration-200 ${
                  expandedOrderIds.includes(order.id)
                    ? "ring-1 ring-[#FF6B35]/30"
                    : ""
                }`}
              >
                <CardContent className="p-0">
                  <div
                    className="p-6 cursor-pointer hover:bg-[#362420] transition-colors duration-200"
                    onClick={() => toggleOrderExpansion(order.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#FF6B35]/10 p-3 hidden sm:flex">
                          <Package className="h-6 w-6 text-[#FF6B35]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-medium text-[#FFF8E7] font-dm-sans text-lg">
                              Order #{order.orderNumber}
                            </h3>
                            <Badge
                              className={`${getStatusColor(
                                order.status
                              )} flex items-center gap-1 px-2 py-1 rounded-full text-xs`}
                            >
                              {getStatusIcon(order.status)}
                              <span className="ml-1">{order.status}</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-white/70 font-open-sans mb-2">
                            {formatDate(order.date)}
                          </p>
                          <p className="text-sm text-white/70 font-open-sans">
                            {order.items.length} item
                            {order.items.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium text-[#FFF8E7] text-lg">
                            {formatCurrency(order.total)}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-[#FF6B35] hover:bg-[#FF6B35]/10 hover:text-[#FF6B35]"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleOrderExpansion(order.id);
                          }}
                        >
                          {expandedOrderIds.includes(order.id) ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {expandedOrderIds.includes(order.id) && (
                    <div className="px-6 pb-6 pt-0 bg-[#362420]">
                      <Separator className="my-4 bg-[#6E7F80]/10" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-medium mb-4 text-[#FFF8E7] font-dm-sans text-base">
                            Items
                          </h4>
                          <ul className="space-y-4">
                            {order.items.map((item) => (
                              <li
                                key={item.id}
                                className="flex items-start gap-4 bg-[#3A2723] p-3 rounded-lg"
                              >
                                <div className="h-20 w-20 rounded-md overflow-hidden bg-[#4E342E] flex-shrink-0">
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-[#FFF8E7] font-open-sans mb-1">
                                    {item.name}
                                  </p>
                                  <div className="flex justify-between text-sm text-white/70">
                                    <p>Qty: {item.quantity}</p>
                                    <p className="font-medium text-[#FF6B35]">
                                      {formatCurrency(item.price)}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="bg-[#3A2723] p-4 rounded-lg mb-6">
                            <h4 className="font-medium mb-3 text-[#FFF8E7] font-dm-sans text-base">
                              Shipping Address
                            </h4>
                            <address className="not-italic text-[#FFF8E7] font-open-sans text-sm">
                              <p className="font-medium">
                                {order.shippingAddress.name}
                              </p>
                              <p className="text-white/60 mt-1">
                                {order.shippingAddress.street}
                              </p>
                              <p className="text-white/60">
                                {order.shippingAddress.city},{" "}
                                {order.shippingAddress.state}{" "}
                                {order.shippingAddress.zip}
                              </p>
                              <p className="text-white/60">
                                {order.shippingAddress.country}
                              </p>
                            </address>
                          </div>

                          <div className="bg-[#3A2723] p-4 rounded-lg mb-6">
                            <h4 className="font-medium mb-3 text-[#FFF8E7] font-dm-sans text-base">
                              Payment Information
                            </h4>
                            <p className="text-[#FFF8E7] font-open-sans font-medium text-sm">
                              {order.paymentMethod}
                            </p>
                            {order.paymentMethod.includes("Card") && (
                              <p className="text-white/60 text-sm">
                                ending in {order.paymentDetails.cardLast4}
                              </p>
                            )}
                          </div>

                          <div className="bg-[#3A2723] p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-[#FFF8E7] font-dm-sans text-base">
                              Order Summary
                            </h4>
                            <div className="space-y-2 text-[#FFF8E7] font-open-sans text-sm">
                              <div className="flex justify-between">
                                <p className="text-white/60">Subtotal</p>
                                <p>{formatCurrency(order.subtotal)}</p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-white/60">Shipping</p>
                                <p>{formatCurrency(order.shipping)}</p>
                              </div>
                              <div className="flex justify-between">
                                <p className="text-white/60">Tax</p>
                                <p>{formatCurrency(order.tax)}</p>
                              </div>
                              <Separator className="my-3 bg-[#6E7F80]/10" />
                              <div className="flex justify-between font-medium">
                                <p>Total</p>
                                <p className="text-[#FF6B35]">
                                  {formatCurrency(order.total)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <Button
                          className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-[#FFF8E7]"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownloadInvoice(order);
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Invoice
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
