"use client";

import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const galleryItems = [
  { id: 1, image: "/images/shop/gallery/gallery-7.jpg" },
  { id: 2, image: "/images/shop/gallery/gallery-3.jpg" },
  { id: 3, image: "/images/shop/gallery/gallery-5.jpg" },
  { id: 4, image: "/images/shop/gallery/gallery-8.jpg" },
  { id: 5, image: "/images/shop/gallery/gallery-6.jpg" },
];

export default function ShopGram() {
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
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Shop Gram</h2>
          <p className="text-muted-foreground">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x"
          >
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="min-w-[200px] sm:min-w-[220px] md:min-w-[240px] snap-start"
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
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollRight}
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
