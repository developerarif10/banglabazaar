"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(5);

  // For demo purposes
  const categories = [
    {
      name: "Women",
      href: "/shop/women",
      featured: ["Dresses", "Tops", "Shoes"],
    },
    {
      name: "Men",
      href: "/shop/men",
      featured: ["Shirts", "Pants", "Accessories"],
    },
    { name: "Kids", href: "/shop/kids", featured: ["Boys", "Girls", "Baby"] },
    {
      name: "Home",
      href: "/shop/home",
      featured: ["Decor", "Furniture", "Kitchen"],
    },
  ];

  const pages = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

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
    <header
      className={cn(
        "w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 transition-all duration-200",
        "dark:bg-background/80 dark:border-border/20",
        isScrolled
          ? "fixed top-0 left-0 right-0 shadow-sm dark:shadow-none dark:border-b"
          : ""
      )}
    >
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[350px] overflow-y-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border dark:bg-background/80"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="py-4">
                    <div className="mb-4">
                      <Input
                        placeholder="Search products..."
                        className="w-full"
                      />
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="home">
                        <AccordionTrigger className="py-3">
                          Home
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-2">
                            <Link
                              href="/"
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              Home Style 1
                            </Link>
                            <Link
                              href="/home-2"
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              Home Style 2
                            </Link>
                            <Link
                              href="/home-3"
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              Home Style 3
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      {categories.map((category) => (
                        <AccordionItem
                          key={category.name}
                          value={category.name.toLowerCase()}
                        >
                          <AccordionTrigger className="py-3">
                            {category.name}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-4 space-y-2">
                              {category.featured.map((item) => (
                                <Link
                                  key={item}
                                  href={`${category.href}/${item
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                  className="block py-2 text-muted-foreground hover:text-foreground"
                                >
                                  {item}
                                </Link>
                              ))}
                              <Link
                                href={category.href}
                                className="block py-2 font-medium text-primary"
                              >
                                View All {category.name}
                              </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}

                      <AccordionItem value="pages">
                        <AccordionTrigger className="py-3">
                          Pages
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-2">
                            {pages.map((page) => (
                              <Link
                                key={page.name}
                                href={page.href}
                                className="block py-2 text-muted-foreground hover:text-foreground"
                              >
                                {page.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="blog">
                        <AccordionTrigger className="py-3">
                          Blog
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-2">
                            <Link
                              href="/blog"
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              Blog Grid
                            </Link>
                            <Link
                              href="/blog-list"
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              Blog List
                            </Link>
                            <Link
                              href="/blog/1"
                              className="block py-2 text-muted-foreground hover:text-foreground"
                            >
                              Blog Single
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                <div className="border-t border-border/40 dark:border-border/20 pt-4 space-y-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone size={16} className="text-muted-foreground" />
                      <a
                        href="tel:+12125551234"
                        className="hover:text-primary transition-colors"
                      >
                        (212) 555-1234
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail size={16} className="text-muted-foreground" />
                      <a
                        href="mailto:info@ecomus.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@ecomus.com
                      </a>
                    </div>
                    <div className="flex items-start space-x-2 text-sm">
                      <MapPin
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-muted-foreground"
                      />
                      <span className="text-muted-foreground">
                        1234 Fashion Street, Suite 567, New York, NY 10001
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <Link href="/register">Register</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-24 sm:h-10 sm:w-28">
                <Image
                  src="/logo.svg"
                  alt="Ecomus"
                  fill
                  className="object-contain dark:invert"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>

            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                  {category.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-[200px] p-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border dark:bg-background/80"
                >
                  {category.featured.map((item) => (
                    <DropdownMenuItem key={item} asChild>
                      <Link
                        href={`${category.href}/${item
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {item}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                    asChild
                    className="font-medium text-primary"
                  >
                    <Link href={category.href}>View All {category.name}</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Pages
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-[200px] p-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border dark:bg-background/80"
              >
                {pages.map((page) => (
                  <DropdownMenuItem key={page.name} asChild>
                    <Link href={page.href}>{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center">
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border dark:bg-background/80">
                <DialogHeader>
                  <DialogTitle>Search Products</DialogTitle>
                </DialogHeader>
                <div className="relative mt-4">
                  <Input
                    placeholder="Search for products..."
                    className="pr-10"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Popular Searches</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Dresses",
                      "T-shirts",
                      "Sneakers",
                      "Jeans",
                      "Accessories",
                    ].map((term) => (
                      <Button
                        key={term}
                        variant="outline"
                        size="sm"
                        onClick={() => console.log(`Search for ${term}`)}
                      >
                        {term}
                      </Button>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hidden sm:flex"
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[200px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border dark:bg-background/80"
              >
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary relative hidden sm:flex"
              asChild
            >
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {wishlistCount}
                  </Badge>
                )}
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary relative"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {cartCount}
                    </Badge>
                  )}
                  <span className="sr-only">Cart</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border dark:bg-background/80"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b border-border/40 dark:border-border/20">
                    <h2 className="text-lg font-semibold">
                      Shopping Cart ({cartCount})
                    </h2>
                    <Button variant="ghost" size="sm">
                      Clear All
                    </Button>
                  </div>

                  <div className="flex-1 overflow-auto py-6">
                    {[1, 2].map((item) => (
                      <div key={item} className="flex gap-4 mb-6">
                        <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          <Image
                            src={`/placeholder.svg?height=80&width=80&text=Product+${item}`}
                            alt={`Product ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">
                                Product Name {item}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Size: M | Color: Black
                              </p>
                              <div className="flex items-center mt-1">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-6 w-6 rounded-full"
                                >
                                  <span>-</span>
                                </Button>
                                <span className="mx-2 text-sm">1</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-6 w-6 rounded-full"
                                >
                                  <span>+</span>
                                </Button>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">$99.00</p>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 mt-1"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border/40 dark:border-border/20 pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span className="font-medium">$198.00</span>
                    </div>
                    <div className="flex justify-between mb-6">
                      <span>Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>

                    <Button className="w-full mb-2">Checkout</Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/cart">View Cart</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
