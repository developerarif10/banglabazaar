"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <Tabs
      defaultValue="description"
      className="w-full"
      onValueChange={setActiveTab}
    >
      <TabsList className="w-full border-b justify-start">
        <TabsTrigger
          value="description"
          className={`px-6 py-3 ${
            activeTab === "description" ? "border-b-2 border-primary" : ""
          }`}
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="additional"
          className={`px-6 py-3 ${
            activeTab === "additional" ? "border-b-2 border-primary" : ""
          }`}
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className={`px-6 py-3 ${
            activeTab === "reviews" ? "border-b-2 border-primary" : ""
          }`}
        >
          Reviews
        </TabsTrigger>
        <TabsTrigger
          value="shipping"
          className={`px-6 py-3 ${
            activeTab === "shipping" ? "border-b-2 border-primary" : ""
          }`}
        >
          Shipping
        </TabsTrigger>
        <TabsTrigger
          value="returns"
          className={`px-6 py-3 ${
            activeTab === "returns" ? "border-b-2 border-primary" : ""
          }`}
        >
          Return Policies
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-6">{product.description}</p>
            <div className="mb-6">
              <h3 className="text-base font-medium mb-2">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product?.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2">Materials Care</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Materials Care</h3>
            {product.careInstructions.map((instruction, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                  <i className={instruction.icon}></i>
                </div>
                <span>{instruction.text}</span>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="additional" className="pt-6">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <th className="text-left py-3 pr-4 w-1/4">Color</th>
              <td className="py-3">
                <p>{product.colors.map((c) => c.name).join(", ")}</p>
              </td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 pr-4">Size</th>
              <td className="py-3">
                <p>{product.sizes.join(", ")}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </TabsContent>

      <TabsContent value="reviews" className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{product.rating}</h1>
            <div className="flex justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p>({product.reviewCount} Ratings)</p>
          </div>
          <div>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center">
                  <div className="w-8 text-sm text-right pr-2">{star}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{
                        width: star === 5 ? "95%" : star === 4 ? "60%" : "0%",
                      }}
                    ></div>
                  </div>
                  <div className="w-8 text-sm text-right pl-2">
                    {star === 5 ? "59" : star === 4 ? "46" : "0"}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <button className="text-primary font-semibold hover:underline">
                Cancel Review
              </button>
              <button className="px-4 py-2 border border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors">
                Write a review
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between mb-6">
            <h3 className="font-semibold">03 Comments</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="border-none bg-transparent font-medium">
                <option>Most Recent</option>
                <option>Oldest</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex gap-4 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">
                    Superb quality apparel that exceeds expectations
                  </h4>
                  <div className="text-sm text-gray-500">1 days ago</div>
                </div>
              </div>
              <p className="text-gray-600">
                Great theme - we were looking for a theme with lots of built in
                features and flexibility and this was perfect. We expected to
                need to employ a developer to add a few finishing touches. But
                we actually managed to do everything ourselves. We did have one
                small query and the support given was swift and helpful.
              </p>
            </div>

            <div className="border-b pb-6 pl-12">
              <div className="flex gap-4 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Seller"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Reply from Modave</h4>
                  <div className="text-sm text-gray-500">1 days ago</div>
                </div>
              </div>
              <p className="text-gray-600">
                We love to hear it! Part of what we love most about Modave is
                how much it empowers store owners like yourself to build a
                beautiful website without having to hire a developer :) Thank
                you for this fantastic review!
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="shipping" className="pt-6">
        <div className="prose max-w-none">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              The Company Private Limited Policy
            </h3>
            <p>
              The Company Private Limited and each of their respective
              subsidiary, parent and affiliated companies is deemed to operate
              this Website ("we" or "us") recognizes that you care how
              information about you is used and shared. We have created this
              Privacy Policy to inform you what information we collect on the
              Website, how we use your information and the choices you have
              about the way your information is collected and used. Please read
              this Privacy Policy carefully. Your use of the Website indicates
              that you have read and accepted our privacy practices, as outlined
              in this Privacy Policy.
            </p>
            <p>
              Please be advised that the practices described in this Privacy
              Policy apply to information gathered by us or our subsidiaries,
              affiliates or agents: (i) through this Website, (ii) where
              applicable, through our Customer Service Department in connection
              with this Website, (iii) through information provided to us in our
              free standing retail stores, and (iv) through information provided
              to us in conjunction with marketing promotions and sweepstakes.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="returns" className="pt-6">
        <div className="flex justify-center mb-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((icon) => (
              <div
                key={icon}
                className="w-9 h-9 flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 40 40"
                  width="35px"
                  height="35px"
                  color="#222"
                >
                  <path
                    fill="currentColor"
                    d="M8.7 30.7h22.7c.3 0 .6-.2.7-.6l4-25.3c-.1-.4-.3-.7-.7-.8s-.7.2-.8.6L34 8.9l-3-1.1c-2.4-.9-5.1-.5-7.2 1-2.3 1.6-5.3 1.6-7.6 0-2.1-1.5-4.8-1.9-7.2-1L6 8.9l-.7-4.3c0-.4-.4-.7-.7-.6-.4.1-.6.4-.6.8l4 25.3c.1.3.3.6.7.6zm.8-21.6c2-.7 4.2-.4 6 .8 1.4 1 3 1.5 4.6 1.5s3.2-.5 4.6-1.5c1.7-1.2 4-1.6 6-.8l3.3 1.2-3 19.1H9.2l-3-19.1 3.3-1.2zM32 32H8c-.4 0-.7.3-.7.7s.3.7.7.7h24c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm0 2.7H8c-.4 0-.7.3-.7.7s.3.6.7.6h24c.4 0 .7-.3.7-.7s-.3-.6-.7-.6z"
                  ></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-600 mb-6">
          LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt
        </p>
      </TabsContent>
    </Tabs>
  );
}
