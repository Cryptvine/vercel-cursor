import Link from "next/link";

const DEMOS = [
  { slug: "firewall-policy", label: "Firewall policy" },
  { slug: "switch-ports", label: "Switch ports" },
  { slug: "event-driven", label: "Event driven" },
  { slug: "topology", label: "Topology" },
  { slug: "audit-log", label: "Audit log" },
] as const;

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 font-sans text-zinc-100">
      <aside className="flex w-56 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950/80 p-4">
        <Link
          href="/"
          className="mb-6 font-semibold text-amber-500 hover:text-amber-400"
        >
          ← cryptvine.dev
        </Link>
        <nav className="flex flex-col gap-1">
          <span className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Demos
          </span>
          {DEMOS.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/app/${slug}`}
              className="rounded-md px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-zinc-100"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  );
}
