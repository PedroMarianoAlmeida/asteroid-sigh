import Image from "next/image";
import SignAndCamera from "./components/signDetection/SignAndCamera";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignAndCamera />
    </main>
  );
}
