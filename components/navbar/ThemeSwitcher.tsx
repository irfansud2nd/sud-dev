"use client";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      aria-label="Toggle theme"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <FiSun className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FiMoon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
export default ThemeSwitcher;
