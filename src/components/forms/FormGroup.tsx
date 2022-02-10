import clsx from "clsx";
import React, { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface FormGroupProps {
  className?: string;
  type?: HTMLInputTypeAttribute;
}

export const FormGroup = ({
  children,
  className,
  type,
}: PropsWithChildren<FormGroupProps>) => {
  let selectedTheme = ThemeConstant.form.group.common;
  if (type === `radio`) selectedTheme = ThemeConstant.form.group.radio;
  if (type === `checkbox`) selectedTheme = ThemeConstant.form.group.checkbox;

  return <div className={clsx(selectedTheme, className)}>{children}</div>;
};
