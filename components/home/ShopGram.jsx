"use client";

import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const galleryItems = [
  { id: 1, image: "/images/shop/gallery/gallery-1.jpg" },
  { id: 2, image: "/images/shop/gallery/gallery-2.jpg" },
  { id: 3, image: "/images/shop/gallery/gallery-4.jpg" },
  { id: 4, image: "/images/shop/gallery/gallery-5.jpg" },
  { id: 5, image: "/images/shop/gallery/gallery-24.jpg" },
];

export default function ShopGram() {
  const swiperRef = useState(null);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Shop Gram</h2>
          <p className="text-muted-foreground">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView="auto"
            onSwiper={(swiper) => {
              // @ts-ignore
              swiperRef[1](swiper);
            }}
            className="!pb-4"
          >
            {galleryItems.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[200px] sm:!w-[220px] md:!w-[240px]"
              >
                <div className="relative group rounded-md overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`Gallery ${item.id}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      aria-label="Quick add"
                      onClick={() => console.log("Quick add", item.id)}
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => {
                // @ts-ignore
                swiperRef[0]?.slidePrev();
              }}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                // @ts-ignore
                swiperRef[0]?.slideNext();
              }}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
