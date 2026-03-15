"use client";

export default function OrbTitle() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]"
        aria-hidden
      >
        <defs>
          {/* Metallic chrome — highlight streak */}
          <linearGradient id="orbit-text" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#71717a" />
            <stop offset="35%" stopColor="#a1a1aa" />
            <stop offset="50%" stopColor="#e4e4e7" />
            <stop offset="65%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#52525b" />
          </linearGradient>
          <linearGradient id="orbit-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>
        {/* Text orbiting the center — rotates slowly */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="28s"
            repeatCount="indefinite"
          />
          <path
            id="orbit-path"
            d="M 65 200 A 135 135 0 0 1 335 200"
            fill="none"
          />
          <text
            fontFamily="system-ui, sans-serif"
            fontSize="28"
            fontWeight="600"
            letterSpacing="0.12em"
          >
            <textPath href="#orbit-path" fill="url(#orbit-text)">
              cryptvine<tspan fill="url(#orbit-accent)">.dev</tspan>
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}
