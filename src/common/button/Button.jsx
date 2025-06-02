import * as React from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  href,
  type = "primary",
}) => {
  const buttonClassName = `${styles[type]} ${className ?? ""}`;

  if (href)
    return (
      <a
        href={href}
        className={buttonClassName}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </a>
    );

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
