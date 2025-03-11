"use client";

import { BarChart2, Eye, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RelatedProducts({ relatedProducts }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">People Also Bought</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
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
        {relatedProducts.map((product) => (
          <SwiperSlide key={product._id || product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination mt-6"></div>
      </Swiper>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.id || null
  );

  // Get the current images based on selected color
  const currentColor =
    product.colors?.find((color) => color.id === selectedColor) ||
    product.colors?.[0];
  const mainImage =
    currentColor?.images?.[0] ||
    product.image ||
    "/placeholder.svg?height=400&width=300";
  const hoverImage =
    currentColor?.images?.[1] ||
    currentColor?.images?.[0] ||
    product.hoverImage ||
    mainImage;

  // Calculate discount percentage if comparePrice exists
  const hasDiscount =
    product.comparePrice && product.comparePrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.comparePrice - product.price) / product.comparePrice) * 100
      )
    : product.discount
    ? Number.parseInt(product.discount)
    : null;

  return (
    <Link
      href={`/product/${product._id}`}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md aspect-square mb-3">
        <Image
          src={isHovered ? hoverImage : mainImage}
          alt={product.title || product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {discountPercentage && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -
            {typeof discountPercentage === "string"
              ? discountPercentage
              : `${discountPercentage}%`}
          </div>
        )}

        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-2 left-2">
            {product.badges.map((badge, index) => (
              <div
                key={index}
                className="bg-primary text-white text-xs font-bold px-2 py-1 rounded mb-1"
              >
                {badge}
              </div>
            ))}
          </div>
        )}

        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <ShoppingBag className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <Heart className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <BarChart2 className="h-4 w-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {product.sizes && (
          <div className="absolute bottom-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="bg-white px-2 py-1 text-xs font-medium rounded"
              >
                {size}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Color options */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex gap-1 mb-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              className={`w-4 h-4 rounded-full border ${
                selectedColor === color.id
                  ? "border-primary"
                  : "border-gray-300"
              }`}
              style={{
                backgroundColor: color.value.startsWith("bg-")
                  ? ""
                  : color.value,
              }}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
      )}

      <h3 className="font-medium mb-1">
        <a href="#" className="hover:text-primary">
          {product.title || product.name}
        </a>
      </h3>

      <div className="flex items-center gap-2">
        <p className="font-semibold">${product.price.toFixed(2)}</p>
        {hasDiscount && (
          <p className="text-gray-500 line-through text-sm">
            ${product.comparePrice.toFixed(2)}
          </p>
        )}
      </div>

      {product.rating && (
        <div className="flex items-center mt-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-current"
                    : "stroke-current fill-none"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>
      )}
    </Link>
  );
}
