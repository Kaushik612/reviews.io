"use client";
import Link from "next/link";
import React from "react";

interface IProps {
  reviewCount: number;
  restaurantId: string;
}

const ReviewCount = ({ reviewCount, restaurantId }: IProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-1">
      <div className="flex gap-2 ml-1 mt-2">
        <Link
          href={`/restaurant/${restaurantId}`}
          className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >
          <span className="mr-2">{reviewCount}</span>
          <span className="">reviews</span>
        </Link>
      </div>
    </div>
  );
};

export default ReviewCount;
