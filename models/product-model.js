import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: String, required: true },
  images: { type: [String], required: true },
});

const careInstructionSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  text: { type: String, required: true },
});

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    comparePrice: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    discount: { type: String, required: true },
    badges: { type: [String], default: [] },
    description: { type: String, required: true },
    colors: { type: [colorSchema], required: true },
    sizes: { type: [String], required: true },
    features: { type: [String], default: [] },
    materials: { type: [String], default: [] },
    careInstructions: { type: [careInstructionSchema], default: [] },
    inStock: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    estimatedDelivery: { type: String, required: true },
    returnPolicy: { type: String, required: true },
  },
  { timestamps: true }
);

export const ProductModel =
  mongoose.models.products || mongoose.model("products", productSchema);
