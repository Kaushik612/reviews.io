"use client";
import React from "react";

interface RatingProps {
  items: number[];
  rating: number;
  handleRatingChange: (rating: number) => void;
}

import classNames from "classnames";

const Rating = ({ items, rating, handleRatingChange }: RatingProps) => {
  return (
    <div className="flex flex-row-reverse cursor-pointer">
      {[...items].map((star) => {
        return (
          <svg
            key={star}
            className={classNames(
              "cursor-pointer text-gray-200",
              "flex-1 hover:text-yellow-400",
              "peer",
              "peer-hover:text-yellow-400",
              star >= rating ? "text-yellow-500" : ""
            )}
            width="23"
            height="23"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => handleRatingChange(star)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
