import clsx from "clsx";
import React, { MouseEvent, ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface TableHeaderCellProps {
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLTableCellElement>) => any | Promise<any>;
}

export const TableHeaderCell = ({
  children,
  className,
  onClick,
}: TableHeaderCellProps) => (
  <th
    className={clsx(ThemeConstant.table.cell.header, className)}
    onClick={onClick}
  >
    {children}
  </th>
);
