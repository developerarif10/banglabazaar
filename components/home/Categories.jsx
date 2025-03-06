"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const categories = [
  {
    image: "/assets/shop/beige.jpg",
    title: "Clothing",
    link: "/shop",
  },
  {
    image: "/assets/shop/collection-8.jpg",
    title: "Sunglasses",
    link: "/shop",
  },
  {
    image: "/assets/shop/pink-handbag-2.jpg",
    title: "Bags",
    link: "/shop",
  },
  {
    image: "/assets/shop/black-17.jpg",
    title: "Fashion",
    link: "/shop",
  },
  {
    image: "/assets/shop/sneaker-2.jpg",
    title: "Accessories",
    link: "/shop",
  },
];

export default function Categories() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold uppercase">Shop by categories</h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x"
            >
              {categories.map((category, index) => (
                <div key={index} className="min-w-[280px] snap-start">
                  <div className="collection-item hover-img">
                    <Link
                      href={category.link}
                      className="block relative aspect-[3/4] rounded-md overflow-hidden"
                    >
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white px-4 py-2 rounded-md font-medium flex items-center gap-2 hover-icon">
                          {category.title}
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
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="bg-secondary h-full rounded-md p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">
                Discovery all new items
              </h3>
              <Link
                href="/shop"
                className="text-primary hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
    </section>
  );
}
