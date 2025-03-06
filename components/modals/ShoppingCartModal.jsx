"use client";

import { FileText, Gift, Truck, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingCartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirt",
      variant: "Light gray",
      price: 25.0,
      quantity: 1,
      image: "/images/products/white-2.jpg",
    },
    {
      id: 2,
      name: "Oversized Motif T-shirt",
      variant: "",
      price: 25.0,
      quantity: 1,
      image: "/images/products/white-3.jpg",
    },
  ]);

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.shoppingCartModal to open it
  if (typeof window !== "undefined") {
    window.shoppingCartModal = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Shopping cart</h2>
              <button onClick={() => setIsOpen(false)} className="p-1">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="p-4 bg-secondary">
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-primary"
                style={{ width: "50%" }}
              ></div>
              <div
                className="absolute top-0 left-0 h-full flex items-center"
                style={{ left: "50%" }}
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center -ml-3 shadow-md">
                  <Truck className="h-3 w-3" />
                </div>
              </div>
            </div>
            <p className="text-sm mt-2">
              Buy <span className="font-semibold">$75.00</span> more to enjoy{" "}
              <span className="font-semibold">Free Shipping</span>
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`/product/${item.id}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.variant && (
                        <div className="text-sm text-muted-foreground">
                          {item.variant}
                        </div>
                      )}
                      <div className="font-semibold mt-1">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex border border-border rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            onChange={(e) => {
                              const value = Number.parseInt(e.target.value);
                              if (!isNaN(value)) {
                                updateQuantity(item.id, value);
                              }
                            }}
                            className="w-10 h-8 text-center border-x border-border"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Your cart is empty</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 btn-outline px-4 py-2 rounded-md"
                >
                  Continue shopping
                </button>
              </div>
            )}

            <div className="mt-8">
              <h3 className="font-medium mb-2">You may also like</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src="/images/products/white-3.jpg"
                      alt="Loose Fit Sweatshirt"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <Link
                      href="/product"
                      className="text-sm hover:text-primary transition-colors line-clamp-2"
                    >
                      Loose Fit Sweatshirt
                    </Link>
                    <div className="text-sm font-semibold mt-1">$25.00</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src="/images/products/white-2.jpg"
                      alt="Loose Fit Hoodie"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <Link
                      href="/product"
                      className="text-sm hover:text-primary transition-colors line-clamp-2"
                    >
                      Loose Fit Hoodie
                    </Link>
                    <div className="text-sm font-semibold mt-1">$25.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  <FileText className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  <Gift className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  <Truck className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-t border-border">
              <div>Subtotal</div>
              <div className="font-semibold">${subtotal.toFixed(2)} USD</div>
            </div>

            <div className="text-sm text-muted-foreground mb-4">
              Taxes and{" "}
              <Link href="/shipping" className="underline">
                shipping
              </Link>{" "}
              calculated at checkout
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" id="terms-checkbox" className="h-4 w-4" />
              <label htmlFor="terms-checkbox" className="text-sm">
                I agree with the{" "}
                <Link href="/terms" className="underline">
                  terms and conditions
                </Link>
              </label>
            </div>

            <div className="space-y-2">
              <Link
                href="/cart"
                className="block w-full btn-outline py-2 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                View cart
              </Link>
              <Link
                href="/checkout"
                className="block w-full btn-fill py-2 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Check out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
