import React, { MouseEvent, ReactNode } from "react";

export interface TableRowProps {
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLTableRowElement>) => any | Promise<any>;
}

export const TableRow = ({ children, className, onClick }: TableRowProps) => (
  <tr className={className} onClick={onClick}>
    {children}
  </tr>
);
