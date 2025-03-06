"use client";

import { Heart, Search, ShoppingBag, Store, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SearchCanvas from "../modals/SearchCanvas";

export default function ToolbarBottom() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-border py-2 px-4 grid grid-cols-5 gap-2 md:hidden z-50">
        <div className="toolbar-item flex flex-col items-center">
          <button
            onClick={() => console.log("Shop menu")}
            className="toolbar-icon flex flex-col items-center"
          >
            <Store className="h-5 w-5" />
            <div className="text-xs mt-1">Shop</div>
          </button>
        </div>

        <div className="toolbar-item flex flex-col items-center">
          <button
            onClick={() => setSearchOpen(true)}
            className="toolbar-icon flex flex-col items-center"
          >
            <Search className="h-5 w-5" />
            <div className="text-xs mt-1">Search</div>
          </button>
        </div>

        <div className="toolbar-item flex flex-col items-center">
          <button
            onClick={() => console.log("Login modal")}
            className="toolbar-icon flex flex-col items-center"
          >
            <User className="h-5 w-5" />
            <div className="text-xs mt-1">Account</div>
          </button>
        </div>

        <div className="toolbar-item flex flex-col items-center">
          <Link
            href="/wishlist"
            className="toolbar-icon flex flex-col items-center relative"
          >
            <Heart className="h-5 w-5" />
            <span className="absolute -top-2 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
            <div className="text-xs mt-1">Wishlist</div>
          </Link>
        </div>

        <div className="toolbar-item flex flex-col items-center">
          <button
            onClick={() => console.log("Cart modal")}
            className="toolbar-icon flex flex-col items-center relative"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
            <div className="text-xs mt-1">Cart</div>
          </button>
        </div>
      </div>

      <SearchCanvas isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
