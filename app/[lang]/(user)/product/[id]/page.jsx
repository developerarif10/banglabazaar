import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductGallery from "../_components/ProductGallery";
import ProductInfo from "../_components/ProductInfo";
import ProductTabs from "../_components/ProductTabs";
import RecentlyViewed from "../_components/RecentlyViewed";
import RelatedProducts from "../_components/RelatedProducts";
import StickyAddToCart from "../_components/StickyAddToCart";

export default function ProductDetailPage() {
  // In a real app, you would fetch this data from an API based on the product ID

  // const products = await getAllProducts()

  const product = {
    id: "1",
    title: "Cotton jersey top",
    price: 8.0,
    comparePrice: 30.0,
    discount: "20%",
    badges: ["Best seller"],
    description:
      "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.",
    colors: [
      {
        id: "beige",
        name: "Beige",
        value: "bg-[#f5f5dc]",
        images: [
          "/images/shop/products/hmgoepprod31.jpg",
          "/images/shop/products/hmgoepprod.jpg",
          "/images/shop/products/hmgoepprod2.jpg",
          "/images/shop/products/hmgoepprod3.jpg",
          "/images/shop/products/hmgoepprod4.jpg",
          "/images/shop/products/hmgoepprod5.jpg",
        ],
      },
      {
        id: "black",
        name: "Black",
        value: "bg-black",
        images: [
          "/images/shop/products/hmgoepprod6.jpg",
          "/images/shop/products/hmgoepprod7.jpg",
          "/images/shop/products/hmgoepprod8.jpg",
          "/images/shop/products/hmgoepprod9.jpg",
        ],
      },
      {
        id: "blue",
        name: "Blue",
        value: "bg-blue-600",
        images: [
          "/images/shop/products/hmgoepprod10.jpg",
          "/images/shop/products/hmgoepprod11.jpg",
          "/images/shop/products/hmgoepprod12.jpg",
          "/images/shop/products/hmgoepprod13.jpg",
        ],
      },
      {
        id: "white",
        name: "White",
        value: "bg-white",
        images: [
          "/images/shop/products/hmgoepprod14.jpg",
          "/images/shop/products/hmgoepprod15.jpg",
          "/images/shop/products/hmgoepprod16.jpg",
          "/images/shop/products/hmgoepprod17.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Front button placket",
      "Adjustable sleeve tabs",
      "Babaton embroidered crest at placket and hem",
    ],
    materials: [
      "Content: 100% LENZING™ ECOVERO™ Viscose",
      "Care: Hand wash",
      "Imported",
    ],
    careInstructions: [
      { icon: "icon-machine", text: "Machine wash max. 30ºC. Short spin." },
      { icon: "icon-iron", text: "Iron maximum 110ºC." },
      { icon: "icon-bleach", text: "Do not bleach/bleach." },
      { icon: "icon-dry-clean", text: "Do not dry clean." },
      { icon: "icon-tumble-dry", text: "Tumble dry, medium hear." },
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 168,
    estimatedDelivery: "12-26 days (International), 3-6 days (United States)",
    returnPolicy:
      "Return within 30 days of purchase. Duties & taxes are non-refundable.",
  };

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Women", href: "/collections/women" },
                { label: product.title, href: "#", current: true },
              ]}
            />
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Previous product</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Back to shop</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <span className="sr-only">Next product</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart */}
      <StickyAddToCart product={product} />

      {/* Product Tabs */}
      <section className="py-8 border-t">
        <div className="container mx-auto">
          <ProductTabs product={product} />
        </div>
      </section>

      {/* Related Products */}
      <section className="py-8 border-t">
        <div className="container mx-auto">
          <RelatedProducts />
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="py-8 border-t">
        <div className="container mx-auto">
          <RecentlyViewed />
        </div>
      </section>
    </main>
  );
}
