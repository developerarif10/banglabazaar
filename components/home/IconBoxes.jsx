import { CreditCard, HeadphonesIcon, RotateCcw, Truck } from "lucide-react";

export default function IconBoxes() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-border rounded-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Free Shipping</h3>
            <p className="text-muted-foreground text-sm">
              Free shipping over order $120
            </p>
          </div>

          <div className="border border-border rounded-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Flexible Payment</h3>
            <p className="text-muted-foreground text-sm">
              Pay with Multiple Credit Cards
            </p>
          </div>

          <div className="border border-border rounded-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <RotateCcw className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">14 Day Returns</h3>
            <p className="text-muted-foreground text-sm">
              Within 30 days for an exchange
            </p>
          </div>

          <div className="border border-border rounded-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <HeadphonesIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Premium Support</h3>
            <p className="text-muted-foreground text-sm">
              Outstanding premium support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
