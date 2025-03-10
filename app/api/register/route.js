import connectMongo from "@/database/connectMongo";
import { UserModel } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectMongo();

    const { name, email, password, accountType } = await request.json();

    if (!name || !password || !email) {
      return new NextResponse("Authentication info is missing.", {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      accountType,
    };

    const isUserAlreadyInDB = await UserModel.findOne({ email });

    // show a message if user is already registered
    if (isUserAlreadyInDB) {
      return new NextResponse(
        `An account with email -> ${email} already exists`,
        {
          status: 200,
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
    } else {
      await UserModel.create(newUser);
      return new NextResponse(`User ${name} has been created`, {
        status: 201,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
