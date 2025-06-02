"use client";
import * as React from "react";
import { useDatabase } from "@/hooks/useDatabase";
import { ref, set } from "firebase/database";

export default function Game() {
  // const db = useDatabase();

  // React.useEffect(() => {
  //   const reference = ref(db, "tables" + "RVKKjT8SIS0ybCkKLlen");

  //   set(reference, {
  //     username: "test",
  //     email: "test",
  //     somthing: "test",
  //     createdAt: new Date().toISOString(),
  //   });
  // }, [db]);

  return <div>game</div>;
}
