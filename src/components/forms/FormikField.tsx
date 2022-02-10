import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { Field, FieldAttributes } from "formik";
import { ThemeConstant } from "../../constants/theme.constants";

export const FormikField = ({
  className,
  type,
  children,
  errors,
  ...props
}: PropsWithChildren<FieldAttributes<any>>) => {
  let selectedTheme: any = ThemeConstant.form.input.common.base;
  if (errors) {
    selectedTheme = ThemeConstant.form.input.common.invalid;
  }
  if (type === `radio`) {
    selectedTheme = ThemeConstant.form.input.radio.base;
    if (errors) selectedTheme = ThemeConstant.form.input.radio.invalid;
  }
  if (type === `checkbox`) {
    selectedTheme = ThemeConstant.form.input.checkbox.base;
    if (errors) selectedTheme = ThemeConstant.form.input.checkbox.invalid;
  }

  return (
    <Field
      {...props}
      type={type}
      className={clsx(
        selectedTheme,
        className,
        ThemeConstant.cursor.disabledNotAllowed
      )}
    >
      {children}
    </Field>
  );
};

FormikField.defaultProps = {
  type: `text`,
};
