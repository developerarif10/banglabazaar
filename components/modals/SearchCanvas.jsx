"use client";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SearchCanvas({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Search our site</h2>
              <button onClick={onClose} className="p-1">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quick link</h3>
              <ul className="flex flex-wrap gap-2">
                <li>
                  <Link
                    href="/shop"
                    className="px-3 py-1 bg-secondary rounded-md text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="px-3 py-1 bg-secondary rounded-md text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="px-3 py-1 bg-secondary rounded-md text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Women
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="px-3 py-1 bg-secondary rounded-md text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Need some inspiration?</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Link href="/product">
                      <Image
                        src="/images/products/white-3.jpg"
                        alt="Cotton jersey top"
                        fill
                        className="object-cover rounded-md"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/product" className="hover:text-primary">
                      Cotton jersey top
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-muted-foreground line-through">
                        $10.00
                      </span>
                      <span className="font-semibold">$8.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Link href="/product">
                      <Image
                        src="/images/products/white-2.jpg"
                        alt="Mini crossbody bag"
                        fill
                        className="object-cover rounded-md"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/product" className="hover:text-primary">
                      Mini crossbody bag
                    </Link>
                    <div className="mt-1">
                      <span className="font-semibold">$18.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-20 h-20 relative flex-shrink-0">
                    <Link href="/product">
                      <Image
                        src="/images/products/white-1.jpg"
                        alt="Oversized Printed T-shirt"
                        fill
                        className="object-cover rounded-md"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/product" className="hover:text-primary">
                      Oversized Printed T-shirt
                    </Link>
                    <div className="mt-1">
                      <span className="font-semibold">$18.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
