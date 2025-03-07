import { User } from "lucide-react";
import Link from "next/link";

export default function MyAccount() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <User className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-xl font-bold">Hello Themesflat</h2>
      </div>

      <p className="text-gray-600 mb-6">
        From your account dashboard you can view your{" "}
        <Link
          href="/my-account/orders"
          className="text-primary hover:underline font-medium"
        >
          recent orders
        </Link>
        , manage your{" "}
        <Link
          href="/my-account/addresses"
          className="text-primary hover:underline font-medium"
        >
          shipping and billing addresses
        </Link>
        , and{" "}
        <Link
          href="/my-account/edit"
          className="text-primary hover:underline font-medium"
        >
          edit your password and account details
        </Link>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">Recent Orders</h3>
          <p className="text-sm text-gray-500 mb-3">
            View and track your recent purchases
          </p>
          <Link
            href="/my-account/orders"
            className="text-primary text-sm hover:underline inline-flex items-center gap-1"
          >
            View Orders
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">Saved Addresses</h3>
          <p className="text-sm text-gray-500 mb-3">
            Manage your shipping and billing information
          </p>
          <Link
            href="/my-account/addresses"
            className="text-primary text-sm hover:underline inline-flex items-center gap-1"
          >
            Manage Addresses
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">Account Details</h3>
          <p className="text-sm text-gray-500 mb-3">
            Update your personal information and password
          </p>
          <Link
            href="/my-account/edit"
            className="text-primary text-sm hover:underline inline-flex items-center gap-1"
          >
            Edit Details
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">Wishlist</h3>
          <p className="text-sm text-gray-500 mb-3">
            View and manage your saved items
          </p>
          <Link
            href="/my-account/wishlist"
            className="text-primary text-sm hover:underline inline-flex items-center gap-1"
          >
            View Wishlist
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
