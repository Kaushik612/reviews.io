import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name, description, location, tags } = body;

    if (!name || !description || !location) {
      return new NextResponse("Required fields are missing", { status: 400 });
    }

    const { label } = location;

    const existingRestaurant = await prisma.restaurant.findFirst({
      where: {
        name: name,
      },
    });

    if (existingRestaurant) {
      return new NextResponse("Restaurant already exists!", { status: 400 });
    }

    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        description,
        location: label,
        tags,
        userId: user.id,
        userName: user.firstName || "",
      },
    });
    return NextResponse.json(restaurant);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
