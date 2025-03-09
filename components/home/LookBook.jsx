"use client";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Lookbook() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Shop the look</h2>
          <p className="text-muted-foreground">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LookbookItem
            image="/images/shop/file/lookbook-3.jpg"
            hotspots={[
              {
                x: 30,
                y: 40,
                product: {
                  id: 1,
                  name: "Jersey thong body",
                  price: 112.0,
                  image: "/images/shop/products/img-p2.png",
                },
              },
              {
                x: 70,
                y: 60,
                product: {
                  id: 2,
                  name: "Ribbed modal T-shirt",
                  price: 20.0,
                  image: "/images/shop/products/img-p4.png",
                },
              },
            ]}
          />

          <LookbookItem
            image="/images/shop/file/lookbook-4.jpg"
            hotspots={[
              {
                x: 40,
                y: 30,
                product: {
                  id: 3,
                  name: "Ribbed Tank Top",
                  price: 20.0,
                  image: "/images/shop/products/img-p5.png",
                },
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function LookbookItem({ image, hotspots }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="aspect-[4/5] relative">
        <Image
          src={image || "/placeholder.svg"}
          alt="Lookbook"
          fill
          className="object-cover"
        />

        {hotspots.map((hotspot, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <button
              className={`w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center relative z-10 ${
                activeHotspot === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() =>
                setActiveHotspot(activeHotspot === index ? null : index)
              }
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
            </button>

            {activeHotspot === index && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg p-3 w-60 z-20">
                <div className="flex gap-3">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Link href={`/product/${hotspot.product.id}`}>
                      <Image
                        src={hotspot.product.image || "/placeholder.svg"}
                        alt={hotspot.product.name}
                        fill
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <div className="flex-1">
                    <Link
                      href={`/product/${hotspot.product.id}`}
                      className="font-medium hover:text-primary transition-colors line-clamp-2"
                    >
                      {hotspot.product.name}
                    </Link>
                    <div className="mt-1 font-semibold">
                      ${hotspot.product.price.toFixed(2)}
                    </div>
                  </div>
                  <button
                    className="self-start p-1 hover:text-primary transition-colors"
                    aria-label="Quick view"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
