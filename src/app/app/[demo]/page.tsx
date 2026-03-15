import { notFound } from "next/navigation";

const DEMOS: Record<string, string> = {
  "firewall-policy": "Firewall policy",
  "switch-ports": "Switch ports",
  "event-driven": "Event driven",
  topology: "Topology",
  "audit-log": "Audit log",
};

export default async function DemoPage({
  params,
}: {
  params: Promise<{ demo: string }>;
}) {
  const { demo } = await params;
  const title = DEMOS[demo];
  if (!title) notFound();

  return (
    <div className="flex max-w-xl flex-col items-start gap-6">
      <h1 className="text-2xl font-semibold text-zinc-100">{title}</h1>
      <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/50 px-8 py-12 text-center">
        <p className="text-lg text-amber-500/90">Coming soon</p>
        <p className="mt-2 text-sm text-zinc-500">
          This demo is not available yet.
        </p>
      </div>
    </div>
  );
}
