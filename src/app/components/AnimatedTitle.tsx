"use client";

export default function AnimatedTitle() {
  return (
    <h1 className="animated-title flex flex-wrap items-center justify-center gap-x-1 text-4xl font-semibold tracking-tight sm:text-5xl">
      <span className="animated-word animated-word-a inline-block bg-gradient-to-r from-zinc-200 via-slate-100 to-zinc-300 bg-clip-text text-transparent">
        Cryptvine
      </span>
      <span className="inline-block text-amber-500">.</span>
      <span className="animated-word animated-word-b inline-block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        dev
      </span>
    </h1>
  );
}
