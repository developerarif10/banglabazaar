"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductGallery({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeColor, setActiveColor] = useState(product.colors[0]._id);
  const [images, setImages] = useState(product.colors[0].images);

  useEffect(() => {
    // Update images when color changes
    const colorImages =
      product.colors.find((color) => color.id === activeColor)?.images || [];
    setImages(colorImages);
  }, [activeColor, product.colors]);

  return (
    <div className="sticky top-4 product-gallery">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        {/* Thumbnails */}
        <div className="w-full md:w-24">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            direction="horizontal"
            className="thumbnails-swiper md:h-[500px]"
            breakpoints={{
              768: {
                direction: "vertical",
                slidesPerView: 5,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="border rounded overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg?height=100&width=100"}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Main Gallery */}
        <div className="w-full">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="main-swiper h-[500px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full">
                  <Image
                    src={image || "/placeholder.svg?height=600&width=600"}
                    alt={`${product.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
