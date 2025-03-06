"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function QuickAddModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Orange");
  const [selectedSize, setSelectedSize] = useState("S");

  // Mock product data
  const product = {
    id: 1,
    name: "Ribbed Tank Top",
    price: 18.0,
    image: "/images/products/orange-1.jpg",
    colors: [
      { name: "Orange", value: "bg-orange-3" },
      { name: "Black", value: "bg-black" },
      { name: "White", value: "bg-white" },
    ],
    sizes: ["S", "M", "L", "XL"],
  };

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.quickAddModal to open it
  if (typeof window !== "undefined") {
    window.quickAddModal = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    });

    // Close modal after adding to cart
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 pt-0">
          <div className="flex gap-4 mb-6">
            <div className="w-20 h-20 relative flex-shrink-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <Link
                href={`/product/${product.id}`}
                className="font-medium hover:text-primary transition-colors"
              >
                {product.name}
              </Link>
              <div className="font-semibold mt-1">
                ${product.price.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="font-medium mb-2">
              Color: <span className="font-semibold">{selectedColor}</span>
            </div>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedColor === color.name ? "ring-2 ring-primary" : ""
                  }`}
                  aria-label={`Select ${color.name} color`}
                >
                  <span
                    className={`w-6 h-6 rounded-full ${color.value} border border-border`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="font-medium mb-2">
              Size: <span className="font-semibold">{selectedSize}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center border ${
                    selectedSize === size
                      ? "border-primary bg-primary/5 font-medium"
                      : "border-border hover:border-primary"
                  }`}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="font-medium mb-2">Quantity</div>
            <div className="flex border border-border rounded-md w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => {
                  const value = Number.parseInt(e.target.value);
                  if (!isNaN(value) && value > 0) {
                    setQuantity(value);
                  }
                }}
                className="w-12 h-10 text-center border-x border-border"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 btn-fill py-2 rounded-md font-medium"
            >
              Add to cart - ${(product.price * quantity).toFixed(2)}
            </button>

            <button
              className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>

            <button
              className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Add to compare"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 3h5v5" />
                <path d="M8 3H3v5" />
                <path d="M21 3l-7 7" />
                <path d="M3 3l7 7" />
                <path d="M16 21h5v-5" />
                <path d="M8 21H3v-5" />
                <path d="M3 21l7-7" />
                <path d="M21 21l-7-7" />
              </svg>
            </button>
          </div>

          <div className="mt-4">
            <button className="w-full py-2 border border-border rounded-md font-medium">
              Buy with{" "}
              <Image
                src="/images/payments/paypal.png"
                alt="PayPal"
                width={60}
                height={20}
                className="inline-block ml-2"
              />
            </button>
            <button className="w-full text-center text-sm text-primary hover:underline mt-2">
              More payment options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
