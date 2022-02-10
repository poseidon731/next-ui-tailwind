import clsx from "clsx";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface MainProps {
  children?: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return <div className={clsx(ThemeConstant.container.main)}>{children}</div>;
};
