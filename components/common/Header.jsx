"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`py-4 ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all"
            : "relative"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="Open menu"
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
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/logo.svg" alt="Ecomus" width={120} height={40} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block flex-1">
              <ul className="flex justify-center items-center gap-8">
                <li className="relative group">
                  <Link
                    href="/"
                    className="flex items-center gap-1 py-2 hover:text-black"
                  >
                    Home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 w-[200px]">
                    <Link href="/" className="block py-2 hover:text-black">
                      Home Style 1
                    </Link>
                    <Link
                      href="/home-2"
                      className="block py-2 hover:text-black"
                    >
                      Home Style 2
                    </Link>
                    <Link
                      href="/home-3"
                      className="block py-2 hover:text-black"
                    >
                      Home Style 3
                    </Link>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    href="/shop"
                    className="flex items-center gap-1 py-2 hover:text-black"
                  >
                    Shop
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 w-[200px]">
                    <Link href="/shop" className="block py-2 hover:text-black">
                      Shop Grid
                    </Link>
                    <Link
                      href="/shop-list"
                      className="block py-2 hover:text-black"
                    >
                      Shop List
                    </Link>
                    <Link
                      href="/shop-filter"
                      className="block py-2 hover:text-black"
                    >
                      Shop Filter
                    </Link>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    href="/products"
                    className="flex items-center gap-1 py-2 hover:text-black"
                  >
                    Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 w-[200px]">
                    <Link
                      href="/product/1"
                      className="block py-2 hover:text-black"
                    >
                      Product Simple
                    </Link>
                    <Link
                      href="/product/2"
                      className="block py-2 hover:text-black"
                    >
                      Product Variable
                    </Link>
                    <Link
                      href="/product/3"
                      className="block py-2 hover:text-black"
                    >
                      Product Grouped
                    </Link>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    href="/pages"
                    className="flex items-center gap-1 py-2 hover:text-black"
                  >
                    Pages
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 w-[200px]">
                    <Link href="/about" className="block py-2 hover:text-black">
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-2 hover:text-black"
                    >
                      Contact Us
                    </Link>
                    <Link href="/faq" className="block py-2 hover:text-black">
                      FAQ
                    </Link>
                  </div>
                </li>
                <li className="relative group">
                  <Link
                    href="/blog"
                    className="flex items-center gap-1 py-2 hover:text-black"
                  >
                    Blog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 hidden group-hover:block z-10 w-[200px]">
                    <Link href="/blog" className="block py-2 hover:text-black">
                      Blog Grid
                    </Link>
                    <Link
                      href="/blog-list"
                      className="block py-2 hover:text-black"
                    >
                      Blog List
                    </Link>
                    <Link
                      href="/blog/1"
                      className="block py-2 hover:text-black"
                    >
                      Blog Single
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className="hover:text-black"
                aria-label="Search"
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
              </button>
              <button
                onClick={() => console.log("Login modal")}
                className="hover:text-black"
                aria-label="Account"
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
              </button>
              <Link href="/wishlist" className="relative hover:text-black">
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
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => console.log("Cart modal")}
                className="relative hover:text-black"
                aria-label="Cart"
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
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Search</h2>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
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
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
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
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
