import * as React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Made with ❤️ by YV </p>
      <a target="" href="https://www.instagram.com/yvaskiv/">
        <p>Instagram</p>
      </a>
    </footer>
  );
};
