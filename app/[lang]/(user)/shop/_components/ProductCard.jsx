"use client";

import { BarChart2, Eye, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product, layout = "grid" }) {
  const [activeColor, setActiveColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fix 1: Adapt product data structure to component expectations
  const adaptedProduct = {
    id: product.id || "default-id", // Ensure there's always an ID
    name: product.title || "", // Map title to name
    price: product.price || 0,
    description: product.description || "",
    availability: product.inStock ? "In stock" : "Out of stock",
    // Fix 2: Restructure the colors to match component expectations
    colors: product.colors
      ? product.colors.map((color) => ({
          ...color,
          image: color.images[0] || "/placeholder.svg", // Use first image for each color
        }))
      : null,
    // Fix 3: Ensure images array exists and is populated
    images: product.colors
      ? [
          product.colors[activeColor]?.images[0] || "/placeholder.svg",
          product.colors[activeColor]?.images[1] || "/placeholder.svg",
        ]
      : ["/placeholder.svg"],
  };

  if (layout === "list") {
    return (
      <div className="card-product flex flex-col md:flex-row gap-6 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="relative w-full md:w-1/3 aspect-[3/4]">
          <Link
            href={`/product/${adaptedProduct.id}`}
            className="block relative h-full"
          >
            <Image
              src={
                adaptedProduct?.colors
                  ? adaptedProduct.colors[activeColor]?.image ||
                    "/placeholder.svg"
                  : adaptedProduct.images[0] || "/placeholder.svg"
              }
              alt={adaptedProduct.name}
              fill
              className="object-cover rounded-md"
            />
          </Link>
        </div>
        <div className="w-full md:w-2/3">
          <Link
            href={`/product/${adaptedProduct.id}`}
            className="text-xl font-medium hover:text-primary transition-colors"
          >
            {adaptedProduct.name}
          </Link>
          <div className="text-lg font-semibold mt-2">
            ${adaptedProduct.price.toFixed(2)}
          </div>
          <p className="text-gray-600 mt-3 line-clamp-3">
            {adaptedProduct.description}
          </p>

          {adaptedProduct.colors && (
            <ul className="flex gap-2 mt-4">
              {adaptedProduct.colors.map((color, index) => (
                <li
                  key={color.name}
                  className={`relative cursor-pointer rounded-full ${
                    index === activeColor ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setActiveColor(index)}
                >
                  <span className="sr-only">{color.name}</span>
                  <span
                    className={`block w-6 h-6 rounded-full ${color.value} border border-gray-200`}
                  ></span>
                </li>
              ))}
            </ul>
          )}

          {product.sizes && (
            <div className="flex gap-2 mt-4">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="inline-flex items-center justify-center w-8 h-8 border border-gray-200 rounded-md text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2 mt-6">
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Add to cart</span>
            </button>
            <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-100">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-100">
              <BarChart2 className="h-5 w-5" />
            </button>
            <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-100">
              <Eye className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-product group">
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-md mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={`/product/${adaptedProduct.id}`}
          className="block relative h-full"
        >
          <Image
            src={
              adaptedProduct.colors
                ? adaptedProduct.colors[activeColor]?.image ||
                  "/placeholder.svg"
                : adaptedProduct.images[0] || "/placeholder.svg"
            }
            alt={adaptedProduct.name}
            fill
            className="object-cover transition-opacity duration-500"
            style={{ opacity: isHovered && adaptedProduct.images[1] ? 0 : 1 }}
          />

          {isHovered && adaptedProduct.images[1] && (
            <Image
              src={adaptedProduct.images[1] || "/placeholder.svg"}
              alt={`${adaptedProduct.name} hover`}
              fill
              className="object-cover absolute inset-0 transition-opacity duration-500"
            />
          )}
        </Link>

        {/* Product buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md group/btn">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute right-full mr-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
              Quick Add
            </span>
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md group/btn">
            <Heart className="h-4 w-4" />
            <span className="absolute right-full mr-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
              Add to Wishlist
            </span>
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md group/btn">
            <BarChart2 className="h-4 w-4" />
            <span className="absolute right-full mr-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
              Add to Compare
            </span>
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-md group/btn">
            <Eye className="h-4 w-4" />
            <span className="absolute right-full mr-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
              Quick View
            </span>
          </button>
        </div>

        {/* Size list */}
        {product.sizes && (
          <div className="absolute left-4 bottom-4 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="inline-flex items-center justify-center w-7 h-7 bg-white rounded-md text-xs font-medium shadow-md"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {/* Countdown */}
        {product.countdown && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-xs font-medium shadow-md">
            23:59:59
          </div>
        )}

        {/* Availability badge */}
        {adaptedProduct.availability === "Out of stock" && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="bg-white text-black px-4 py-2 rounded-md font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div>
        <Link
          href={`/product/${adaptedProduct.id}`}
          className="text-base font-medium hover:text-primary transition-colors"
        >
          {adaptedProduct.name}
        </Link>
        <div className="text-sm font-semibold mt-1">
          ${adaptedProduct.price.toFixed(2)}
        </div>

        {adaptedProduct.colors && (
          <ul className="flex gap-1 mt-2">
            {adaptedProduct.colors.map((color, index) => (
              <li
                key={color.name}
                className={`relative cursor-pointer rounded-full ${
                  index === activeColor ? "ring-1 ring-primary" : ""
                }`}
                onClick={() => setActiveColor(index)}
              >
                <span className="sr-only">{color.name}</span>
                <span
                  className={`block w-4 h-4 rounded-full ${color.value} border border-gray-200`}
                ></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
