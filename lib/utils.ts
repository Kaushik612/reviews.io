import { Review } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateRatings(reviews: Review[]) {
  const totalCount = reviews.length;
  const totalSum = reviews.reduce((acc: any, review: any) => {
    return acc + review.rating;
  }, 0);
  const averageRating = totalCount === 0 ? 0 : totalSum / totalCount;
  return averageRating;
}
