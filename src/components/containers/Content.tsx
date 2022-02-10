import clsx from "clsx";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface ContentProps {
  children?: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <div className={clsx(ThemeConstant.container.content)}>{children}</div>
  );
};
