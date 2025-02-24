import { StaticImageData } from "next/image";
import { JSX } from "react";

type MenuOption = {
  label: string;
  path: string;
  Icon: () => JSX.Element;
};

type MenuOptions = {
  [key: string]: MenuOption;
};

type ModalContent = {
  title?: string;
  subtitle?: string;
  image?: StaticImageData;
  closeModal?: () => void;
};

type CardContent = {
  title: string;
  subtitle: string;
  isStack: boolean;
  image: StaticImageData;
  openModal: () => void;
};

export type { MenuOption, MenuOptions, ModalContent, CardContent };
