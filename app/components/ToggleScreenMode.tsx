"use client";

import { Moon, Sun } from "assets/icons";
import { Theme, useTheme } from "contexts/ThemeContext";
import styles from "styles/toggle-screen-mode.module.scss";
import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.container}>
      <div
        className={styles.toggleMode}
        onClick={() =>
          setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        }
      >
        <Sun opacity={theme === Theme.LIGHT ? 1 : 0} />
        <Moon opacity={theme === Theme.LIGHT ? 0 : 1} />
      </div>
      {children}
    </div>
  );
};
