"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp, Flag } from "lucide-react";

// Mock review data
const mockReviews = [
  {
    id: "1",
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40&query=woman%20avatar",
    rating: 5,
    date: "2023-10-15",
    title: "Perfect for my newborn!",
    content:
      "This onesie is incredibly soft and comfortable for my baby. The organic cotton feels premium and I love that it's free from harmful chemicals. The snaps make diaper changes so much easier. Highly recommend!",
    helpful: 24,
    images: [
      "/placeholder.svg?height=100&width=100&query=baby%20wearing%20onesie%201",
    ],
  },
  {
    id: "2",
    author: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40&query=man%20avatar",
    rating: 4,
    date: "2023-09-28",
    title: "Great quality but runs small",
    content:
      "The quality of this onesie is excellent. The material is soft and seems durable after multiple washes. My only complaint is that it runs a bit small. I would recommend sizing up if you're unsure.",
    helpful: 18,
    images: [],
  },
  {
    id: "3",
    author: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40&query=woman%20avatar%202",
    rating: 5,
    date: "2023-11-02",
    title: "Best onesie we've purchased",
    content:
      "After trying several brands, this is by far the best onesie we've purchased for our baby. The organic cotton is incredibly soft, and the construction is top-notch. The expandable shoulders make it easy to put on and take off. Will definitely be ordering more!",
    helpful: 32,
    images: [
      "/placeholder.svg?height=100&width=100&query=baby%20wearing%20onesie%202",
      "/placeholder.svg?height=100&width=100&query=baby%20wearing%20onesie%203",
    ],
  },
];

interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
}

export default function ProductReviews({
  rating,
  reviewCount,
}: ProductReviewsProps) {
  const [reviews, setReviews] = useState(mockReviews);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: "",
    content: "",
  });
  const [helpfulClicked, setHelpfulClicked] = useState<Record<string, boolean>>(
    {}
  );

  const handleRatingChange = (value: number) => {
    setNewReview({ ...newReview, rating: value });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    alert(
      "Review submitted! In a real app, this would be saved to the database."
    );
    setNewReview({ rating: 5, title: "", content: "" });
  };

  const handleHelpfulClick = (reviewId: string) => {
    if (helpfulClicked[reviewId]) return;

    setReviews(
      reviews.map((review) =>
        review.id === reviewId
          ? { ...review, helpful: review.helpful + 1 }
          : review
      )
    );

    setHelpfulClicked({ ...helpfulClicked, [reviewId]: true });
  };

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach((review) => {
    ratingCounts[review.rating - 1]++;
  });

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border shadow-sm">
          <div className="text-5xl font-bold text-primary">{rating}</div>
          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating)
                    ? "fill-orange text-orange"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Based on {reviewCount} reviews
          </div>
        </div>

        <div className="space-y-3 p-6 bg-card rounded-lg border shadow-sm">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = ratingCounts[stars - 1];
            const percentage =
              reviewCount > 0 ? (count / reviewCount) * 100 : 0;

            return (
              <div key={stars} className="flex items-center gap-2">
                <div className="flex items-center w-16">
                  <span className="font-medium">{stars}</span>
                  <Star className="w-4 h-4 ml-1 fill-orange text-orange" />
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-orange h-2.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="w-10 text-xs text-right font-medium">{count}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Write a Review */}
      <Card className="border shadow-sm">
        <CardHeader className="bg-card/50">
          <CardTitle>Write a Review</CardTitle>
          <CardDescription>
            Share your experience with this product
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitReview}>
          <CardContent className="space-y-4 pt-6">
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleRatingChange(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        value <= newReview.rating
                          ? "fill-orange text-orange"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Review Title
              </label>
              <input
                id="title"
                name="title"
                value={newReview.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange bg-background"
                placeholder="Summarize your experience"
                required
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium mb-2"
              >
                Review
              </label>
              <Textarea
                id="content"
                name="content"
                value={newReview.content}
                onChange={handleInputChange}
                className="min-h-[100px] focus:ring-orange"
                placeholder="Share your experience with this product"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="bg-card/50">
            <Button type="submit" className="bg-orange hover:bg-orange/80 text-white">Submit Review</Button>
          </CardFooter>
        </form>
      </Card>

      {/* Customer Reviews */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold font-dm-sans">Customer Reviews</h3>

        {reviews.map((review) => (
          <Card key={review.id} className="overflow-hidden border shadow-sm">
            <CardHeader className="pb-2 bg-card/50">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.author}
                    />
                    <AvatarFallback className="bg-orange text-orange">{review.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{review.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-orange text-orange"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-base mt-2">{review.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm">{review.content}</p>

              {review.images.length > 0 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {review.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Review image ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between pt-2 bg-card/50">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs flex items-center gap-1 hover:text-orange hover:bg-orange/80"
                onClick={() => handleHelpfulClick(review.id)}
                disabled={helpfulClicked[review.id]}
              >
                <ThumbsUp className={`h-3 w-3 ${helpfulClicked[review.id] ? "fill-orange" : ""}`} />
                Helpful ({review.helpful})
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs flex items-center gap-1 hover:text-red-600 hover:bg-red-50"
              >
                <Flag className="h-3 w-3" />
                Report
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Button variant="outline" className="w-full border-orange text-orange hover:bg-orange">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
}
