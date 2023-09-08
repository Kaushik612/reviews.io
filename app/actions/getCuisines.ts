import { Restaurant } from "@prisma/client";

export default function getCuisines(restaurants: Restaurant[]) {
  const distinctTags = restaurants
    .map((restaurant) => restaurant.tags) // Extract tags arrays
    .reduce((accumulator, tags) => {
      tags.forEach((tag) => {
        if (!accumulator.includes(tag)) {
          accumulator.push(tag);
        }
      });
      return accumulator;
    }, []);

  return distinctTags;
}
