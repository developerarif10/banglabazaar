"use client";

import { ChevronLeft, ChevronRight, X, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function QuickViewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Orange");
  const [selectedSize, setSelectedSize] = useState("S");

  // Mock product data
  const product = {
    id: 1,
    name: "Ribbed Tank Top",
    price: 18.0,
    description:
      "Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia ac aptent ligula facilisis a auctor habitant parturient a a.Interdum fermentum.",
    images: ["/images/products/orange-1.jpg", "/images/products/pink-1.jpg"],
    colors: [
      { name: "Orange", value: "bg-orange-3" },
      { name: "Black", value: "bg-black" },
      { name: "White", value: "bg-white" },
    ],
    sizes: ["S", "M", "L", "XL"],
    badges: ["Best seller"],
  };

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.quickViewModal to open it
  if (typeof window !== "undefined") {
    window.quickViewModal = {
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

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + product.images.length) % product.images.length
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full">
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="relative">
              <div className="aspect-square relative rounded-md overflow-hidden">
                <Image
                  src={product.images[currentImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-xl font-medium mb-2">
                <Link
                  href={`/product/${product.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {product.name}
                </Link>
              </h2>

              {product.badges && product.badges.length > 0 && (
                <div className="flex gap-2 mb-2">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs uppercase bg-secondary px-2 py-1 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium">
                  Selling fast! 48 people have this in their carts.
                </p>
              </div>

              <div className="text-xl font-semibold mb-4">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

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
                        selectedColor === color.name
                          ? "ring-2 ring-primary"
                          : ""
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
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">
                    Size: <span className="font-semibold">{selectedSize}</span>
                  </div>
                  <button
                    className="text-sm font-medium text-primary hover:underline"
                    onClick={() => {
                      // Open size guide modal
                      if (
                        typeof window !== "undefined" &&
                        window.sizeGuideModal
                      ) {
                        window.sizeGuideModal.open();
                      }
                    }}
                  >
                    Find your size
                  </button>
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

              <div className="mt-6">
                <Link
                  href={`/product/${product.id}`}
                  className="btn-line inline-flex items-center gap-1 font-medium"
                >
                  View full details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 8l4 4-4 4" />
                    <path d="M3 12h18" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
