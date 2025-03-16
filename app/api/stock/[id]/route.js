import connectMongo from "@/database/connectMongo";
import { getSingleProduct } from "@/queries/product.queries";

import { NextResponse } from "next/server";

export const GET = async (_, { params: { id } }) => {
  await connectMongo();
  try {
    const product = await getSingleProduct(id);
    return NextResponse.json({ stock: product.stock_count }, { status: 200 });
  } catch (error) {
    throw error;
  }
};
