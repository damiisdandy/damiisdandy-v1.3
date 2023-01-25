import { BsSun, BsMoon } from "react-icons/bs/index";
import useTheme from "../hooks/useTheme";

export default function ModeToggler() {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      className="hover:bg-light-200 dark:hover:bg-dark-200 flex h-10 w-10 rounded-md active:scale-90 justify-center items-center"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
