import React from 'react';

export interface FloatingShapeProps {
  className?: string;
  delay?: number;
  width?: number | string;
  height?: number | string;
  rotate?: number;
}

export default function FloatingShape({
  className,
  delay = 0,
  width = 300,
  height = 80,
  rotate = 0,
}: FloatingShapeProps) {
  return (
    <div
      className={className}
      style={{
        transform: `rotate(${rotate - 10}deg)`,
      }}
      aria-hidden="true"
    >
      <div
        className="animate-float-slow"
        style={{
          animationDelay: `${delay}s`
        }}
      >
        <div
          style={{ width, height }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-transparent backdrop-blur-[2px] border border-[#38bdf8]/20 shadow-[0_8px_32px_0_rgba(56,189,248,0.15)]" />
        </div>
      </div>
    </div>
  );
}
