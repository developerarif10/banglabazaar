"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const toggleSubmenu = (submenuId) => {
    setActiveSubmenu(activeSubmenu === submenuId ? null : submenuId);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="mt-12">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => toggleMenu("home")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200"
              >
                <span className="font-medium">Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    activeMenu === "home" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {activeMenu === "home" && (
                <div className="py-2 pl-4 space-y-2">
                  <Link
                    href="/"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Home Style 1
                  </Link>
                  <Link
                    href="/home-2"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Home Style 2
                  </Link>
                  <Link
                    href="/home-3"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Home Style 3
                  </Link>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleMenu("shop")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200"
              >
                <span className="font-medium">Shop</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    activeMenu === "shop" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {activeMenu === "shop" && (
                <div className="py-2 pl-4 space-y-2">
                  <button
                    onClick={() => toggleSubmenu("shop-layouts")}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>Shop layouts</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${
                        activeSubmenu === "shop-layouts" ? "rotate-90" : ""
                      }`}
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>

                  {activeSubmenu === "shop-layouts" && (
                    <div className="py-2 pl-4 space-y-2">
                      <Link
                        href="/shop"
                        className="block py-2 text-gray-600"
                        onClick={onClose}
                      >
                        Default
                      </Link>
                      <Link
                        href="/shop-left-sidebar"
                        className="block py-2 text-gray-600"
                        onClick={onClose}
                      >
                        Left sidebar
                      </Link>
                      <Link
                        href="/shop-right-sidebar"
                        className="block py-2 text-gray-600"
                        onClick={onClose}
                      >
                        Right sidebar
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={() => toggleSubmenu("shop-features")}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span>Features</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${
                        activeSubmenu === "shop-features" ? "rotate-90" : ""
                      }`}
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>

                  {activeSubmenu === "shop-features" && (
                    <div className="py-2 pl-4 space-y-2">
                      <Link
                        href="/shop-link"
                        className="block py-2 text-gray-600"
                        onClick={onClose}
                      >
                        Pagination links
                      </Link>
                      <Link
                        href="/shop-loadmore"
                        className="block py-2 text-gray-600"
                        onClick={onClose}
                      >
                        Pagination loadmore
                      </Link>
                      <Link
                        href="/shop-filter"
                        className="block py-2 text-gray-600"
                        onClick={onClose}
                      >
                        Filter sidebar
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleMenu("products")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200"
              >
                <span className="font-medium">Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    activeMenu === "products" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {activeMenu === "products" && (
                <div className="py-2 pl-4 space-y-2">
                  <Link
                    href="/product/1"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Product Simple
                  </Link>
                  <Link
                    href="/product/2"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Product Variable
                  </Link>
                  <Link
                    href="/product/3"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Product Grouped
                  </Link>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleMenu("pages")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200"
              >
                <span className="font-medium">Pages</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    activeMenu === "pages" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {activeMenu === "pages" && (
                <div className="py-2 pl-4 space-y-2">
                  <Link
                    href="/about"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => toggleMenu("blog")}
                className="flex items-center justify-between w-full py-2 border-b border-gray-200"
              >
                <span className="font-medium">Blog</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform ${
                    activeMenu === "blog" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {activeMenu === "blog" && (
                <div className="py-2 pl-4 space-y-2">
                  <Link
                    href="/blog"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Blog Grid
                  </Link>
                  <Link
                    href="/blog-list"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Blog List
                  </Link>
                  <Link
                    href="/blog/1"
                    className="block py-2 text-gray-600"
                    onClick={onClose}
                  >
                    Blog Single
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href="https://themeforest.net"
                className="block py-2 border-b border-gray-200 font-medium"
                onClick={onClose}
              >
                Buy now
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/wishlist"
            className="flex items-center gap-2 text-gray-600"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            Wishlist
          </Link>
          <Link
            href="/search"
            className="flex items-center gap-2 text-gray-600"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
          </Link>
        </div>

        <div className="mt-8">
          <div className="text-gray-600">Need help?</div>
          <Link
            href="/contact"
            className="text-black font-medium"
            onClick={onClose}
          >
            Contact us
          </Link>
        </div>

        <div className="mt-4 space-y-2 text-gray-600">
          <p>
            Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@ecomus.com" className="text-black">
              info@ecomus.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:2125551234" className="text-black">
              (212) 555-1234
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4 flex justify-between items-center">
        <Link
          href="/login"
          className="flex items-center gap-2"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Login
        </Link>

        <div className="flex gap-4">
          <div className="relative">
            <button className="flex items-center gap-1 text-sm">
              <span className="w-4 h-4 bg-blue-900 rounded-full inline-block mr-1"></span>
              USD
            </button>
          </div>

          <div className="relative">
            <button className="flex items-center gap-1 text-sm">English</button>
          </div>
        </div>
      </div>
    </div>
  );
}
