import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs/index";

export default function ModeToggler() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const handleClick = () => {
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

  return (
    <button
      className="hover:bg-light-200 dark:hover:bg-dark-200 flex h-10 w-10 rounded-md active:scale-90 justify-center items-center"
      onClick={handleClick}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
