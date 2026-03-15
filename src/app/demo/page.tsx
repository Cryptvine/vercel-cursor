import Link from "next/link";

export const metadata = {
  title: "Demo | Cryptvine",
  description: "Deploy test page for cryptvine.dev",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-zinc-400 backdrop-blur-sm">
          Deploy test
        </span>
        <h1 className="mb-3 text-4xl font-semibold tracking-tight sm:text-5xl text-zinc-100">
          Demo page
        </h1>
        <p className="mb-10 text-lg text-zinc-400">
          If you see this on <strong className="text-zinc-200">cryptvine.dev/demo</strong>, the
          pipeline is working.
        </p>
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-sm text-zinc-500">Built with</p>
          <p className="mt-1 font-mono text-lg text-amber-500">
            Next.js → GitHub → Vercel → cryptvine.dev
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/15"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
