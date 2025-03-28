"use server";

import connectMongo from "@/database/connectMongo";
import { UserModel } from "@/models/user-model";

export const addProductToWishlist = async (userId, product) => {
  await connectMongo();

  const user = await UserModel.findById(userId);

  if (!user) {
    return {
      msg: "User not found",
    };
  } else {
    // check if product exists in users wishlist already
    const isProductInWishlist = user.wishlist.some((wishlistProduct) => {
      return wishlistProduct._id.toString() === product._id.toString();
    });

    if (isProductInWishlist) {
      // if product already exists in wishlist, remove it using $pull

      user.wishlist = user.wishlist.filter(
        (wProducts) => wProducts._id.toString() !== product._id.toString()
      );

      await user.save();
      return user.toObject();
    } else {
      // if product does not exist in wishlist, add it using $push
      const update = await UserModel.findOneAndUpdate(
        { _id: userId },
        { $push: { wishlist: product } },
        { new: true }
      );
      return update.toObject();
    }
  }
};

export const removeProductFromWishlist = async (userId, productId) => {
  await connectMongo();

  const user = await UserModel.findById(userId);

  if (!user) {
    return {
      msg: "User not found",
    };
  } else {
    const index = user.wishlist.findIndex(
      (wishlistProduct) => wishlistProduct._id.toString() === productId
    );

    if (index === -1) {
      return {
        msg: "Product not found in wishlist",
      };
    } else {
      user.wishlist.splice(index, 1);

      await user.save();

      return user.toObject();
    }
  }
};
