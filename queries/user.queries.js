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

export const getWishlistCount = async (userId) => {
  try {
    await connectMongo();

    const result = await UserModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(userId) } },
      { $project: { wishlistCount: { $size: "$wishlist" } } },
    ]);

    if (result.length > 0) {
      return result[0].wishlistCount;
    } else {
      return 0;
    }
  } catch (error) {
    throw error;
  }
};

export const getCurrentUserWishlist = async (userId, limit = 10) => {
  try {
    await connectMongo();
    const { wishlist } = await UserModel.findById(userId).select({
      wishlist: { $slice: limit },
    });
    if (!wishlist) {
      return { msg: "No user found" };
    }
    return wishlist;
  } catch (error) {
    throw error;
  }
};
