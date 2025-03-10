"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Import Swiper React components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    image: "/images/shop/beige.jpg",
    title: "Clothing",
    link: "/shop",
  },
  {
    image: "/images/shop/collection-8.jpg",
    title: "Sunglasses",
    link: "/shop",
  },
  {
    image: "/images/shop/pink-handbag-2.jpg",
    title: "Bags",
    link: "/shop",
  },
  {
    image: "/images/shop/black-17.jpg",
    title: "Fashion",
    link: "/shop",
  },
  {
    image: "/images/shop/sneaker-2.jpg",
    title: "Accessories",
    link: "/shop",
  },
];

export default function Categories() {
  // Use a ref instead of state to avoid TypeScript issues
  const swiperRef = useState(null);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold uppercase">Shop by categories</h2>
          <div className="flex gap-2">
            <button
              onClick={() => {
                // @ts-ignore
                swiperRef[0]?.slidePrev();
              }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                // @ts-ignore
                swiperRef[0]?.slideNext();
              }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView="auto"
              onSwiper={(swiper) => {
                // @ts-ignore
                swiperRef[1](swiper);
              }}
              className="!pb-4"
            >
              {categories.map((category, index) => (
                <SwiperSlide key={index} className="!w-[280px]">
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
                </SwiperSlide>
              ))}
            </Swiper>
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
