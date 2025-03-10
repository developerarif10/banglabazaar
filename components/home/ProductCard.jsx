"use client";
import { BarChart2, Eye, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [activeColor, setActiveColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-product">
      <div
        className="card-product-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={`/product/${product?.id}`}
          className="block relative aspect-[3/4] rounded-md overflow-hidden"
        >
          {/* Main product image */}
          <Image
            src={
              product?.colors
                ? product.colors[activeColor].images[0] // Updated to access images array
                : product.images
                ? product.images[0]
                : "/placeholder.svg"
            }
            alt={product?.title}
            fill
            className="object-cover transition-opacity duration-500"
            style={{ opacity: isHovered && product?.colors ? 0 : 1 }}
          />

          {/* Hover image */}
          {isHovered &&
            product?.colors &&
            product.colors[activeColor].images.length > 1 && (
              <Image
                src={product.colors[activeColor].images[1]} // Show second image on hover
                alt={`${product?.title} hover`}
                fill
                className="object-cover absolute inset-0 transition-opacity duration-500"
              />
            )}
        </Link>

        <div className="list-product-btn">
          <button
            onClick={() => console.log("Quick add", product?.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors mb-2 group relative"
            aria-label="Quick add"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">Quick Add</span>
          </button>

          <button
            onClick={() => console.log("Add to wishlist", product?.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors mb-2 group relative"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">
              Add to Wishlist
            </span>
          </button>

          <button
            onClick={() => console.log("Add to compare", product?.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors mb-2 group relative"
            aria-label="Add to compare"
          >
            <BarChart2 className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">
              Add to Compare
            </span>
          </button>

          <button
            onClick={() => console.log("Quick view", product?.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors group relative"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">Quick View</span>
          </button>
        </div>

        {product?.sizes && (
          <div className="size-list">
            {product?.sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        )}

        {/* Display discount badge if available */}
        {product?.discount && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium">
            {product.discount}
          </div>
        )}

        {/* Display countdown if needed */}
        {product?.countdown && (
          <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-md text-xs font-medium">
            23:59:59
          </div>
        )}
      </div>

      <div className="card-product-info">
        <Link
          href={`/product/${product?.id}`}
          className="text-base font-medium hover:text-primary transition-colors"
        >
          {product?.title}
        </Link>

        {/* Price with compare price if available */}
        <div className="flex items-center gap-2">
          <div className="text-sm font-semibold">
            ${product?.price.toFixed(2)}
          </div>
          {product?.comparePrice && (
            <div className="text-sm text-gray-500 line-through">
              ${product.comparePrice.toFixed(2)}
            </div>
          )}
        </div>

        {product?.colors && (
          <ul className="list-color-product">
            {product?.colors.map((color, index) => (
              <li
                key={color.name}
                className={`list-color-item color-swatch ${
                  index === activeColor ? "ring-1 ring-primary" : ""
                }`}
                onClick={() => setActiveColor(index)}
              >
                <span className="tooltip">{color.name}</span>
                <span className={`swatch-value ${color.value}`}></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
