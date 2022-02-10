import clsx from "clsx";
import React from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface ProgressBarProps {
  min?: number;
  max?: number;
  value: number;
}

export const ProgressBar = ({ value, min, max }: ProgressBarProps) => {
  if (value < min || value > max) {
    throw new Error(`Please use this component with percentage range [0-100]`);
  }

  const width = Math.round(value / ((max - min) / 100));

  const color =
    width <= 33
      ? ThemeConstant.bg.red
      : width <= 66
      ? ThemeConstant.bg.orange
      : ThemeConstant.bg.green;

  return (
    <div className={clsx(ThemeConstant.progressBar.wrapper)}>
      <span className={clsx(ThemeConstant.progressBar.text)}>{value}%</span>
      <div className={clsx(ThemeConstant.progressBar.container)}>
        <div className={clsx(ThemeConstant.progressBar.bar, color)}>
          <div
            style={{ width: `${width}%` }}
            className={clsx(ThemeConstant.progressBar.barHover, color)}
          ></div>
        </div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
};
