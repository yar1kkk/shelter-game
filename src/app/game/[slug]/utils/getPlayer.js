import { v4 as uuidv4 } from "uuid";

export const getPlayer = () => {
  const idFromLocalStorage = localStorage.getItem("playerId");

  if (!idFromLocalStorage) {
    const newId = uuidv4();

    localStorage.setItem("playerId", newId);

    return {
      id: newId,
    };
  }

  return {
    id: idFromLocalStorage,
  };
};
