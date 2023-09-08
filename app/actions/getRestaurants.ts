import { ExtendedRestaurant } from "@/lib/db";
import prisma from "@/lib/prismadb";
import { PrismaPromise } from "@prisma/client";

export default async function getRestaurants(name: string, page: number) {
  const RESTAURANTS_PER_PAGE = 24;

  const query: any = {
    take: RESTAURANTS_PER_PAGE,
    skip: RESTAURANTS_PER_PAGE * (page - 1),
    where: {
      name: {
        contains: name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      reviews: true,
    },
  };

  try {
    const prismaPromises: [
      PrismaPromise<ExtendedRestaurant[]>,
      PrismaPromise<number>
    ] = [
      prisma.restaurant.findMany(query),
      prisma.restaurant.count({ where: query.where }),
    ];
    const [restaurants, count] = await prisma.$transaction(prismaPromises);

    const extendedRestaurant = restaurants.map((restaurant) => ({
      ...restaurant,
      votes: restaurant.reviews,
    }));

    return { extendedRestaurant, count };
  } catch (error: any) {
    throw new Error(error);
  }
}
