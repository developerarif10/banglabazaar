"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="product-info">
      {/* Product Title */}
      <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>

      {/* Badges */}
      <div className="flex items-center gap-3 mb-4">
        {product.badges.map((badge, index) => (
          <Badge key={index} variant="secondary">
            {badge}
          </Badge>
        ))}
        {product.inStock && (
          <div className="flex items-center text-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-semibold">
              Selling fast! 56 people have this in their carts.
            </p>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        {product.comparePrice && (
          <>
            <span className="text-gray-500 line-through">
              ${product.comparePrice.toFixed(2)}
            </span>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
              {product.discount} OFF
            </span>
          </>
        )}
      </div>

      {/* Live View Counter */}
      <div className="flex items-center gap-2 mb-4 text-sm">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold">
          20
        </span>
        <p className="font-semibold">People are viewing this right now</p>
      </div>

      {/* Countdown Timer */}
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <div className="flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary animate-pulse"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-semibold">HURRY UP! SALE ENDS IN:</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white p-2 rounded text-center">
            <span className="block text-lg font-bold">02</span>
            <span className="text-xs text-gray-500">Days</span>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <span className="block text-lg font-bold">12</span>
            <span className="text-xs text-gray-500">Hours</span>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <span className="block text-lg font-bold">45</span>
            <span className="text-xs text-gray-500">Mins</span>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <span className="block text-lg font-bold">30</span>
            <span className="text-xs text-gray-500">Secs</span>
          </div>
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium">
            Color:{" "}
            <span className="font-semibold">
              {product.colors.find((c) => c.id === selectedColor)?.name}
            </span>
          </label>
        </div>
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              className={`relative w-8 h-8 rounded-full border ${
                selectedColor === color.id
                  ? "ring-2 ring-primary ring-offset-2"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedColor(color.id)}
              title={color.name}
            >
              <span
                className={`absolute inset-0.5 rounded-full ${color.value}`}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium">
            Size: <span className="font-semibold">{selectedSize}</span>
          </label>
          <button className="text-sm font-semibold text-primary hover:underline">
            Find your size
          </button>
        </div>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`w-10 h-10 flex items-center justify-center border ${
                selectedSize === size
                  ? "bg-primary text-white"
                  : "border-gray-300 hover:border-primary"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Quantity</label>
        <div className="flex items-center border border-gray-300 w-32">
          <button
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <input
            type="text"
            className="w-12 h-10 text-center border-x border-gray-300"
            value={quantity}
            readOnly
          />
          <button
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex gap-2">
          <Button className="flex-1 h-12" size="lg">
            Add to cart - ${totalPrice}
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
          </Button>
        </div>
        <Button
          variant="outline"
          className="h-12 flex items-center justify-center gap-2"
        >
          Buy with{" "}
          <Image
            src="/images/payments/paypal.png"
            alt="PayPal"
            width={60}
            height={20}
          />
        </Button>
        <button className="text-center text-sm text-primary hover:underline">
          More payment options
        </button>
      </div>

      {/* Extra Links */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="flex items-center gap-2 text-sm hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>
          <span className="font-semibold">Compare color</span>
        </button>
        <button className="flex items-center gap-2 text-sm hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold">Ask a question</span>
        </button>
        <button className="flex items-center gap-2 text-sm hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V8a1 1 0 00-.293-.707l-2-2A1 1 0 0017 5h-1V4a1 1 0 00-1-1H3z" />
          </svg>
          <span className="font-semibold">Delivery & Return</span>
        </button>
        <button className="flex items-center gap-2 text-sm hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <span className="font-semibold">Share</span>
        </button>
      </div>

      {/* Delivery Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">
            Estimate delivery times:{" "}
            <span className="font-bold">{product.estimatedDelivery}</span>
          </p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
            />
          </svg>
          <p className="text-sm">{product.returnPolicy}</p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <p className="font-semibold">
              Guarantee Safe
              <br />
              Checkout
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/images/payments/visa.png"
              alt="Visa"
              width={40}
              height={25}
            />
            <Image
              src="/images/payments/img-1.png"
              alt="Mastercard"
              width={40}
              height={25}
            />
            <Image
              src="/images/payments/img-2.png"
              alt="Amex"
              width={40}
              height={25}
            />
            <Image
              src="/images/payments/img-3.png"
              alt="Discover"
              width={40}
              height={25}
            />
            <Image
              src="/images/payments/img-4.png"
              alt="PayPal"
              width={40}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
