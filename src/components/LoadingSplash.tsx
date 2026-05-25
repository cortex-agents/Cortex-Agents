/**
 * Zero-JS loading splash — renders as static HTML from SSR,
 * then CSS animation handles the fade-out after 1.5s.
 * No hydration, no client-side JS, no TBT impact.
 * Plain <img> avoids next/image overhead on initial render.
 */
export default function LoadingSplash() {
  return (
    <div id="splash-overlay" className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#02040a]" role="alert" aria-label="Loading Cortex Agents" style={{ animation: "splashFade 1.5s ease-out 1s both" }}>
      {/* Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.15) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#0ea5e9]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-[#38bdf8]/20 blur-2xl animate-pulse" />
          <img
            src="/cortextAgents_logo.jpg"
            alt="Cortex Agents"
            width="112"
            height="112"
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-contain"
            style={{ animation: "splashScale 0.6s ease-out both" }}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* CORTEX AGENTS text */}
        <div className="flex items-center gap-0.5">
          {"CORTEX".split("").map((c, i) => (
            <span key={i} className="text-2xl sm:text-3xl font-bold text-white" style={{ animation: "letterReveal 0.5s ease-out both", animationDelay: `${0.1 + i * 0.06}s` }}>{c}</span>
          ))}
          <span className="w-2" />
          {"AGENTS".split("").map((c, i) => (
            <span key={i} className="text-2xl sm:text-3xl font-bold text-[#38bdf8]" style={{ animation: "letterReveal 0.5s ease-out both", animationDelay: `${0.5 + i * 0.06}s` }}>{c}</span>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-slate-500 text-xs tracking-widest uppercase" style={{ animation: "fadeIn 0.5s ease-out 0.8s both" }}>AI-Powered Solutions</p>

        {/* Progress bar */}
        <div className="w-44 h-0.5 bg-slate-800 rounded-full overflow-hidden" style={{ animation: "fadeIn 0.5s ease-out 0.6s both" }}>
          <div className="h-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-full" style={{ animation: "progressBar 1.2s ease-out forwards" }} />
        </div>
      </div>
    </div>
  );
}
