import { getBestSellingProduct } from "@/queries/product.queries";
import VisibleProduct from "./VisibleProduct";

export default async function BestSeller() {
  const products = await getBestSellingProduct();
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Best Seller</h2>
          <p className="text-muted-foreground">
            Shop the Latest Styles: Stay ahead of the curve with our newest
            arrivals
          </p>
        </div>

        <VisibleProduct products={products} />
      </div>
    </section>
  );
}
