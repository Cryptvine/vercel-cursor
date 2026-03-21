import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-dvh min-h-screen w-full overflow-hidden bg-[#0a0b1e] safe-area-inset">
      <Image
        src="/landing-bg.png"
        alt="Cryptvine dashboard illustration"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Subtle edge vignette — keeps text readable without hiding the art */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(10,11,30,0.5)_0%,transparent_65%),radial-gradient(ellipse_at_center,transparent_30%,rgba(10,11,30,0.35)_100%)]"
        aria-hidden
      />

      <main className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 py-12">
        <div className="coming-soon-panel relative w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#060818]/55 px-8 py-9 backdrop-blur-xl md:px-10 md:py-10">
          {/* Animated top accent line */}
          <div
            className="coming-soon-border-glow pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/80 to-transparent"
            aria-hidden
          />
          {/* Subtle CRT-style sheen */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] via-transparent to-fuchsia-500/[0.04] opacity-90"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/[0.07] via-transparent to-cyan-500/[0.08]" aria-hidden />

          <div className="relative text-center">
            <p className="mb-3 font-mono text-[0.65rem] font-medium uppercase tracking-[0.55em] text-cyan-300/90 md:text-xs">
              Coming soon
            </p>
            <h1 className="cryptvine-shimmer text-3xl font-semibold tracking-tight drop-shadow-[0_0_28px_rgba(255,0,255,0.32)] md:text-4xl lg:text-5xl">
              cryptvine.dev
            </h1>
            <div
              className="mx-auto mt-6 flex items-center justify-center gap-2 font-mono text-[0.65rem] tracking-wider text-fuchsia-300/50 md:text-xs"
              aria-hidden
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>Stay tuned</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
