import connectMongo from "@/database/connectMongo";
import { ProductModel } from "@/models/product-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

export const getAllProducts = async () => {
  try {
    await connectMongo();
    const products = await ProductModel.find().lean();

    return replaceMongoIdInArray(products);
  } catch (error) {
    throw error;
  }
};

export const getProductDetails = async (productId) => {
  try {
    await connectMongo();

    const product = await ProductModel.findById(productId).lean();
    if (!product) {
      return { msg: "No product found" };
    }
    return replaceMongoIdInObject(product);
  } catch (error) {
    throw error;
  }
};
