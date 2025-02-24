"use client";

import Toggle from "@/components/ToggleScreenMode";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: Theme.LIGHT,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    console.log("Checking user preferences");
    const preferredTheme = localStorage.getItem("skillhabit__theme-mode");
    if (typeof preferredTheme === "string") {
      const theme = preferredTheme === "light" ? Theme.LIGHT : Theme.DARK;
      setTheme(theme);
      return;
    }

    console.log(`A new user! Welcome, there's no preferred
        theme stored, we're gonna fallback to your user preferences
        in the system defaults`);
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log(`The user's system points they prefer dark mode`);
      setTheme(Theme.DARK);
      return;
    }

    console.log(
      `The user is not picky,
       we're gonna arbitrarily set the default theme to light mode then`
    );
    setTheme(Theme.LIGHT);
  }, []);

  useEffect(() => {
    localStorage.setItem("skillhabit__theme-mode", theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      <html
        lang="en"
        className={`${montserrat.className} ${theme}`}
      >
        <head>
          <title>SkillHabit</title>
          <meta
            name="description"
            content="Let's see how this rolls."
          ></meta>
        </head>
        <body>
          <Toggle>{children}</Toggle>
        </body>
      </html>
    </ThemeProviderContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export { Theme, ThemeProvider, useTheme };
