import clsx from "clsx";
import React from "react";
import { ThemeConstant } from "../../constants/theme.constants";
import { Dropdown, DropdownProps } from "../dropdowns/Dropdown";

export type SidebarDropdownProps = DropdownProps;

export const SidebarDropdown = (props: SidebarDropdownProps) => {
  return (
    <li className={clsx(ThemeConstant.sidebar.dropdown.li)}>
      <Dropdown {...props} />
    </li>
  );
};
