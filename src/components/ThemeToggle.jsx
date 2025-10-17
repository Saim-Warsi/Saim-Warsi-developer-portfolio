import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../pages/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeToggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <button className={cn("  top-5 right-5 z-50 p-2 rounded-full",
        " transition-colors duration-300 focus:outline-hidden cursor-pointer"
    )}
     onClick={themeToggle}>
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
