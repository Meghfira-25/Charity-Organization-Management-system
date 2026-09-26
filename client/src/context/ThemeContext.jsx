import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeContext = createContext(null);
function getInitialTheme() {
  const savedTheme = window.localStorage.getItem("ishraq-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
export function ThemeProvider({
  children
}) {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("ishraq-theme", theme);
  }, [theme]);
  const value = useMemo(() => {
    return {
      theme,
      setTheme,
      toggleTheme: () => setTheme(currentTheme => currentTheme === "dark" ? "light" : "dark")
    };
  }, [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }
  return context;
}
