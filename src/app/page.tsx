import AnimatedTitle from "./components/AnimatedTitle";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 font-sans safe-area-inset">
      <main className="flex max-w-2xl flex-col items-center gap-8 px-4 py-6 text-center sm:gap-10 sm:px-6 sm:py-10">
        <h1 className="sr-only">Cryptvine</h1>
        <AnimatedTitle href="/app" />
        <p className="text-base text-zinc-400 sm:text-lg">
          A modern approach to network automation.
        </p>
      </main>
    </div>
  );
}
