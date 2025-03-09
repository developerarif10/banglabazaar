import { getAllProducts } from "@/queries/product.queries";
import ShopClient from "./_components/ShopClient";

export default async function ShopPage() {
  const products = await getAllProducts();
  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <div className="py-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">New Arrival</h1>
          <p className="text-gray-600">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>

      <ShopClient products={products} />
    </div>
  );
}
