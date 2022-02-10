import clsx from "clsx";
import React, { ReactNode } from "react";
import { ThemeConstant } from "../../constants/theme.constants";
import { TableHeaderCell } from "./TableHeaderCell";
import { TableRow } from "./TableRow";
import { Dropdown } from "../dropdowns/Dropdown";

export interface TableProps<T> {
  title?: string;
  headers: string[];
  data: T[];
  pagenation: boolean;
  children: (data: T) => ReactNode;
}

export function Table<T>(props: TableProps<T>) {
  const { title, data, children, headers } = props;
  return (
    <div className={clsx(ThemeConstant.table.wrapper)}>
      {title && (
        <div className={clsx(ThemeConstant.table.title.container)}>
          <h3 className={clsx(ThemeConstant.table.title.content)}>{title}</h3>
        </div>
      )}
      <div className={clsx(ThemeConstant.table.container)}>
        <table className={clsx(ThemeConstant.table.content)}>
          <thead>
            <TableRow>
              {headers.map((v, i) => (
                <TableHeaderCell key={`${i}-${v}`}>{v}</TableHeaderCell>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {data.length ? (
              data.map((v) => children(v))
            ) : (
              <TableRow>
                <td colSpan={headers.length}>No result.</td>
              </TableRow>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
