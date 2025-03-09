"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/images/slider/fashion-slideshow-05.jpg",
    title: "Glamorous<br>Glam",
    subtitle: "From casual to formal, we've got you covered",
    link: "/shop",
  },
  {
    image: "/images/slider/fashion-slideshow-09.jpg",
    title: "Simple <br>Style",
    subtitle: "From casual to formal, we've got you covered",
    link: "/shop",
  },
  {
    image: "/images/slider/fashion-slideshow-06.jpg",
    title: "Glamorous<br>Glam",
    subtitle: "From casual to formal, we've got you covered",
    link: "/shop",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const goToSlide = (index) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const startTimeout = () => {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    };

    startTimeout();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-1000 delay-300 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p
                  className={`text-lg md:text-xl mb-6 transition-all duration-1000 delay-500 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className={`btn-fill px-6 py-3 rounded-md inline-flex items-center gap-2 transition-all duration-1000 delay-700 ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <span>Shop collection</span>
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
