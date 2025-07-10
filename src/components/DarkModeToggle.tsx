"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // initially null

  useEffect(() => {
    // On mount: check localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return; // prevent running on initial render before state is loaded

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (darkMode === null) return null; // don't render toggle until loaded

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-4">
      {darkMode ? <Moon fill="white" strokeWidth={0} /> : <Sun fill="black" />}
    </button>
  );
};

export default DarkModeToggle;
