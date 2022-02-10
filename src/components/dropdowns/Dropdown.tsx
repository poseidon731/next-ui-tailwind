import React, { ReactNode, useEffect, useState } from "react";
import { createPopper, Placement } from "@popperjs/core";
import clsx from "clsx";
import { ThemeConstant } from "../../constants/theme.constants";

export interface DropdownProps {
  children: ReactNode;
  button: ReactNode;
  placement?: Placement;
}

export const Dropdown = (props: DropdownProps) => {
  const { button, children, placement } = props;
  const [isShow, setIsShow] = useState(false);
  const buttonRef = React.createRef<HTMLButtonElement>();
  const dropdownRef = React.createRef<HTMLDivElement>();

  const triggerPopOver = () => {
    if (!isShow) {
      createPopper(buttonRef.current, dropdownRef.current, {
        placement: placement || `bottom-start`,
      });
    }
    setIsShow(!isShow);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target))
        setIsShow(false);
    }
    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [buttonRef]);

  return (
    <>
      <button
        className={clsx(ThemeConstant.dropdown.button)}
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          triggerPopOver();
        }}
      >
        {button}
      </button>
      <div
        ref={dropdownRef}
        className={clsx(
          ThemeConstant.dropdown.container,
          isShow ? ThemeConstant.block : ThemeConstant.hidden
        )}
      >
        {children}
      </div>
    </>
  );
};
