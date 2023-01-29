import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <AnimatePresence>
      <motion.button whileTap={{ scale: 0.95 }} onClick={toggleTheme}>
        {theme === "light" ? (
          <motion.div
            key="light"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 25, opacity: 0, scale: 0 }}
            className="flex flex-row items-center m-3"
          >
            <SunIcon className="w-8 h-8 p-1 bg-orange-300 rounded-lg" />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
            className="flex flex-row items-center m-3"
          >
            <MoonIcon className="w-8 h-8 p-1 bg-purple-400 rounded-lg" />
          </motion.div>
        )}
      </motion.button>
    </AnimatePresence>
  );
}
