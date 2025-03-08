"use client";

import { Button } from "@/components/ui/button";
import { BarChart2, Eye, Heart, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Sample product data
const initialProducts = [
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    image: "/placeholder.svg?height=400&width=300",
    hoverImage: "/placeholder.svg?height=400&width=300",
    colors: ["orange", "black", "white"],
  },
  {
    id: 2,
    name: "Ribbed Modal T-shirt",
    price: 18.95,
    image: "/placeholder.svg?height=400&width=300",
    hoverImage: "/placeholder.svg?height=400&width=300",
    colors: ["brown", "purple", "green"],
    discount: 33,
  },
  {
    id: 3,
    name: "Oversized Printed T-shirt",
    price: 10.0,
    image: "/placeholder.svg?height=400&width=300",
    hoverImage: "/placeholder.svg?height=400&width=300",
  },
];

export default function MyAccountWishlist() {
  const [products, setProducts] = useState(initialProducts);

  const removeFromWishlist = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">My Wishlist</h2>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">
            Browse our products and add your favorites to your wishlist
          </p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
                <Image
                  src={product.hoverImage || "/placeholder.svg"}
                  alt={`${product.name} hover`}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {product.discount && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}

                <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                    title="Add to cart"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                  <button
                    className="p-2 bg-white rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors"
                    title="Remove from wishlist"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <button
                    className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                    title="Compare"
                  >
                    <BarChart2 className="h-4 w-4" />
                  </button>
                  <button
                    className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                    title="Quick view"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <Link
                  href={`/product/${product.id}`}
                  className="block text-base font-medium hover:text-primary transition-colors mb-1"
                >
                  {product.name}
                </Link>

                <div className="flex items-center gap-2">
                  {product.discount ? (
                    <>
                      <span className="text-sm font-semibold text-red-500">
                        $
                        {(product.price * (1 - product.discount / 100)).toFixed(
                          2
                        )}
                      </span>
                      <span className="text-xs text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                {product.colors && (
                  <div className="flex gap-1 mt-2">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-4 h-4 rounded-full border cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={color.charAt(0).toUpperCase() + color.slice(1)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
