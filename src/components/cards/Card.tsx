import clsx from "clsx";
import React, { HTMLAttributes, ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ children, className }) => {
  return (
    <div className={clsx(ThemeConstant.card.common, className)}>{children}</div>
  );
};
