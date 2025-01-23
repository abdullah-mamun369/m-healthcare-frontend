import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is Home Page</h1>
      <Button variant="contained">Contained</Button>
    </main>
  );
}
