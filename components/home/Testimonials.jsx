"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Import Swiper React components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    title: "Best Online Fashion Site",
    text: "I always find something stylish and affordable on this web fashion site",
    author: "Robert Smith",
    location: "Customer from USA",
    product: {
      id: 1,
      name: "Jersey thong body",
      price: 105.95,
      image: "/images/shop/products/img-p4.png",
    },
  },
  {
    id: 2,
    title: "Great Selection and Quality",
    text: "I love the variety of styles and the high-quality clothing on this web fashion site.",
    author: "Allen Lyn",
    location: "Customer from France",
    product: {
      id: 2,
      name: "Cotton jersey top",
      price: 7.95,
      image: "/images/shop/products/img-p2.png",
    },
  },
  {
    id: 3,
    title: "Best Customer Service",
    text: "I finally found a web fashion site with stylish and flattering options in my size.",
    author: "Peter Rope",
    location: "Customer from USA",
    product: {
      id: 3,
      name: "Ribbed modal T-shirt",
      price: 18.95,
      image: "/images/shop/products/img-p4.png",
    },
  },
  {
    id: 4,
    title: "Great Selection and Quality",
    text: "I love the variety of styles and the high-quality clothing on this web fashion site.",
    author: "Hellen Ase",
    location: "Customer from Japan",
    product: {
      id: 4,
      name: "Customer from Japan",
      price: 16.95,
      image: "/images/shop/products/img-p5.png",
    },
  },
];

export default function Testimonials() {
  // Use a ref instead of state to avoid TypeScript issues
  const swiperRef = useState(null);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Happy Clients</h2>
          <p className="text-muted-foreground">Hear what they say about us</p>
        </div>

        <div className="relative">
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
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="!w-[300px] md:!w-[350px]"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    "{testimonial.text}"
                  </p>

                  <div className="mb-4">
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Link href={`/product/${testimonial.product.id}`}>
                          <Image
                            src={
                              testimonial.product.image || "/placeholder.svg"
                            }
                            alt={testimonial.product.name}
                            fill
                            className="object-contain"
                          />
                        </Link>
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/product/${testimonial.product.id}`}
                          className="font-medium hover:text-primary transition-colors line-clamp-1"
                        >
                          {testimonial.product.name}
                        </Link>
                        <div className="mt-1 font-semibold">
                          ${testimonial.product.price.toFixed(2)}
                        </div>
                      </div>
                      <Link
                        href={`/product/${testimonial.product.id}`}
                        className="text-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => {
              // @ts-ignore
              swiperRef[0]?.slidePrev();
            }}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => {
              // @ts-ignore
              swiperRef[0]?.slideNext();
            }}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
