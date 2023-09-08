import prisma from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

interface IParams {
  restaurantId?: string;
}

export async function PATCH(req: Request, { params }: { params: IParams }) {
  const user = await currentUser();
  if (!user) return NextResponse.error();
  try {
    const { restaurantId } = params;
    if (!restaurantId || typeof restaurantId !== "string") {
      throw new Error("Invalid restaurant Id");
    }

    const body = await req.json();

    const { text, rating } = body;
    const updatedRating = 5 - rating + 1;
    const review = await prisma.review.create({
      data: {
        text,
        rating: updatedRating,
        userId: user.id,
        userName: user.firstName || "",
        restaurantId,
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.log("[FETCH_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
