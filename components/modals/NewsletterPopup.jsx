"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function NewsletterPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubscribed(true);
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        <div className="relative">
          <Image
            src="/images/item/banner-newleter.jpg"
            alt="Newsletter"
            width={500}
            height={250}
            className="w-full h-48 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Don't miss out</h2>
          <p className="text-muted-foreground mb-6">
            Be the first one to get the new product at early bird prices.
          </p>

          {isSubscribed ? (
            <div className="text-green-600 mb-6">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm">
                You'll be the first to know about our new products and special
                offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email...."
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-fill py-2 rounded-md font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    Subscribing...
                  </span>
                ) : (
                  "Keep me updated"
                )}
              </button>
            </form>
          )}

          <button
            onClick={onClose}
            className="text-primary hover:underline font-medium"
          >
            Not interested
          </button>
        </div>
      </div>
    </div>
  );
}
