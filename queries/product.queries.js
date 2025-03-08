import connectMongo from "@/database/connectMongo";
import { ProductModel } from "@/models/product-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

export const getAllProducts = async () => {
  await connectMongo();

  try {
    const products = await ProductModel.find().lean();

    return replaceMongoIdInArray(products);
  } catch (error) {
    throw error;
  }
};
