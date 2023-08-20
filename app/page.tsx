import SignAndCamera from "./components/signDetection/SignAndCamera";
export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignAndCamera />
    </main>
  );
}
