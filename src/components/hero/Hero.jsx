import * as React from "react";
import styles from "./Hero.module.css";
import { Button } from "@/common/button/Button";
import Image from "next/image";
import HeroImage from "@/images/hero.jpg";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDatabase } from "@/hooks/useDatabase";
import { getPlayer } from "@/api/players";
import { createNewTable } from "@/api/tables";

const StyledButton = styled(Button)`
  padding: 20px 40px;
  font-size: 14px;
  font-family: var(--font-press-start-2p);
`;

export const Hero = () => {
  const [newGameId, setNewGameId] = React.useState("");
  const db = useDatabase();

  React.useEffect(() => {
    setNewGameId(uuidv4());
  }, []);

  const onCreateNewGame = React.useCallback(() => {
    getPlayer(db, true, newGameId, null)
      .then((res) => {
        const { id, name } = res;

        createNewTable(db, newGameId, id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newGameId]);

  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.heroTitle}>Бункер гра онлайн</h1>
        <p className={styles.heroSubtitle}>
          Доведи усім, що ти можеш потрапити у бункер
        </p>
        <div className={styles.heroButtons}>
          <StyledButton onClick={onCreateNewGame} href={`game/${newGameId}`}>
            Нова гра
          </StyledButton>
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
