"use client";
import * as React from "react";
import { io } from "socket.io-client";
import { useParams } from "next/navigation";
import Button from "@/common/button";
import { getPlayer } from "./utils/getPlayer";
import { startGame } from "./utils/startGame";
import { lobby } from "./utils/lobby";

export default function Game() {
  const params = useParams();
  const slug = React.useMemo(() => params.slug, [params.slug]);
  const [socket, setSocket] = React.useState(null);
  const [currentPlayerId, setCurrentPlayerId] = React.useState(null);

  React.useEffect(() => {
    const { id } = getPlayer();

    setCurrentPlayerId(id);
  }, []);

  React.useEffect(() => {
    const newSocketConnection = io("http://localhost:8000");
    setSocket(newSocketConnection);
  }, []);

  React.useEffect(() => {
    lobby(socket, slug, currentPlayerId);
  }, [socket, slug, currentPlayerId]);

  const handleStartGame = () => {
    startGame();
  };

  return (
    <div>
      <p>ід кімнати{slug}</p>
      <p>Очікування гравців (MY ID {currentPlayerId})</p>
      <p>Запросіть гравців по посиланню нижче</p>
      <p>Гравців -----</p>

      <Button onClick={handleStartGame}>Почати гру</Button>
    </div>
  );
}
