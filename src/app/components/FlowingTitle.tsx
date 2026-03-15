"use client";

export default function FlowingTitle() {
  return (
    <div className="relative w-full max-w-2xl px-4">
      <svg
        viewBox="0 0 500 120"
        className="w-full"
        aria-hidden
      >
        <defs>
          {/* Gentle arc: text flows along the curve of the diagram */}
          <path
            id="title-path"
            d="M 60 75 Q 250 20 440 75"
            fill="none"
          />
          <linearGradient id="title-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e4e4e7" />
            <stop offset="50%" stopColor="#fafafa" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>
          <linearGradient id="title-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
        <text
          fontFamily="system-ui, sans-serif"
          fontSize="42"
          fontWeight="600"
          letterSpacing="-0.02em"
        >
          <textPath href="#title-path" fill="url(#title-gradient)">
            cryptvine<tspan fill="url(#title-accent)">.dev</tspan>
          </textPath>
        </text>
      </svg>
    </div>
  );
}
