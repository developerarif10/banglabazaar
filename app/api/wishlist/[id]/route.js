import connectMongo from "@/database/connectMongo";
import { getCurrentUserWishlist } from "@/queries/user.queries";
import { NextResponse } from "next/server";

export const GET = async (request, { params: { id } }) => {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  await connectMongo();
  try {
    const wishlist = await getCurrentUserWishlist(id, Number(limit));
    return NextResponse.json(wishlist, { status: 200 });
  } catch (error) {
    throw error;
  }
};
