import Image from "next/image";

import { brands } from "@/database/local-db";

export default function Brands() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={brand.image || "/placeholder.svg"}
                alt={`Brand ${brand.id}`}
                width={120}
                height={60}
                className="object-contain h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
