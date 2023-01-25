import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // on theme change update <html/> class and local storage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  }
}