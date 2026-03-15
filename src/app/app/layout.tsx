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
    <div className="flex min-h-dvh min-h-screen flex-col bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 font-sans text-zinc-100 md:flex-row">
      {/* Sidebar: compact top bar on mobile, full sidebar from md up */}
      <aside className="shrink-0 border-b border-zinc-800 bg-zinc-950/80 pt-[env(safe-area-inset-top)] md:w-56 md:border-b-0 md:border-r md:pt-0 md:p-4">
        <div className="flex items-center gap-2 overflow-x-auto px-3 py-2 md:flex-col md:items-stretch md:gap-0 md:overflow-visible md:px-0 md:py-0">
          <nav className="flex gap-1 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
            <span className="hidden shrink-0 text-xs font-medium uppercase tracking-wider text-zinc-500 md:mb-2 md:block">
              Demos
            </span>
            {DEMOS.map(({ slug, label }) => (
              <Link
                key={slug}
                href={`/app/${slug}`}
                className="shrink-0 rounded-md px-3 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800 hover:text-zinc-100"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      {/* Main: gets majority of screen on all sizes */}
      <main className="min-h-0 flex-1 overflow-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
