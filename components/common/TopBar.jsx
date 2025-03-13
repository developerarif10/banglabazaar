"use client";

import { cn } from "@/lib/utils";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import ModeToggle from "../others/mode-toggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopBar() {
  const [announcement, setAnnouncement] = useState(0);
  const announcements = [
    { text: "Spring Fashion Sale", link: "/shop" },
    { text: "Free shipping on orders over $50", link: "/shipping" },
    { text: "New arrivals every week", link: "/new-arrivals" },
  ];

  // Auto-rotate announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-30 dark:bg-background/80 dark:border-border/20">
      <div className="container py-2">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          {/* Social Icons - Hidden on mobile, visible on sm and up */}
          <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
            <Link
              href="#"
              className="h-7 w-7 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </Link>
            <Link
              href="#"
              className="h-7 w-7 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={15} />
            </Link>
            <Link
              href="#"
              className="h-7 w-7 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </Link>
            <Link
              href="#"
              className="h-7 w-7 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Github"
            >
              <Github size={15} />
            </Link>
            <Link
              href="#"
              className="h-7 w-7 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </Link>
          </div>

          {/* Announcement Slider - Centered on mobile */}
          <div
            className={cn(
              "flex-1 overflow-hidden text-center",
              "sm:flex-none sm:flex-grow sm:text-center",
              "md:flex-1"
            )}
          >
            <div className="relative h-6">
              {announcements.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-500 transform px-2",
                    index === announcement
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  )}
                >
                  <p className="text-xs sm:text-sm font-medium truncate">
                    {item.text}{" "}
                    <Link
                      href={item.link}
                      className="text-primary hover:underline ml-1 inline-flex items-center"
                    >
                      Shop now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Language & Theme */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <ModeToggle />
            <div className="relative z-10">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
