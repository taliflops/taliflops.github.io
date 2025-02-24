"use client";

import { ReactNode, useState } from "react";
import Menu from "components/Menu";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MenuProvider } from "./contexts/MenuContext";
import styles from "styles/menu.module.scss";
import "styles/globals.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ThemeProvider>
      <MenuProvider>
        <div className={styles.scrollArea}>{children}</div>

        <div
          className={isOpen ? styles.blur : styles.focus}
          onClick={() => setOpen(false)}
        />
        <Menu
          {...{ isOpen }}
          {...{ setOpen }}
        />
      </MenuProvider>
    </ThemeProvider>
  );
};

export default Layout;
