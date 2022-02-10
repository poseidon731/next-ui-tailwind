import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface SidebarLinkProps {
  to: string;
  children: string | ReactNode;
  icon: IconProp;
}

export const SidebarLink = ({ to, children, icon }: SidebarLinkProps) => {
  const router = useRouter();
  const isActive = router?.pathname.indexOf(to) !== -1;

  return (
    <li className={clsx(ThemeConstant.sidebar.link.li)}>
      <Link href={to}>
        <a
          className={clsx(
            ThemeConstant.sidebar.link.a.base,
            isActive
              ? ThemeConstant.sidebar.link.a.active
              : ThemeConstant.sidebar.link.a.normal
          )}
        >
          <FontAwesomeIcon
            icon={icon}
            className={clsx(
              ThemeConstant.sidebar.link.icon.base,
              isActive
                ? ThemeConstant.sidebar.link.icon.active
                : ThemeConstant.sidebar.link.icon.normal
            )}
          />
          <span>{children}</span>
        </a>
      </Link>
    </li>
  );
};
