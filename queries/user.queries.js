import connectMongo from "@/database/connectMongo";
import { UserModel } from "@/models/user-model";

export async function getUserByEmail(email) {
  try {
    await connectMongo();

    const user = await UserModel.findOne({ email }).lean();

    if (!user) {
      return {
        status: false,
      };
    } else {
      return {
        status: true,
      };
    }
  } catch (error) {
    throw error;
  }
}
