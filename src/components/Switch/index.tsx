"use client";

import { forwardRef, useEffect, useState } from "react";
import "./styles.scss";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  className?: string;
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
      const theme = localStorage.getItem("theme");
      document.body.setAttribute(
        "data-theme",
        theme === "dark" ? "light" : "dark"
      );

      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
      setChecked(!checked);
    };

    useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        setChecked(false);
      } else {
        document.body.setAttribute("data-theme", "light");
        setChecked(true);
      }
    }, []);

    return (
      <div className={twMerge(className)} {...props} ref={ref}>
        <input
          id="toggle-box"
          className="light-dark cursor-pointer"
          type="checkbox"
          role="switch"
          aria-checked={checked}
          defaultChecked={checked}
          onChange={() => handleClick()}
        />
        <label htmlFor="toggle-box" className="cursor-pointer" />
      </div>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
