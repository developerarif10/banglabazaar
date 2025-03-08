import { getAllProducts } from "@/queries/product.queries";
import ShopClient from "./_components/ShopClient";

// Sample product data
// const products = [
//   {
//     id: 1,
//     name: "Ribbed Tank Top",
//     price: 16.95,
//     images: ["/images/products/orange-1.jpg", "/images/products/white-1.jpg"],
//     colors: [
//       {
//         name: "Orange",
//         value: "bg-orange-3",
//         image: "/images/products/orange-1.jpg",
//       },
//       {
//         name: "Black",
//         value: "bg-black",
//         image: "/images/products/black-1.jpg",
//       },
//       {
//         name: "White",
//         value: "bg-white",
//         image: "/images/products/white-1.jpg",
//       },
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     availability: "In stock",
//     brand: "Ecomus",
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
//   {
//     id: 2,
//     name: "Ribbed modal T-shirt",
//     price: 18.95,
//     images: ["/images/products/brown.jpg", "/images/products/purple.jpg"],
//     colors: [
//       { name: "Brown", value: "bg-brown", image: "/images/products/brown.jpg" },
//       {
//         name: "Light Purple",
//         value: "bg-purple",
//         image: "/images/products/purple.jpg",
//       },
//       {
//         name: "Light Green",
//         value: "bg-light-green",
//         image: "/images/products/green.jpg",
//       },
//     ],
//     sizes: ["M", "L", "XL"],
//     availability: "In stock",
//     brand: "Ecomus",
//     countdown: true,
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
//   {
//     id: 3,
//     name: "Oversized Printed T-shirt",
//     price: 10.0,
//     images: ["/images/products/white-3.jpg", "/images/products/white-4.jpg"],
//     availability: "In stock",
//     brand: "Ecomus",
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
//   {
//     id: 4,
//     name: "Oversized Printed T-shirt",
//     price: 16.95,
//     images: ["/images/products/white-2.jpg", "/images/products/pink-1.jpg"],
//     colors: [
//       {
//         name: "White",
//         value: "bg-white",
//         image: "/images/products/white-2.jpg",
//       },
//       {
//         name: "Pink",
//         value: "bg-purple",
//         image: "/images/products/pink-1.jpg",
//       },
//       {
//         name: "Black",
//         value: "bg-black",
//         image: "/images/products/black-2.jpg",
//       },
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     availability: "In stock",
//     brand: "Ecomus",
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
//   {
//     id: 5,
//     name: "V-neck linen T-shirt",
//     price: 114.95,
//     images: ["/images/products/brown-2.jpg", "/images/products/brown-3.jpg"],
//     colors: [
//       {
//         name: "Brown",
//         value: "bg-brown",
//         image: "/images/products/brown-2.jpg",
//       },
//       {
//         name: "White",
//         value: "bg-white",
//         image: "/images/products/white-5.jpg",
//       },
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     availability: "In stock",
//     brand: "Ecomus",
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
//   {
//     id: 6,
//     name: "Loose Fit Sweatshirt",
//     price: 10.0,
//     images: [
//       "/images/products/light-green-1.jpg",
//       "/images/products/light-green-2.jpg",
//     ],
//     colors: [
//       {
//         name: "Light Green",
//         value: "bg-light-green",
//         image: "/images/products/light-green-1.jpg",
//       },
//       {
//         name: "Black",
//         value: "bg-black",
//         image: "/images/products/black-3.jpg",
//       },
//       {
//         name: "Blue",
//         value: "bg-blue-500",
//         image: "/images/products/blue.jpg",
//       },
//       {
//         name: "Dark Blue",
//         value: "bg-dark-blue",
//         image: "/images/products/dark-blue.jpg",
//       },
//       {
//         name: "White",
//         value: "bg-white",
//         image: "/images/products/white-6.jpg",
//       },
//       {
//         name: "Light Grey",
//         value: "bg-light-grey",
//         image: "/images/products/light-grey.jpg",
//       },
//     ],
//     availability: "In stock",
//     brand: "M&H",
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
//   {
//     id: 7,
//     name: "Regular Fit Oxford Shirt",
//     price: 10.0,
//     images: ["/images/products/black-4.jpg", "/images/products/black-5.jpg"],
//     colors: [
//       {
//         name: "Black",
//         value: "bg-black",
//         image: "/images/products/black-4.jpg",
//       },
//       {
//         name: "Dark Blue",
//         value: "bg-dark-blue",
//         image: "/images/products/dark-blue-2.jpg",
//       },
//       { name: "Beige", value: "bg-beige", image: "/images/products/beige.jpg" },
//       {
//         name: "Light Blue",
//         value: "bg-light-blue",
//         image: "/images/products/light-blue.jpg",
//       },
//       {
//         name: "White",
//         value: "bg-white",
//         image: "/images/products/white-7.jpg",
//       },
//     ],
//     sizes: ["S", "M", "L"],
//     availability: "Out of stock",
//     brand: "M&H",
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
//   {
//     id: 8,
//     name: "Loose Fit Hoodie",
//     price: 9.95,
//     images: ["/images/products/white-8.jpg", "/images/products/black-6.jpg"],
//     colors: [
//       {
//         name: "White",
//         value: "bg-white",
//         image: "/images/products/white-8.jpg",
//       },
//       {
//         name: "Black",
//         value: "bg-black",
//         image: "/images/products/black-7.jpg",
//       },
//       {
//         name: "Blue",
//         value: "bg-blue-500",
//         image: "/images/products/blue-2.jpg",
//       },
//     ],
//     sizes: ["S", "M", "L", "XL"],
//     availability: "Out of stock",
//     brand: "M&H",
//     description:
//       "Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces...",
//   },
// ];

export default async function ShopPage() {
  const products = await getAllProducts();
  return (
    <div className="min-h-screen bg-white">
      {/* Page Title */}
      <div className="py-10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">New Arrival</h1>
          <p className="text-gray-600">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>

      <ShopClient products={products} />
    </div>
  );
}
