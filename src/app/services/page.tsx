import Link from "next/link";
import { servicesData } from "@/lib/services-data";

// Inline SVGs for minimal hydration
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const LayersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const MessageSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const CloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19A5.5 5.5 0 0 1 12 24a5.5 5.5 0 0 1-5.5-5.5c0-.46.06-.9.17-1.31A7 7 0 0 1 13 3a7 7 0 0 1 6.33 10.69c.11.41.17.85.17 1.31a5.5 5.5 0 0 1-2 4Z"/></svg>;

const iconMap: { [key: string]: React.FC } = {
  Globe: CodeIcon,
  Layers: LayersIcon,
  MessageSquare: MessageSquareIcon,
  Bot: BotIcon,
  TrendingUp: TrendingUpIcon,
  Cloud: CloudIcon,
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#020008] text-white py-20 pt-32">
      {/* Aurora Background - CSS Pulse */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-cyan-600/10 to-sky-600/20 animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-[-5]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title */}
        <div
          className="text-center mb-16 animate-fade-in-up"
          style={{ animationDuration: '0.8s' }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 text-transparent bg-clip-text">
              Services
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions to transform your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || CodeIcon;
            return (
              <div
                key={service.slug}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="relative bg-purple-600/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 cursor-pointer">
                    {/* Badge Label */}
                    {service.label && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm">
                        <span className="text-xs font-semibold text-purple-300">{service.label}</span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 p-0.5 mb-6">
                      <div className="w-full h-full bg-[#020008] rounded-xl flex items-center justify-center">
                        <Icon />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>

                    {/* Description */}
                    <p className="text-purple-200/70 leading-relaxed mb-6">{service.shortDescription}</p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
                        Learn More →
                      </span>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-purple-500 to-violet-500 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-20 animate-fade-in-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
        >
          <p className="text-slate-400 mb-6 text-lg">
            {"Don't see what you're looking for?"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Custom Solution</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
