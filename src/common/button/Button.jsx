import * as React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

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
      <Link
        href={href}
        className={buttonClassName}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Link>
    );

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
