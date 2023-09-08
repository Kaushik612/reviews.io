import prisma from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

interface IParams {
  reviewId?: string;
}

export async function PATCH(req: Request, { params }: { params: IParams }) {
  const user = await currentUser();
  if (!user) return NextResponse.error();
  try {
    const { reviewId } = params;
    if (!reviewId || typeof reviewId !== "string") {
      throw new Error("Invalid Review Id");
    }

    const body = await req.json();

    const { userId, type } = body;

    //check if user already has a vote for this comment
    const existingVote = await prisma.vote.findFirst({
      where: {
        reviewId: reviewId,
        userId,
      },
    });

    if (existingVote) {
      //delete vote if type is the same
      if (existingVote.type === type) {
        await prisma.vote.delete({
          where: {
            userId_reviewId: {
              reviewId: reviewId,
              userId: userId,
            },
          },
        });
        return NextResponse.json("OK");
      }

      //if vote is different then update the vote
      await prisma.vote.update({
        where: {
          userId_reviewId: {
            reviewId: reviewId,
            userId: userId,
          },
        },
        data: {
          type: type,
        },
      });
      return NextResponse.json("OK");
    }

    //if no existing vote then create a new vote
    await prisma.vote.create({
      data: {
        type: type,
        userId: userId,
        userName: user.firstName || "",
        reviewId: reviewId,
      },
    });

    return NextResponse.json("OK");
  } catch (error) {
    console.log("[VOTE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
