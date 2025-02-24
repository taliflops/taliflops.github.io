"use client";

import { MenuOption } from "Types";
import { Menu as MenuIcon } from "assets/icons";
import styles from "assets/styles/menu.module.scss";
import { EventHandler, MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { menuOptionsList } from "contexts/MenuContext";
import Link from "next/link";

const Menu = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
}) => {
  const pathname = usePathname();

  const handleClick: EventHandler<MouseEvent> = (e: MouseEvent) => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div className={isOpen ? styles.menu : styles.hiddenMenu}>
        {menuOptionsList.map(({ label, path, Icon }: MenuOption) => (
          <a
            className={
              pathname.includes(path) ? styles.activeLink : styles.link
            }
            key={path}
            href={`./${path}`}
          >
            <span className={styles.menuIcon}>{Icon()}</span>
            {label}
          </a>
        ))}
      </div>
      <button
        title="path"
        onClick={(e: MouseEvent) => handleClick(e)}
        className={isOpen ? styles.activeTrigger : styles.trigger}
      >
        <MenuIcon />
        <Link
          className={isOpen ? styles.brand : styles.hiddenBrand}
          href="/"
        >
          Skillhabit
        </Link>
      </button>
    </div>
  );
};

export default Menu;
