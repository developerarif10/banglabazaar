"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.loginModal to open it
  if (typeof window !== "undefined") {
    window.loginModal = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-medium">Log in</h2>
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Login with", email, password);
              // Handle login logic
            }}
          >
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-md peer pt-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-muted-foreground duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Email *
                </label>
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-md peer pt-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-muted-foreground duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Password *
                </label>
              </div>
            </div>

            <div className="mb-6">
              <button
                type="button"
                className="text-primary hover:underline text-sm"
                onClick={() => {
                  setIsOpen(false);
                  // Open forgot password modal
                  if (
                    typeof window !== "undefined" &&
                    window.forgotPasswordModal
                  ) {
                    window.forgotPasswordModal.open();
                  }
                }}
              >
                Forgot your password?
              </button>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full btn-fill py-2 rounded-md font-medium"
              >
                Log in
              </button>

              <button
                type="button"
                className="w-full text-primary font-semibold flex items-center justify-center gap-1"
                onClick={() => {
                  setIsOpen(false);
                  // Open register modal
                  if (typeof window !== "undefined" && window.registerModal) {
                    window.registerModal.open();
                  }
                }}
              >
                New customer? Create your account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8l4 4-4 4" />
                  <path d="M3 12h18" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
