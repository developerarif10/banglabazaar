"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md mb-2">
      <button
        className="flex items-center justify-between w-full py-3 px-4 font-semibold text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && <div className="py-2 px-4 text-gray-700">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <main className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Quick Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#shopping-information"
                  className="text-blue-500 hover:underline"
                >
                  Shopping Information
                </a>
              </li>
              <li>
                <a
                  href="#payment-information"
                  className="text-blue-500 hover:underline"
                >
                  Payment Information
                </a>
              </li>
              <li>
                <a
                  href="#order-returns"
                  className="text-blue-500 hover:underline"
                >
                  Order Returns
                </a>
              </li>
              <li>
                <a href="#contact-us" className="text-blue-500 hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <section id="shopping-information" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Shopping Information
            </h2>
            <FAQItem
              question="Pellentesque habitant morbi tristique senectus et netus?"
              answer="The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <FAQItem
              question="How much is shipping and how long will it take?"
              answer="The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </section>

          <section id="payment-information" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <FAQItem
              question="Pellentesque habitant morbi tristique senectus et netus?"
              answer="The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <FAQItem
              question="How much is shipping and how long will it take?"
              answer="The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </section>

          <section id="order-returns" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Order Returns</h2>
            <FAQItem
              question="Pellentesque habitant morbi tristique senectus et netus?"
              answer="The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <FAQItem
              question="How much is shipping and how long will it take?"
              answer="The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </section>

          <section id="contact-us">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any other questions, please{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
