"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Restaurant, Review } from "@prisma/client";
import { Map } from "lucide-react";
import { useRouter } from "next/navigation";
import ReviewCount from "../reviews/ReviewCount";

import { motion } from "framer-motion";
import { fadeIn } from "../motion/variants";
import ShowRating from "../reviews/ShowRating";

interface ReviewProps {
  data: Restaurant & {
    reviews: Review[];
  };
  reviewsCount: number;
  averageRating: number;
}

const RestaurtantItem = ({
  data,
  reviewsCount,
  averageRating,
}: ReviewProps) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/restaurant/${id}`);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView={"show"}>
      <motion.div
        variants={fadeIn("down")}
        className="bg-component border shadow-sm rounded-xl transition 
         dark:border-gray-800 mb-5 p-4 col-span-2"
      >
        <div className="flex flex-col">
          <div className="flex justify-between gap-3">
            <h1
              className="text-xl md:text-2xl group-hover:text-slate-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200 cursor-pointer"
              onClick={() => handleClick(data.id)}
            >
              {data.name}
            </h1>
            <ShowRating averageRating={averageRating} />
          </div>
          <ReviewCount restaurantId={data.id} reviewCount={reviewsCount} />
          <div className="flex mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-100">
              {data.description}
            </p>
          </div>
          <div className="flex items-center justify-start gap-2 mt-4">
            <Map size={20} />
            <p className="text-md text-slate-600 dark:text-gray-200">
              {data.location}
            </p>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {data.tags.map((tag: string, index: number) => (
              <Badge className="uppercase cursor-pointer" key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RestaurtantItem;
