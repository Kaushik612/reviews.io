"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LikeCommentButton from "./LikeCommentButton";
import { ExtendedReview } from "@/lib/db";

interface ReviewProps {
  review: ExtendedReview;
  userId: string | null;
}

const Review = ({ review, userId }: ReviewProps) => {
  return (
    <article className="p-6 mb-6 text-base bg-componentSecondary rounded-lg mt-10">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="ml-2">{review.userName}</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time>{review.createdAt.toString()}</time>
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{review.text}</p>
      {userId && (
        <div className="flex items-center mt-4 space-x-4">
          <LikeCommentButton
            reviewId={review.id}
            userId={userId}
            votes={review.votes}
          />
        </div>
      )}
    </article>
  );
};

export default Review;
