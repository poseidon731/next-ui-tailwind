import clsx from "clsx";
import React, { MouseEvent, ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface TableCellProps {
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLTableCellElement>) => any | Promise<any>;
}

export const TableCell = ({ children, className, onClick }: TableCellProps) => (
  <td
    className={clsx(ThemeConstant.table.cell.content, className)}
    onClick={onClick}
  >
    {children}
  </td>
);
