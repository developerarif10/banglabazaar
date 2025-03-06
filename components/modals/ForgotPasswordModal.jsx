"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.forgotPasswordModal to open it
  if (typeof window !== "undefined") {
    window.forgotPasswordModal = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }

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
      setMessage({
        text: "Password reset instructions have been sent to your email.",
        type: "success",
      });
    } catch (error) {
      setMessage({
        text: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-medium">Reset your password</h2>
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="mb-4 text-muted-foreground">
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="resetEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-md peer pt-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="resetEmail"
                  className="absolute text-sm text-muted-foreground duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Email *
                </label>
              </div>
            </div>

            {message && (
              <div
                className={`mb-4 p-3 rounded-md ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <div className="mb-4">
              <button
                type="button"
                className="text-primary hover:underline text-sm"
                onClick={() => {
                  setIsOpen(false);
                  // Open login modal
                  if (typeof window !== "undefined" && window.loginModal) {
                    window.loginModal.open();
                  }
                }}
              >
                Cancel
              </button>
            </div>

            <button
              type="submit"
              className="w-full btn-fill py-2 rounded-md font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Sending...
                </span>
              ) : (
                "Reset password"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
