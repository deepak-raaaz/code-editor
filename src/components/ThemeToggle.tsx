// components/ThemeToggle.tsx
"use client";
import { useTheme } from "next-themes";
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 text-sm bg-gray-200 dark:bg-gray-800 rounded-md text-slate-600 dark:text-slate-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <IoIosSunny size={25} /> : <IoMoonSharp size={25} />}
    </button>
  );
};

export default ThemeToggle;
