"use client";

import {
  Academy,
  Book,
  Certified,
  Followup,
  Histogram,
  Pencil,
  Settings,
  User,
} from "@/assets/icons";
import { MenuOption, MenuOptions } from "@/Types";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const menuOptionsMap: MenuOptions = {
  HOME: {
    label: "",
    path: "",
    Icon: () => <></>,
  },
  CREATE: {
    label: "Create",
    path: "create",
    Icon: () => <Pencil />,
  },
  LEARN: {
    label: "Learn",
    path: "learn",
    Icon: () => <Book />,
  },
  ANALYSE: {
    label: "Analyse",
    path: "analyse",
    Icon: () => <Histogram />,
  },
  CERTIFICATES: {
    label: "Certificates",
    path: "certificates",
    Icon: () => <Certified />,
  },
  FOLLOW: {
    label: "Follow up",
    path: "follow-up",
    Icon: () => <Followup />,
  },
  ACADEMY: {
    label: "Academy",
    path: "academy",
    Icon: () => <Academy />,
  },
  USERS: {
    label: "Users & Groups",
    path: "users-groups",
    Icon: () => <User />,
  },
  CONFIGURE: {
    label: "Configure",
    path: "configure",
    Icon: () => <Settings />,
  },
};

const menuOptionsList = Object.values(menuOptionsMap);

type MenuProviderState = {
  currentMenu: MenuOption;
  setActiveMenu: (option: MenuOption) => void;
};

const initialState = {
  currentMenu: menuOptionsMap.HOME,
  setActiveMenu: () => null,
};

const MenuProviderContext = createContext<MenuProviderState>(initialState);

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [currentMenu, setActiveMenu] = useState<MenuOption>(
    menuOptionsMap.HOME
  );

  return (
    <MenuProviderContext.Provider value={{ currentMenu, setActiveMenu }}>
      {children}
    </MenuProviderContext.Provider>
  );
};

const useMenu = () => {
  const context = useContext(MenuProviderContext);

  if (context === undefined)
    throw new Error("useMenu must be used within a MenuProvider");

  return context;
};

export { MenuProvider, useMenu, menuOptionsList, menuOptionsMap };
