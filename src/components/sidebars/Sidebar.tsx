import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface SidebarProps {
  title: string;
  dropdown?: ReactNode;
  children: ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  const { title, children, dropdown } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={clsx(ThemeConstant.sidebar.nav)}>
      <div className={clsx(ThemeConstant.sidebar.container)}>
        <button
          className={clsx(ThemeConstant.sidebar.button)}
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Link href="/">
          <a className={clsx(ThemeConstant.sidebar.title)}>{title}</a>
        </Link>

        <ul className={clsx(ThemeConstant.sidebar.dropdown.ul)}>{dropdown}</ul>

        <div
          className={clsx(
            ThemeConstant.sidebar.menu.wrapper,
            isOpen ? ThemeConstant.sidebar.open : ThemeConstant.hidden
          )}
        >
          <div className={clsx(ThemeConstant.sidebar.menu.container)}>
            <Link href="/">
              <a className={clsx(ThemeConstant.sidebar.title)}>{title}</a>
            </Link>
            <button
              type="button"
              className={clsx(ThemeConstant.sidebar.button)}
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {children}
        </div>
      </div>
    </nav>
  );
};
