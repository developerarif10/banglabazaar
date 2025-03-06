import {
  Facebook,
  Instagram,
  TwitterIcon as TikTok,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "../forms/NewsLetterForm";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/">
                <Image src="/logo.svg" alt="Ecomus" width={120} height={40} />
              </Link>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <p>
                  Address: 1234 Dhaka Motijheel, Suite 567, <br /> Bangladesh
                </p>
              </li>
              <li>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@banglabazaar.com"
                    className="hover:text-primary"
                  >
                    info@banglabazaar.com
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Phone:{" "}
                  <a href="tel:2125551234" className="hover:text-primary">
                    +008 16443-433944
                  </a>
                </p>
              </li>
            </ul>
            <Link
              href="/contact"
              className="btn-line inline-flex items-center mt-4"
            >
              Get direction<i className="ml-2">→</i>
            </Link>
            <ul className="flex gap-2.5 mt-6">
              <li>
                <a
                  href="#"
                  className="box-icon w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <TikTok className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h6 className="font-semibold text-lg mb-4">Help</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery-return"
                  className="text-muted-foreground hover:text-primary"
                >
                  Returns + Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-delivery"
                  className="text-muted-foreground hover:text-primary"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-muted-foreground hover:text-primary"
                >
                  Compare
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="text-muted-foreground hover:text-primary"
                >
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* About us */}
          <div>
            <h6 className="font-semibold text-lg mb-4">About us</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-primary"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/our-store"
                  className="text-muted-foreground hover:text-primary"
                >
                  Visit Our Store
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-primary"
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="font-semibold text-lg mb-4">Sign Up for Email</h6>
            <p className="text-muted-foreground mb-4">
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events and more!
            </p>
            <NewsletterForm />

            <div className="flex gap-4 mt-6">
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm">
                  <Image
                    src="/images/country/us.svg"
                    width={16}
                    height={16}
                    alt="US"
                    className="mr-1"
                  />
                  USD
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 text-sm">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Ecomus Store. All Rights Reserved
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/payments/visa.png"
                width={40}
                height={24}
                alt="Visa"
              />
              <Image
                src="/images/payments/img-1.png"
                width={40}
                height={24}
                alt="Mastercard"
              />
              <Image
                src="/images/payments/img-2.png"
                width={40}
                height={24}
                alt="Amex"
              />
              <Image
                src="/images/payments/img-3.png"
                width={40}
                height={24}
                alt="PayPal"
              />
              <Image
                src="/images/payments/img-4.png"
                width={40}
                height={24}
                alt="Apple Pay"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
