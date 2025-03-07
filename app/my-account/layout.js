"use client";

import {
  Heart,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function MyAccountLayout({ children }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      href: "/my-account",
      label: "Dashboard",
      icon: LayoutDashboard,
      active: pathname === "/my-account",
    },
    {
      href: "/my-account/orders",
      label: "Orders",
      icon: ShoppingBag,
      active: pathname === "/my-account/orders",
    },
    {
      href: "/my-account/addresses",
      label: "Addresses",
      icon: MapPin,
      active: pathname === "/my-account/addresses",
    },
    {
      href: "/my-account/edit",
      label: "Account Details",
      icon: User,
      active: pathname === "/my-account/edit",
    },
    {
      href: "/my-account/wishlist",
      label: "Wishlist",
      icon: Heart,
      active: pathname === "/my-account/wishlist",
    },
    {
      href: "/login",
      label: "Logout",
      icon: LogOut,
      active: false,
    },
  ];

  return (
    <SidebarProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          My Account
        </h1>

        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md w-full justify-center"
          >
            <Menu size={18} />
            <span>Account Menu</span>
          </button>

          {isMobileMenuOpen && (
            <div className="mt-2 bg-white shadow-lg rounded-md border p-2">
              <ul>
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 p-3 rounded-md ${
                        item.active
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="hidden md:block">
            <Sidebar
              variant="inset"
              collapsible="none"
              className="border rounded-lg shadow-sm"
            >
              <SidebarHeader className="p-4 border-b">
                <h2 className="text-lg font-semibold">Account Navigation</h2>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={item.active}
                        className={
                          item.label === "Logout"
                            ? "text-red-500 hover:text-red-600"
                            : ""
                        }
                      >
                        <Link href={item.href}>
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
