"use client";

import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RecentlyViewed() {
  // This would typically come from local storage or an API
  const products = [
    {
      id: "1",
      title: "Loose Fit Sweatshirt",
      price: 10.0,
      image: "/images/products/light-green-1.jpg",
      hoverImage: "/images/products/light-green-2.jpg",
    },
    {
      id: "2",
      title: "V-neck linen T-shirt",
      price: 114.95,
      image: "/images/products/brown-2.jpg",
      hoverImage: "/images/products/brown-3.jpg",
    },
    {
      id: "3",
      title: "Oversized Printed T-shirt",
      price: 16.95,
      image: "/images/products/white-2.jpg",
      hoverImage: "/images/products/pink-1.jpg",
    },
    {
      id: "4",
      title: "Oversized Printed T-shirt",
      price: 10.0,
      image: "/images/products/white-3.jpg",
      hoverImage: "/images/products/white-4.jpg",
    },
    {
      id: "5",
      title: "Ribbed modal T-shirt",
      price: 18.95,
      image: "/images/products/brown.jpg",
      hoverImage: "/images/products/purple.jpg",
    },
    {
      id: "6",
      title: "Ribbed Tank Top",
      price: 16.95,
      image: "/images/products/orange-1.jpg",
      hoverImage: "/images/products/white-1.jpg",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Recently Viewed</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-recent",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Pagination]}
        className="relative"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination-recent mt-6"></div>
      </Swiper>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md aspect-square mb-3">
        <Image
          src={
            isHovered && product.hoverImage ? product.hoverImage : product.image
          }
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-white px-2 py-1 text-xs font-medium rounded">
            S
          </span>
          <span className="bg-white px-2 py-1 text-xs font-medium rounded">
            M
          </span>
          <span className="bg-white px-2 py-1 text-xs font-medium rounded">
            L
          </span>
          <span className="bg-white px-2 py-1 text-xs font-medium rounded">
            XL
          </span>
        </div>
      </div>

      <h3 className="font-medium mb-1">
        <a href="#" className="hover:text-primary">
          {product.title}
        </a>
      </h3>
      <p className="font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
}
