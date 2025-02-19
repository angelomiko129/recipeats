import { useState, useEffect } from "react";
import logowhite from "@images/logo/logowhite.svg";
import logoblack from "@images/logo/logoblack.svg";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return {
    isDarkMode,
    logo: isDarkMode ? logowhite : logoblack,
    toggleTheme: () => setIsDarkMode((prev) => !prev),
  };
};
