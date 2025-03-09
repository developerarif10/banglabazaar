import { ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* 404 Image */}
        <div className="mb-8">
          <img
            src="/images/item/404.svg"
            alt="404 illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Oops...That link is broken.
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Sorry for the inconvenience. Go to our homepage to check out our
          latest collections.
        </p>

        {/* Shop Now Button */}
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          Shop now
        </a>
      </div>
    </div>
  );
}
