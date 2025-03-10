"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function VisibleProduct({ products }) {
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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.slice(0, visibleProducts)?.map((product) => (
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
    </>
  );
}
