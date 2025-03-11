import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  getProductDetails,
  getRelatedProducts,
} from "@/queries/product.queries";
import ProductGallery from "../_components/ProductGallery";
import ProductInfo from "../_components/ProductInfo";
import ProductTabs from "../_components/ProductTabs";
import RelatedProducts from "../_components/RelatedProducts";
import StickyAddToCart from "../_components/StickyAddToCart";

export default async function ProductDetailPage({ params }) {
  const resolveParams = await params;
  const { id } = resolveParams;
  const product = await getProductDetails(id);
  const relatedProducts = await getRelatedProducts(product?.category, id);

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
          <RelatedProducts relatedProducts={relatedProducts} />
        </div>
      </section>
    </main>
  );
}
