"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  {
    code: "en",
    language: "English",
    flag: "/images/country/us.png",
  },
  {
    code: "bn",
    language: "বাংলা",
    flag: "/images/country/bd.png",
  },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Find the current language from the pathname
  const currentLangCode = pathname.split("/")[1];
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === currentLangCode) || languages[0]
  );

  // Update selected language when pathname changes
  useEffect(() => {
    const langCode = pathname.split("/")[1];
    const lang = languages.find((l) => l.code === langCode);
    if (lang) {
      setSelectedLanguage(lang);
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const target = e.target;
      const button = document.getElementById("language-switcher-button");

      if (button && !button.contains(target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Use setTimeout to ensure this runs after the current click event
      setTimeout(() => {
        document.addEventListener("mousedown", handleOutsideClick);
      }, 0);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // Change language handler
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    router.push(`/${lang.code}/`);
    router.refresh();
  };

  return (
    <div className="relative">
      <button
        id="language-switcher-button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-colors"
      >
        <Image
          src={selectedLanguage.flag || "/placeholder.svg"}
          alt={selectedLanguage.language}
          width={20}
          height={20}
          className="rounded-full object-cover"
        />
        <span className="text-sm font-medium">{selectedLanguage.language}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute right-0 mt-2 w-48 rounded-lg border bg-popover shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-1">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onClick={() => handleLanguageChange(lang)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm",
                    "hover:bg-accent hover:text-accent-foreground transition-colors",
                    selectedLanguage.code === lang.code && "bg-accent/50"
                  )}
                >
                  <div className="relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={lang.language}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium">{lang.language}</span>
                  {selectedLanguage.code === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto h-2 w-2 rounded-full bg-primary"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
