"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyAddToCart({ product }) {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show sticky bar after scrolling past the product info section
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, quantity + value);
    setQuantity(newQuantity);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 py-3 transform transition-transform duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative">
              <Image
                src={
                  product.colors[0].images[0] ||
                  "/placeholder.svg?height=48&width=48"
                }
                alt={product.title}
                width={48}
                height={48}
                className="object-cover rounded"
              />
            </div>
            <h3 className="font-medium hidden md:block">{product.title}</h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <select className="border rounded px-3 py-2 text-sm">
                <option>Beige / S - ${product.price.toFixed(2)}</option>
                <option>Beige / M - ${product.price.toFixed(2)}</option>
                <option>Beige / L - ${product.price.toFixed(2)}</option>
                <option>Beige / XL - ${product.price.toFixed(2)}</option>
                <option>Black / S - ${product.price.toFixed(2)}</option>
                {/* More options would be dynamically generated */}
              </select>
            </div>

            <div className="flex items-center border border-gray-300 rounded">
              <button
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <input
                type="text"
                className="w-10 h-8 text-center border-x border-gray-300"
                value={quantity}
                readOnly
              />
              <button
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
