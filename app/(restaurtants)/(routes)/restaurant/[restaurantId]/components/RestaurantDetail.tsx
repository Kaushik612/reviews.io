"use client";
import React from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Map } from "lucide-react";

import { ExtendedRestaurant, ExtendedReview } from "@/lib/db";
import { calculateRatings } from "@/lib/utils";

import { Separator } from "../../../../../../components/ui/separator";
import Review from "../../../../../../components/reviews/Review";
import { toast } from "../../../../../../components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../../components/ui/form";
import { Textarea } from "../../../../../../components/ui/textarea";
import Rating from "../../../../../../components/reviews/Rating";
import { Button } from "../../../../../../components/ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ReviewDetailProps {
  restaurant: ExtendedRestaurant | undefined;
  userId: string | null;
}

const RestaurantDetail = ({ restaurant, userId }: ReviewDetailProps) => {
  const averageRating = calculateRatings(restaurant.reviews);
  const router = useRouter();
  const formSchema = z.object({
    text: z
      .string()
      .min(50, { message: "Please enter at least 50 characters." }),
    rating: z
      .number()
      .min(1, { message: "Please select a rating between 1-5" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      rating: undefined,
    },
  });

  const { reset } = useForm();

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/restaurant/${restaurant.id}`, values);
      toast({
        description: "Review added",
        duration: 3000,
      });
      form.reset();
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "There was an error submitting your review",
        duration: 3000,
      });
    }
  };

  return (
    <div className="h-full mt-5 md:mt-10 px-4 md:px-0">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-bold">{restaurant?.name}</h1>
        <div className="flex items-center justify-center">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ml-2 text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
            {averageRating.toPrecision(2)}
          </p>
        </div>
      </div>
      <Separator className="bg-primary" />
      <div className="flex flex-col mt-10 mb-10 gap-3">
        <p className="text-lg font-semibold">{restaurant?.description}</p>
        <div className="flex items-center gap-2">
          <Map size={20} />
          <h4 className="text-xl">{restaurant?.location}</h4>
        </div>
      </div>

      <section className="bg-secondary py-8 rounded-md">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Reviews ({restaurant?.reviews.length})
            </h2>
          </div>
          {!userId ? (
            <Link href={"/sign-in"}>
              <Button variant={"default"}>Login to post your review</Button>
            </Link>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mb-6">
                <div className="flex mb-5">
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Rating
                            items={[1, 2, 3, 4, 5]}
                            rating={field.value}
                            handleRatingChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="py-2 px-4 mb-4 bg-component-secondary rounded-lg rounded-t-lg border border-gray-200  dark:border-gray-700">
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="hidden">Your Review</FormLabel>
                        <FormControl>
                          <Textarea
                            disabled={isLoading}
                            rows={6}
                            className="px-4 w-full text-lg text-gray-900 border-none outline-none dark:text-white dark:placeholder-gray-400 bg-secondary placeholder:text-lg"
                            placeholder="Write a comment..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-secondary bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post my Review
                </button>
              </form>
            </Form>
          )}
          {restaurant?.reviews?.map((review: ExtendedReview, index: number) => (
            <Review key={review.id} review={review} userId={userId} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
