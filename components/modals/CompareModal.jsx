"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CompareModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [compareItems, setCompareItems] = useState([
    {
      id: 1,
      name: "Ribbed Tank Top",
      image: "/images/products/orange-1.jpg",
    },
    {
      id: 2,
      name: "Oversized Printed T-shirt",
      image: "/images/products/pink-1.jpg",
    },
  ]);

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.compareModal to open it
  if (typeof window !== "undefined") {
    window.compareModal = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }

  const removeItem = (id) => {
    setCompareItems(compareItems.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setCompareItems([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg shadow-lg max-h-[50vh] overflow-y-auto">
        <div className="p-4 border-b border-border">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="mb-4">
                <h2 className="text-lg font-medium">Compare Products</h2>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4">
                {compareItems.length > 0 ? (
                  compareItems.map((item) => (
                    <div key={item.id} className="min-w-[120px] relative">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center z-10"
                        aria-label="Remove item"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      <Link href={`/product/${item.id}`}>
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="rounded-md object-cover aspect-square"
                        />
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="text-muted-foreground">
                    No products to compare
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-4">
                {compareItems.length > 0 && (
                  <>
                    <Link
                      href="/compare"
                      className="btn-fill px-4 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Compare
                    </Link>

                    <button
                      onClick={clearAll}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Clear All
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
