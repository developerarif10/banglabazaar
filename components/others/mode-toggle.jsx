"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(theme === "light" ? "dark" : "light");
      return;
    }
    document.startViewTransition(() => {
      setTheme(theme === "light" ? "dark" : "light");
    });
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-[1.8rem] h-[1.8rem] border dark:border-gray-700"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1rem] w-[1rem] transition-all ${
          theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute h-[1rem] w-[1rem] transition-all ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
    </Button>
  );
}
