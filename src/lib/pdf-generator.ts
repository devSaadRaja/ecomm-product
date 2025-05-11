"use client";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import type { Order } from "@/types";
import { formatDate, formatCurrency } from "@/lib/utils";

export const generatePDF = async (order: Order) => {
  // Create a new PDF document
  const doc = new jsPDF();

  // Set document properties
  doc.setProperties({
    title: `Invoice #${order.orderNumber}`,
    subject: "Order Invoice",
    author: "Baby Bliss Store",
    creator: "Baby Bliss Store",
  });

  // Add logo and header
  doc.setFontSize(22);
  doc.setTextColor(255, 107, 53); // #FF6B35
  doc.text("Baby Bliss", 14, 20);

  doc.setFontSize(14);
  doc.setTextColor(110, 127, 128); // #6E7F80
  doc.text("INVOICE", 14, 30);

  // Add invoice details
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);

  doc.text(`Invoice #: ${order.orderNumber}`, 14, 40);
  doc.text(`Date: ${formatDate(order.date)}`, 14, 45);
  doc.text(`Status: ${order.status}`, 14, 50);

  // Add customer information
  doc.text("Bill To:", 14, 60);
  doc.setFont(undefined, "bold");
  doc.text(order.shippingAddress.name, 14, 65);
  doc.setFont(undefined, "normal");
  doc.text(order.shippingAddress.street, 14, 70);
  doc.text(
    `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}`,
    14,
    75
  );
  doc.text(order.shippingAddress.country, 14, 80);

  // Add payment method
  doc.text("Payment Method:", 120, 60);
  doc.setFont(undefined, "bold");
  doc.text(order.paymentMethod, 120, 65);
  doc.setFont(undefined, "normal");
  if (order.paymentMethod.includes("Card")) {
    doc.text(`Card ending in ${order.paymentDetails.cardLast4}`, 120, 70);
  }

  // Create table for order items
  const tableColumn = ["Item", "Qty", "Price", "Total"];
  const tableRows = order.items.map((item) => [
    item.name,
    item.quantity.toString(),
    formatCurrency(item.price),
    formatCurrency(item.price * item.quantity),
  ]);

  autoTable(doc, {
    startY: 90,
    head: [tableColumn],
    body: tableRows,
    theme: "striped",
    headStyles: {
      fillColor: [255, 107, 53], // #FF6B35
      textColor: [255, 248, 231], // #FFF8E7
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [78, 52, 46], // #4E342E with opacity | , 0.1
    },
    styles: {
      fontSize: 9,
    },
  });

  // Add order summary
  const finalY = (doc as any).lastAutoTable.finalY + 10;

  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.text("Order Summary", 120, finalY);
  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.text(`Subtotal: ${formatCurrency(order.subtotal)}`, 120, finalY + 7);
  doc.text(`Shipping: ${formatCurrency(order.shipping)}`, 120, finalY + 14);
  doc.text(`Tax: ${formatCurrency(order.tax)}`, 120, finalY + 21);

  doc.setFontSize(12);
  doc.setFont(undefined, "bold");
  doc.setTextColor(255, 107, 53); // #FF6B35
  doc.text(`Total: ${formatCurrency(order.total)}`, 120, finalY + 32);

  // Add footer
  doc.setFontSize(10);
  doc.setFont(undefined, "normal");
  doc.setTextColor(110, 127, 128); // #6E7F80
  doc.text("Thank you for your purchase!", 14, finalY + 40);
  doc.text(
    "For any questions, please contact customer support at support@babybliss.com",
    14,
    finalY + 47
  );

  // Add decorative element
  doc.setDrawColor(255, 107, 53); // #FF6B35
  doc.setLineWidth(0.5);
  doc.line(14, finalY + 52, 196, finalY + 52);

  // Save the PDF
  doc.save(`invoice-${order.orderNumber}.pdf`);
};
