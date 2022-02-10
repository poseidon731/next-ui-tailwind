import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import { ThemeConstant } from "../../constants/theme.constants";

export interface StatCardProps {
  subTitle: string;
  title: string;
  description: string;
  iconClassName?: string;
  icon?: IconProp;
  arrow?: "up" | "down";
  dataClassName: string;
  data: string;
}

export const StatCard = (props: StatCardProps) => {
  const {
    subTitle,
    title,
    iconClassName,
    icon,
    description,
    arrow,
    dataClassName,
    data,
  } = props;
  return (
    <div className={clsx(ThemeConstant.card.stat.container)}>
      <div className={clsx(ThemeConstant.card.stat.header.container)}>
        <div className={clsx(ThemeConstant.card.stat.header.title.container)}>
          <h5 className={clsx(ThemeConstant.card.stat.header.title.subTitle)}>
            {subTitle}
          </h5>
          <span className={clsx(ThemeConstant.card.stat.header.title.content)}>
            {title}
          </span>
        </div>
        {icon && (
          <div
            className={clsx(
              ThemeConstant.card.stat.header.icon.container,
              iconClassName
            )}
          >
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
      </div>
      <p className={clsx(ThemeConstant.card.stat.description.container)}>
        <span
          className={clsx(
            ThemeConstant.card.stat.description.span,
            dataClassName
          )}
        >
          {arrow && arrow === `up` ? (
            <FontAwesomeIcon
              icon={faArrowUp}
              className={clsx(ThemeConstant.card.stat.description.icon)}
            />
          ) : (
            arrow === `down` && (
              <FontAwesomeIcon
                icon={faArrowDown}
                className={clsx(ThemeConstant.card.stat.description.icon)}
              />
            )
          )}
          {data}
        </span>
        <span className={clsx(ThemeConstant.card.stat.description.content)}>
          {description}
        </span>
      </p>
    </div>
  );
};
