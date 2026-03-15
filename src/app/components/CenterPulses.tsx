"use client";

const NUM_RAYS = 14;
const CENTER = 50;
const RADIUS = 52;

function getRayEnd(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER - RADIUS * Math.sin(rad),
  };
}

const DELAYS = [
  "0s", "0.2s", "0.5s", "0.8s", "0.1s", "0.4s", "0.9s", "0.3s",
  "0.6s", "0.15s", "0.7s", "0.35s", "0.55s", "0.75s",
];

export default function CenterPulses() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center"
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full max-h-[min(100vh,800px)] max-w-[min(100vw,800px)]"
      >
        <defs>
          <linearGradient id="pulse-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {Array.from({ length: NUM_RAYS }).map((_, i) => {
          const angle = (i / NUM_RAYS) * 360;
          const end = getRayEnd(angle);
          const delay = DELAYS[i % DELAYS.length];
          return (
            <g key={i}>
              {/* Faint strand */}
              <line
                x1={CENTER}
                y1={CENTER}
                x2={end.x}
                y2={end.y}
                stroke="rgb(113 113 122 / 0.25)"
                strokeWidth="0.4"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="100 0"
              />
              {/* Moving pulse */}
              <line
                x1={CENTER}
                y1={CENTER}
                x2={end.x}
                y2={end.y}
                stroke="url(#pulse-glow)"
                strokeWidth="0.7"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="8 92"
                className="animate-pulse-out"
                style={{ animationDelay: delay }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
