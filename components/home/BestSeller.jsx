"use client";
import { BarChart2, Eye, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: 16.95,
    images: ["/images/products/orange-1.jpg", "/images/products/white-1.jpg"],
    colors: [
      {
        name: "Orange",
        value: "bg-orange-3",
        image: "/images/products/orange-1.jpg",
      },
      {
        name: "Black",
        value: "bg-black",
        image: "/images/products/black-1.jpg",
      },
      {
        name: "White",
        value: "bg-white",
        image: "/images/products/white-1.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Ribbed modal T-shirt",
    price: 18.95,
    images: ["/images/products/brown.jpg", "/images/products/purple.jpg"],
    colors: [
      { name: "Brown", value: "bg-brown", image: "/images/products/brown.jpg" },
      {
        name: "Light Purple",
        value: "bg-purple",
        image: "/images/products/purple.jpg",
      },
      {
        name: "Light Green",
        value: "bg-light-green",
        image: "/images/products/green.jpg",
      },
    ],
    sizes: ["M", "L", "XL"],
    countdown: true,
  },
  {
    id: 3,
    name: "Oversized Printed T-shirt",
    price: 10.0,
    images: ["/images/products/white-3.jpg", "/images/products/white-4.jpg"],
  },
  {
    id: 4,
    name: "Oversized Printed T-shirt",
    price: 16.95,
    images: ["/images/products/white-2.jpg", "/images/products/pink-1.jpg"],
    colors: [
      {
        name: "White",
        value: "bg-white",
        image: "/images/products/white-2.jpg",
      },
      {
        name: "Pink",
        value: "bg-purple",
        image: "/images/products/pink-1.jpg",
      },
      {
        name: "Black",
        value: "bg-black",
        image: "/images/products/black-2.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "V-neck linen T-shirt",
    price: 114.95,
    images: ["/images/products/brown-2.jpg", "/images/products/brown-3.jpg"],
    colors: [
      {
        name: "Brown",
        value: "bg-brown",
        image: "/images/products/brown-2.jpg",
      },
      {
        name: "White",
        value: "bg-white",
        image: "/images/products/white-5.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Loose Fit Sweatshirt",
    price: 10.0,
    images: [
      "/images/products/light-green-1.jpg",
      "/images/products/light-green-2.jpg",
    ],
    colors: [
      {
        name: "Light Green",
        value: "bg-light-green",
        image: "/images/products/light-green-1.jpg",
      },
      {
        name: "Black",
        value: "bg-black",
        image: "/images/products/black-3.jpg",
      },
      {
        name: "Blue",
        value: "bg-blue-500",
        image: "/images/products/blue.jpg",
      },
      {
        name: "Dark Blue",
        value: "bg-dark-blue",
        image: "/images/products/dark-blue.jpg",
      },
      {
        name: "White",
        value: "bg-white",
        image: "/images/products/white-6.jpg",
      },
      {
        name: "Light Grey",
        value: "bg-light-grey",
        image: "/images/products/light-grey.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Regular Fit Oxford Shirt",
    price: 10.0,
    images: ["/images/products/black-4.jpg", "/images/products/black-5.jpg"],
    colors: [
      {
        name: "Black",
        value: "bg-black",
        image: "/images/products/black-4.jpg",
      },
      {
        name: "Dark Blue",
        value: "bg-dark-blue",
        image: "/images/products/dark-blue-2.jpg",
      },
      { name: "Beige", value: "bg-beige", image: "/images/products/beige.jpg" },
      {
        name: "Light Blue",
        value: "bg-light-blue",
        image: "/images/products/light-blue.jpg",
      },
      {
        name: "White",
        value: "bg-white",
        image: "/images/products/white-7.jpg",
      },
    ],
    sizes: ["S", "M", "L"],
  },
  {
    id: 8,
    name: "Loose Fit Hoodie",
    price: 9.95,
    images: ["/images/products/white-8.jpg", "/images/products/black-6.jpg"],
    colors: [
      {
        name: "White",
        value: "bg-white",
        image: "/images/products/white-8.jpg",
      },
      {
        name: "Black",
        value: "bg-black",
        image: "/images/products/black-7.jpg",
      },
      {
        name: "Blue",
        value: "bg-blue-500",
        image: "/images/products/blue-2.jpg",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function BestSeller() {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setVisibleProducts(12);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Best Seller</h2>
          <p className="text-muted-foreground">
            Shop the Latest Styles: Stay ahead of the curve with our newest
            arrivals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              disabled={loading}
              className="btn-outline px-6 py-3 rounded-md inline-flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mr-2"></span>
                  Loading...
                </>
              ) : (
                "Load more"
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }) {
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
          href={`/product/${product.id}`}
          className="block relative aspect-[3/4] rounded-md overflow-hidden"
        >
          <Image
            src={
              product.colors
                ? product.colors[activeColor].image
                : product.images[0]
            }
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-500"
            style={{ opacity: isHovered && product.images[1] ? 0 : 1 }}
          />

          {isHovered && product.images[1] && (
            <Image
              src={product.images[1] || "/placeholder.svg"}
              alt={`${product.name} hover`}
              fill
              className="object-cover absolute inset-0 transition-opacity duration-500"
            />
          )}
        </Link>

        <div className="list-product-btn">
          <button
            onClick={() => console.log("Quick add", product.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors mb-2 group relative"
            aria-label="Quick add"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">Quick Add</span>
          </button>

          <button
            onClick={() => console.log("Add to wishlist", product.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors mb-2 group relative"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">
              Add to Wishlist
            </span>
          </button>

          <button
            onClick={() => console.log("Add to compare", product.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors mb-2 group relative"
            aria-label="Add to compare"
          >
            <BarChart2 className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">
              Add to Compare
            </span>
          </button>

          <button
            onClick={() => console.log("Quick view", product.id)}
            className="box-icon bg-white hover:bg-primary hover:text-primary-foreground transition-colors group relative"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
            <span className="tooltip group-hover:opacity-100">Quick View</span>
          </button>
        </div>

        {product.sizes && (
          <div className="size-list">
            {product.sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        )}

        {product.countdown && (
          <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-md text-xs font-medium">
            23:59:59
          </div>
        )}
      </div>

      <div className="card-product-info">
        <Link
          href={`/product/${product.id}`}
          className="text-base font-medium hover:text-primary transition-colors"
        >
          {product.name}
        </Link>
        <div className="text-sm font-semibold">${product.price.toFixed(2)}</div>

        {product.colors && (
          <ul className="list-color-product">
            {product.colors.map((color, index) => (
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
