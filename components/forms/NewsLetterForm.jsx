"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage({ text: "Please enter your email address", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage({ text: "Thank you for subscribing!", type: "success" });
      setEmail("");
    } catch (error) {
      setMessage({
        text: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email...."
          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-fill absolute right-1 top-1 px-4 py-1 rounded-md"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {message && (
        <p
          className={
            message.type === "success" ? "text-green-600" : "text-red-600"
          }
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
