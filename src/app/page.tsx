import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-dvh min-h-screen w-full overflow-hidden bg-[#050806] safe-area-inset">
      <Image
        src="/minimal_dark_background.png"
        alt="Cryptvine — minimal infrastructure background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Subtle edge vignette — keeps text readable without hiding the art */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(5,20,8,0.55)_0%,transparent_65%),radial-gradient(ellipse_at_center,transparent_28%,rgba(2,8,4,0.45)_100%)]"
        aria-hidden
      />

      <main className="relative z-10 flex min-h-dvh flex-col items-center justify-start px-5 pb-12 pt-6 md:pt-8">
        <div className="coming-soon-panel relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#39FF14]/22 bg-[#050806]/72 px-8 py-9 backdrop-blur-xl md:px-10 md:py-10">
          {/* Animated top accent line */}
          <div
            className="coming-soon-border-glow pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/90 to-transparent"
            aria-hidden
          />
          {/* Subtle glass sheen — green tint */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] via-transparent to-[#14532d]/[0.12] opacity-90"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22c55e]/[0.06] via-transparent to-[#052e16]/[0.35]" aria-hidden />

          <div className="relative text-center">
            <p className="mb-3 font-mono text-[0.65rem] font-medium uppercase tracking-[0.55em] text-[#86efac]/85 md:text-xs">
              Coming soon
            </p>
            <h1 className="cryptvine-shimmer text-3xl font-semibold tracking-tight drop-shadow-[0_0_24px_rgba(57,255,20,0.35),0_0_48px_rgba(34,197,94,0.12)] md:text-4xl lg:text-5xl">
              cryptvine.dev
            </h1>
            <div
              className="mx-auto mt-6 flex items-center justify-center gap-2 font-mono text-[0.65rem] tracking-wider text-[#86efac]/55 md:text-xs"
              aria-hidden
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_10px_#39FF14]" />
              <span>Stay tuned</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.9)]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
