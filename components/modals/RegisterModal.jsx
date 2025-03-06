"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function RegisterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This would be connected to a global state or context in a real app
  // For demo purposes, we'll use window.registerModal to open it
  if (typeof window !== "undefined") {
    window.registerModal = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-medium">Register</h2>
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(
                "Register with",
                firstName,
                lastName,
                email,
                password
              );
              // Handle registration logic
            }}
          >
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-md peer pt-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder=" "
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-sm text-muted-foreground duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  First name
                </label>
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-md peer pt-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder=" "
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-sm text-muted-foreground duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Last name
                </label>
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="registerEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-md peer pt-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="registerEmail"
                  className="absolute text-sm text-muted-foreground duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Email *
                </label>
              </div>
            </div>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="password"
                  id="registerPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-md peer pt-6 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="registerPassword"
                  className="absolute text-sm text-muted-foreground duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Password *
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full btn-fill py-2 rounded-md font-medium"
              >
                Register
              </button>

              <button
                type="button"
                className="w-full text-primary font-semibold flex items-center justify-center gap-1"
                onClick={() => {
                  setIsOpen(false);
                  // Open login modal
                  if (typeof window !== "undefined" && window.loginModal) {
                    window.loginModal.open();
                  }
                }}
              >
                Already have an account? Log in here
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
