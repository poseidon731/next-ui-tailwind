import clsx from "clsx";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return <div className={clsx(ThemeConstant.container.header)}>{children}</div>;
};
