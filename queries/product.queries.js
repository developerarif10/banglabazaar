import connectMongo from "@/database/connectMongo";
import { ProductModel } from "@/models/product-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import { ObjectId } from "mongodb";

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

export const getBestSellingProduct = async () => {
  try {
    await connectMongo();
    const bestProduct = await ProductModel.find({
      badges: "Best Seller",
    }).lean();

    return replaceMongoIdInArray(bestProduct);
  } catch (error) {
    throw error;
  }
};

export const getRelatedProducts = async (category, excludeProductId) => {
  try {
    await connectMongo();

    // Fetch 4 random related products from the same category excluding the current product
    const products = await ProductModel.aggregate([
      { $match: { category, _id: { $ne: excludeProductId } } }, // Match category & exclude current product
      { $sample: { size: 4 } }, // Randomly select 4 products
    ]);

    return products.length > 0
      ? products
      : { msg: "No Related Products Found" };
  } catch (error) {
    throw error;
  }
};

// Add the new function to get products by IDs
export const getProductsByIds = async (productIds) => {
  try {
    await connectMongo();

    // Convert string IDs to ObjectId if needed
    const objectIds = productIds.map((id) =>
      typeof id === "string" ? new ObjectId(id) : id
    );

    const products = await ProductModel.find({
      _id: { $in: objectIds },
    }).lean();

    // Sort products to match the order of productIds (which is the order they were viewed)
    const idMap = new Map();
    productIds.forEach((id, index) => {
      idMap.set(id.toString(), index);
    });

    const sortedProducts = replaceMongoIdInArray(products).sort((a, b) => {
      return idMap.get(a.id.toString()) - idMap.get(b.id.toString());
    });

    return sortedProducts;
  } catch (error) {
    throw error;
  }
};
