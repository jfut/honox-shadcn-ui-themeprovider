// "use client";

// Based on https://ui.shadcn.com/docs/dark-mode/vite

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "hono-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  console.log(theme);

  useEffect(() => {
    console.log("useEffect localStorage: 1");
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    if (storedTheme) {
      console.log("useEffect localStorage: storedTheme");
      console.log(storedTheme);
      setTheme(storedTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    console.log("useEffect CSS: 1");
    const root = window.document.documentElement;
    console.log("useEffect CSS: root");
    console.log(root);

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      console.log("useEffect CSS: systemTheme");
      console.log(systemTheme);
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const handleChangeTheme = (newTheme: Theme) => {
    console.log("handleChangeTheme: 1");
    localStorage.setItem(storageKey, newTheme);
    console.log("handleChangeTheme: newTheme");
    console.log(newTheme);
    setTheme(newTheme);
  };

  const value = {
    theme,
    setTheme: handleChangeTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  console.log("useTheme: context");
  console.log(context);
  console.log("useTheme: context.theme");
  console.log(context.theme);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
