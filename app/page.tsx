import SignAndCamera from "./components/signDetection/SignAndCamera";
export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        Repository available on{" "}
        <a
          href="https://github.com/PedroMarianoAlmeida/asteroid-sigh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
      <SignAndCamera />
    </main>
  );
}
