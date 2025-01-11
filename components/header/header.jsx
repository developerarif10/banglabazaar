"use client";
import {
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Search,
  ShoppingCart,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Header() {
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <div className="flex gap-2 ">
            <a
              href="javascript:;"
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <Facebook />
            </a>
            <a
              href="javascript:;"
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <Instagram />
            </a>
            <a
              href="javascript:;"
              className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
            >
              <Twitter />
            </a>
          </div>
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <p>Summer sale discount off 70%</p>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <Image fill src="./assets/images/country/de.svg" />{" "}
                <span>USA</span>
              </SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <header>
        {/* <!-- lg+ --> */}
        <div className="relative bg-black">
          {/* <div className="absolute inset-0">
          <Image
            width={100}
            height={80}
            className="object-cover w-full h-full"
            src="./assets/images/logo/logo.svg"
            alt=""
          />
        </div> */}

          {/* <div className="absolute inset-0 bg-black/30"></div> */}

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <Link href="/" title="" className="flex">
                  <Image
                    width={100}
                    height={100}
                    // className="w-auto h-8 lg:h-10"
                    src="/./assets/images/logo/logo-white@2x.png"
                    alt="Logo"
                  />
                </Link>
              </div>

              <button
                type="button"
                className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                <Link
                  href="#"
                  title=""
                  className="text-base font-medium flex gap-1 text-white"
                >
                  Home
                  <ChevronDown />
                </Link>

                <Link
                  href="#"
                  title=""
                  className="text-base flex gap-1 font-medium text-white"
                >
                  Shop <ChevronDown />
                </Link>

                <Link
                  href="#"
                  title=""
                  className="text-base font-medium flex gap-1 text-white"
                >
                  Products
                  <ChevronDown />
                </Link>

                <Link
                  href="#"
                  title=""
                  className="text-base font-medium text-white"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  title=""
                  className="text-base font-medium text-white"
                >
                  Buy ow
                </Link>
              </div>

              <div className="text-white flex">
                <div className="flex gap-2">
                  <Search />
                  <User />
                  <Heart />
                  <ShoppingCart />
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- xs to lg --> */}
        <nav className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col flex-grow h-full">
            <nav className="flex flex-col flex-1 mt-10 space-y-2">
              <Link
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Home
              </Link>

              <Link
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Shop
              </Link>

              <Link
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Products
              </Link>

              <Link
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Blog
              </Link>
              <Link
                href="#"
                title=""
                className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                Buy ow
              </Link>
            </nav>

            <div className="flex flex-col items-start">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500"
                role="button"
              >
                {" "}
                Join Now{" "}
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
