import clsx from "clsx";
import React, { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export type FormLabelProps = {
  className?: string;
  htmlFor?: string;
  type?: HTMLInputTypeAttribute;
  errors?: string | false;
};

export const FormLabel = ({
  className,
  children,
  htmlFor,
  type,
  errors,
}: PropsWithChildren<FormLabelProps>) => {
  let selectedTheme = ThemeConstant.form.label.common;
  if (type === `checkbox`) selectedTheme = ThemeConstant.form.label.checkbox;
  if (type === `radio`) selectedTheme = ThemeConstant.form.label.radio;
  return (
    <label htmlFor={htmlFor} className={clsx(selectedTheme, className)}>
      {children}
      {errors && (
        <span className={ThemeConstant.form.label.error}>{errors}</span>
      )}
    </label>
  );
};
