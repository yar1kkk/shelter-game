export const lobby = (socket, slug, currentPlayerId) => {
  if (socket) {
    const roomId = slug;

    socket.emit("joinRoom", roomId, currentPlayerId);

    window.addEventListener("beforeunload", (e) =>
      socket.emit("leaveRoom", roomId, currentPlayerId)
    );

    socket.on("lobbyUpdate", (players) => {
      console.log(players);
    });

    return () => {
      window.removeEventListener("beforeunload", handleLeaveRoom);
    };
  }
};
