import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export async function getPlayer(db, isNewGame, roomId, name) {
  if (!db || !roomId) {
    console.log("db or roomId are not found");
  }

  const existingId = localStorage.getItem("id");
  const checkExistingId = Boolean(existingId);

  if (checkExistingId) {
    return {
      id: existingId,
    };
  }

  const newUserId = uuidv4();
  const newUserName = name || "User" + (Math.random() * 100).toFixed();

  localStorage.setItem("id", newUserId);

  await setDoc(doc(db, "players", newUserId), {
    roomId: roomId,
    name: newUserName,
    id: newUserId,
    owner: isNewGame,
  });

  return { id: newUserId };
}
