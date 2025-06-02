import * as React from "react";
import styles from "./Hero.module.css";
import { Button } from "@/common/button/Button";
import Image from "next/image";
import HeroImage from "@/images/hero.jpg";
import styled from "styled-components";

const StyledButton = styled(Button)`
  padding: 20px 40px;
  font-size: 14px;
  font-family: var(--font-press-start-2p);
`;

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.heroTitle}>Бункер гра онлайн</h1>
        <p className={styles.heroSubtitle}>
          Доведи усім, що ти можеш потрапити у бункер
        </p>
        <div className={styles.heroButtons}>
          <StyledButton href="/game">Нова гра</StyledButton>
          <StyledButton type="secondary">Увійти у гру</StyledButton>
        </div>

        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            src={HeroImage}
            width={600}
            height={400}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
