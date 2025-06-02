import Image from "next/image";
import * as React from "react";
import Logo from "@/images/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoWrapper}>
        <Image width={48} height={48} src={Logo} alt="" />
        <p className={styles.logoText}>Shelter game</p>
      </a>
    </header>
  );
};
