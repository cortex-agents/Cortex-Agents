import React from 'react';

export interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}

export default function AuroraBackground({
  className = "",
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative flex flex-col h-full items-center justify-center transition-bg ${className}`}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className={`
            [--silver-gradient:repeating-linear-gradient(100deg,#38bdf8_0%,#38bdf8_7%,transparent_10%,transparent_12%,#38bdf8_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#02040a_0%,#02040a_7%,transparent_10%,transparent_12%,#02040a_16%)]
            [--aurora:repeating-linear-gradient(100deg,#38bdf8_10%,#0ea5e9_15%,#06b6d4_20%,#14b8a6_25%,#38bdf8_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-70
            transition-transform duration-0
            ${showRadialGradient ? '[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_90%)]' : ''}
          `}
        ></div>
      </div>
      {children}
    </div>
  );
}
