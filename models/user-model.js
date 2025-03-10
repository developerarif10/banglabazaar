import mongoose, { Schema } from "mongoose";

export const product = {
  product_name: String,
  category: String,
  SKU: String,
  price: Number,
  discount_price: Number,
  size: {
    type: String,
    enum: ["XS", "S", "M", "L", "XL"],
  },
  color: String,
  quantity: Number,
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
  },
  image: String,
};

const UserSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: false,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  shippingAddress: {
    type: {
      postCode: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
    default: null,
  },
  billingAddress: {
    type: {
      postCode: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
    default: null,
  },
  wishlist: [product],
  cart: [
    {
      ...product,
      quantity: {
        type: Number,
        required: true,
      },
      addedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  accountType: {
    type: String,
  },
  role: String,
  // user max attempt for log in is 3
  jail: {
    loginAttempt: {
      type: Number,
      default: 0,
    },
    expires: {
      type: Date,
      default: null,
    },
  },
});

export const UserModel =
  mongoose.models.users || mongoose.model("users", UserSchema);
