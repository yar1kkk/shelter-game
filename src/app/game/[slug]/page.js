"use client";
import * as React from "react";
import { io } from "socket.io-client";
import { useParams } from "next/navigation";
import Button from "@/common/button";
import { getPlayer } from "@/api/players";
import { useDatabase } from "@/hooks/useDatabase";
import { initializePlayersStats } from "@/api/tables";

export default function Game() {
  const db = useDatabase();
  const params = useParams();
  const slug = React.useMemo(() => params.slug, [params.slug]);

  React.useEffect(() => {
    const socket = io("http://localhost:8000");
    const roomId = slug;

    const playerId = getPlayer(db, false, slug, null);

    socket.emit("joinRoom", roomId);

    return () => {
      socket.emit("leaveRoom", roomId);
    };
  }, [slug]);

  const handleStartGame = () => {
    initializePlayersStats(db, slug, players);
  };

  return (
    <div>
      <p>ід кімнати{slug}</p>
      <p>Очікування гравців</p>
      <p>Запросіть гравців по посиланню нижче</p>
      <p>Гравців</p>

      <Button onClick={handleStartGame}>Почати гру</Button>
    </div>
  );
}
