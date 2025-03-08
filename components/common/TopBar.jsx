"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Social Icons */}
          <ul className="flex gap-2.5 justify-center md:justify-start">
            <li>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
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
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </li>
          </ul>

          {/* Announcement Slider */}
          <div className="text-center hidden md:block">
            <p className="font-medium">
              Spring Fashion Sale{" "}
              <Link
                href="/shop"
                className="text-black hover:underline ml-2 inline-flex items-center"
              >
                Shop now
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
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </p>
          </div>

          {/* Language & Currency */}
          <div className="flex justify-center md:justify-end gap-4">
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-black"
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
              >
                {currency === "USD" && (
                  <span className="w-4 h-4 bg-blue-900 rounded-full inline-block mr-1"></span>
                )}
                {currency}
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
              </button>
              {currencyDropdown && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-md p-2 z-10 w-48">
                  <button
                    onClick={() => {
                      setCurrency("EUR");
                      setCurrencyDropdown(false);
                    }}
                    className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded-md text-left"
                  >
                    <span className="w-4 h-4 bg-blue-600 rounded-full inline-block"></span>
                    EUR{" "}
                    <span className="text-xs text-gray-500">€ | France</span>
                  </button>
                  <button
                    onClick={() => {
                      setCurrency("USD");
                      setCurrencyDropdown(false);
                    }}
                    className="flex items-center gap-2 p-2 w-full hover:bg-gray-100 rounded-md text-left"
                  >
                    <span className="w-4 h-4 bg-blue-900 rounded-full inline-block"></span>
                    USD{" "}
                    <span className="text-xs text-gray-500">
                      $ | United States
                    </span>
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-black"
                onClick={() => setLanguageDropdown(!languageDropdown)}
              >
                {language}
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
              </button>
              {languageDropdown && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-md p-2 z-10 w-32">
                  <button
                    onClick={() => {
                      setLanguage("English");
                      setLanguageDropdown(false);
                    }}
                    className="p-2 w-full hover:bg-gray-100 rounded-md text-left"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("Bangla");
                      setLanguageDropdown(false);
                    }}
                    className="p-2 w-full hover:bg-gray-100 rounded-md text-left"
                  >
                    Bangla
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
