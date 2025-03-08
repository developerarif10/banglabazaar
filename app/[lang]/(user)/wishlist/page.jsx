"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const WishlistPage = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Ribbed Tank Top",
      price: 16.95,
      imageSrc: "/placeholder.svg?height=100&width=100",
      color: "Orange",
      size: "S",
    },
    {
      id: 2,
      name: "Ribbed modal T-shirt",
      price: 18.95,
      imageSrc: "/placeholder.svg?height=100&width=100",
      color: "Brown",
      size: "M",
    },
    {
      id: 3,
      name: "Oversized Printed T-shirt",
      price: 10.0,
      imageSrc: "/placeholder.svg?height=100&width=100",
      color: "White",
      size: "L",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-5">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-md p-4">
              <Link href={`/product/${item.id}`} className="block">
                <Image
                  src={item.imageSrc || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-2"
                />
                <h2 className="text-lg font-semibold text-center">
                  {item.name}
                </h2>
              </Link>
              <p className="text-gray-600 text-center">${item.price}</p>
              <p className="text-sm text-gray-500">Color: {item.color}</p>
              <p className="text-sm text-gray-500">Size: {item.size}</p>
              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  Remove
                </Button>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
