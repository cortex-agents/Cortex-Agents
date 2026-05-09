"use client";

import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-[-10] bg-[#02040a]">
      {/* CSS particle fallback while Three.js loads */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i * 0.1) % 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  ),
});

export default function LazyThreeBackground() {
  return <ThreeBackground />;
}
