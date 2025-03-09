import Image from "next/image";

const brands = [
  { id: 1, image: "/images/brand/brand-01.png" },
  { id: 2, image: "/images/brand/brand-02.png" },
  { id: 3, image: "/images/brand/armani.png" },
  { id: 4, image: "/images/brand/brand-03.png" },
  { id: 5, image: "/images/brand/brand-05.png" },
  { id: 6, image: "/images/brand/patagonia-logo.png" },
];

export default function Brands() {
  return (
    <section className="py-16">
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
