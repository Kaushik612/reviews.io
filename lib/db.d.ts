import { Restaurtant, Review, Vote } from "@prisma/client";

export type ExtendedReview = Review & {
  votes: Vote[];
};

export type ExtendedRestaurant = Restaurtant & {
  reviews: ExtendedReview[];
};
