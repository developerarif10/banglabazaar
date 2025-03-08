"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Oversized Printed T-shirt",
      price: 18.0,
      imageSrc: "/placeholder.svg?height=75&width=75",
      color: "White",
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      name: "Ribbed Tank Top",
      price: 18.0,
      imageSrc: "/placeholder.svg?height=75&width=75",
      color: "Orange",
      size: "S",
      quantity: 1,
    },
    {
      id: 3,
      name: "Regular Fit Oxford Shirt",
      price: 18.0,
      imageSrc: "/placeholder.svg?height=75&width=75",
      color: "Black",
      size: "L",
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const shipping = 5.0; // Assuming fixed shipping cost
  const total = subtotal + tax + shipping;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-5">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Image
                          src={item.imageSrc || "/placeholder.svg"}
                          alt={item.name}
                          width={75}
                          height={75}
                          className="mr-2"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Color: {item.color}
                          </p>
                          <p className="text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Button variant="outline" size="icon" className="mr-1">
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button variant="outline" size="icon" className="ml-1">
                          +
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>${item.price * item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4">
              <label
                htmlFor="cart-note"
                className="block text-sm font-medium text-gray-700"
              >
                Add Order Note
              </label>
              <textarea
                id="cart-note"
                name="note"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="How can we help you?"
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-200 pt-2 font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4">Check out</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
