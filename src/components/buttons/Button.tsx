import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "red" | "green" | "blue";
}

export const Button = ({
  children,
  color,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        ThemeConstant.button.common,
        ThemeConstant.button.color[color],
        className
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: `blue`,
};
