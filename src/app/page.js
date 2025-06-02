"use client";

import * as React from "react";
import { getTableById } from "@/api/tables";
import { useDatabase } from "@/hooks/useDatabase";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const [table, setTable] = React.useState(null);
  const db = useDatabase();

  // React.useEffect(() => {
  //   getTableById(db, "RVKKjT8SIS0ybCkKLlen").then((data) => {
  //     if (data) {
  //       setTable(data);
  //     } else {
  //       console.log("No data found");
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Hero />
      <Testimonials />
    </div>
  );
}
