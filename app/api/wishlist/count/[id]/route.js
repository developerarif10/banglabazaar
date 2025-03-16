import connectMongo from "@/database/connectMongo";
import { getWishlistCount } from "@/queries/user.queries";
import { NextResponse } from "next/server";

export const GET = async (_, { params: { id } }) => {
  await connectMongo();
  try {
    const wishlist = await getWishlistCount(id);
    return NextResponse.json(wishlist, { status: 200 });
  } catch (error) {
    throw error;
  }
};
