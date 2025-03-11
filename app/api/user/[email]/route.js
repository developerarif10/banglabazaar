import connectMongo from "@/database/connectMongo";
import { getUserByEmail } from "@/queries/user.queries";
import { NextResponse } from "next/server";

export const GET = async (_, { params: { email } }) => {
  await connectMongo();
  try {
    const { status } = await getUserByEmail(email);
    return NextResponse.json(status, { status: 200 });
  } catch (error) {
    throw error;
  }
};
