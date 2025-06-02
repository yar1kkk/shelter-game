import { doc, getDoc } from "firebase/firestore";

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
