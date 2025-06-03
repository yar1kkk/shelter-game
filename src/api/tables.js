import { apocalypses } from "@/data/game/apocalypses";
import { places } from "@/data/game/places";
import { resources } from "@/data/game/resources";
import { generatePlayersStats } from "@/utils/generatePlayersStats";
import { getRandomArrayValue } from "@/utils/getRandomArrayValue";
import { getRandomUnique } from "@/utils/getRandomUnique";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export async function getTableById(db, tableId) {
  const tableRef = doc(db, "tables", tableId);
  const tableQuery = await getDoc(tableRef);
  const tableData = tableQuery.data();

  if (tableQuery.exists()) {
    return tableData;
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function createNewTable(db, slug, ownerId) {
  const newRoomId = slug;

  await setDoc(doc(db, "tables", newRoomId), {
    id: newRoomId,
    apocalypses: getRandomArrayValue(apocalypses),
    room: getRandomArrayValue(places),
    playersIds: [ownerId],
    playersStats: [],
    ownerId: ownerId,
    resources: getRandomUnique(resources, 3),
    status: "waiting",
  });
}

export async function initializePlayersStats(db, slug, playersIds) {
  const tableId = slug;
  const tableRef = doc(db, "tables", tableId);
  const newPlayersStats = await generatePlayersStats(playersIds);

  await updateDoc(tableRef, {
    playersStats: newPlayersStats,
  });
}
