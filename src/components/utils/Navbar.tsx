import clsx from "clsx";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface NavbarProps {
  title?: string;
  children?: ReactNode;
}

export const Navbar = ({ children, title }: NavbarProps) => {
  return (
    <nav className={clsx(ThemeConstant.navbar.wrapper)}>
      <div className={clsx(ThemeConstant.navbar.container)}>
        <h1 className={clsx(ThemeConstant.navbar.title)}>{title}</h1>
        <ul className={clsx(ThemeConstant.navbar.ul)}>{children}</ul>
      </div>
    </nav>
  );
};
