import clsx from "clsx";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface SidebarListProps {
  title?: string;
  children?: ReactNode[] | ReactNode;
}

export const SidebarList = ({ title, children }: SidebarListProps) => {
  return (
    <>
      <hr className={clsx(ThemeConstant.sidebar.menu.hr)} />
      <h6 className={clsx(ThemeConstant.sidebar.menu.h6)}>{title}</h6>
      <ul className={clsx(ThemeConstant.sidebar.menu.ul)}>{children}</ul>
    </>
  );
};
