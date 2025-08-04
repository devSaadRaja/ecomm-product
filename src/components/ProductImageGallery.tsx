"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleZoomToggle = () => {
    setIsZoomOpen(!isZoomOpen);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZooming) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="relative aspect-square overflow-hidden rounded-lg border bg-background"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
      >
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`${productName} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          style={
            isZooming
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  transform: "scale(1.5)",
                  transition: "transform 0.1s ease-out",
                }
              : {}
          }
        />

        <div className="absolute inset-0 flex items-center justify-between p-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full opacity-70 hover:opacity-100"
            onClick={handlePrevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full opacity-70 hover:opacity-100"
            onClick={handleNextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-2 right-2 h-8 w-8 rounded-full opacity-70 hover:opacity-100"
          onClick={handleZoomToggle}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
              index === currentImageIndex ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Zoom Dialog */}
      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${productName} - Zoomed Image`}
              fill
              className="object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={() => setIsZoomOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center gap-4 p-4">
            <Button variant="outline" size="icon" onClick={handlePrevImage}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="flex items-center">
              {currentImageIndex + 1} / {images.length}
            </span>
            <Button variant="outline" size="icon" onClick={handleNextImage}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
