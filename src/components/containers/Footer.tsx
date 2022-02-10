import clsx from "clsx";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface FooterProps {
  children?: ReactNode;
  name?: string;
}
export const Footer = ({ children, name }: FooterProps) => {
  return (
    <footer className={clsx(ThemeConstant.footer.wrapper)}>
      <hr className={clsx(ThemeConstant.footer.hr)} />
      <div className={clsx(ThemeConstant.footer.container)}>
        <div className={clsx(ThemeConstant.footer.left)}>
          {`Copyright © ${new Date().getFullYear()} ${name || ``}`}
        </div>
        {children && (
          <div className={clsx(ThemeConstant.footer.right)}>{children}</div>
        )}
      </div>
    </footer>
  );
};
