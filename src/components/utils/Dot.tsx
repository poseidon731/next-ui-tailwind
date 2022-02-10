import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface DotProps {
  className: string;
}

export const Dot = ({ className }: DotProps) => {
  return <FontAwesomeIcon icon={faCircle} className={className} />;
};

Dot.defaultProps = {
  className: ThemeConstant.dot,
};
