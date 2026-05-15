"use client";

import React, { useState, useEffect } from "react";
import Notification from "./Notification";

// Inline SVGs for minimal hydration
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 6 22 2"/></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const MessageSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;

// Orbiting Contact Card - Simplified with pure CSS
interface OrbitingCardProps {
  info: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    href: string;
    gradient: string;
  };
  index: number;
  totalCards: number;
  isPaused: boolean;
  onHover: (paused: boolean) => void;
}

function OrbitingCard({ info, index, totalCards, isPaused, onHover }: OrbitingCardProps) {
  const angle = (index / totalCards) * 360;
  const radius = 280; // Distance from center

  return (
    <div
      className={`absolute top-1/2 left-1/2 ${isPaused ? '' : 'animate-orbit'}`}
      style={{
        transformOrigin: "0 0",
        transform: `rotate(${angle}deg)`,
        animationDuration: '20s',
        animationPlayState: isPaused ? 'paused' : 'running',
      }}
    >
      <a
        href={info.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-110"
        style={{
          transform: `translateX(${radius}px) translateY(-50%)`,
        }}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        <div
          className={`relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-2xl hover:border-[#38bdf8]/50 transition-all duration-300 w-64 ${isPaused ? '' : 'animate-orbit-reverse'}`}
          style={{
            transform: `rotate(${-angle}deg)`,
            animationDuration: '20s',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          <div className={`absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl transition-all duration-500 group-hover:skew-x-0" style={{ transformOrigin: "left" }} />
          <div className="relative flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0`}>
              <info.icon className="text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">{info.label}</p>
              <p className="text-white font-semibold text-sm">{info.value}</p>
            </div>
          </div>
          <span className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-20 group-hover:h-24 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px] animate-pulse" />
        </div>
      </a>
    </div>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [notif, setNotif] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  useEffect(() => {
    // Defer form interactivity to reduce TBT
    const timer = setTimeout(() => setIsInteractive(true), 2500);

    const saved = sessionStorage.getItem("selectedService");
    if (saved) {
      setSubject(saved);
      sessionStorage.removeItem("selectedService");
    }
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isInteractive) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        setNotif({ show: true, type: "success", message: "Message sent successfully!" });
        setName(""); setEmail(""); setSubject(""); setMessage("");
        setTimeout(() => setNotif(n => ({ ...n, show: false })), 3000);
      } else {
        setNotif({ show: true, type: "error", message: "Failed to send message." });
        setTimeout(() => setNotif(n => ({ ...n, show: false })), 3000);
      }
    } catch {
      setNotif({ show: true, type: "error", message: "An error occurred." });
      setTimeout(() => setNotif(n => ({ ...n, show: false })), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MailIcon, label: "Email", value: "cortexagents@gmail.com", href: "mailto:cortexagents@gmail.com", gradient: "from-sky-400 to-sky-600" },
    { icon: WhatsAppIcon, label: "WhatsApp", value: "+92 321 2322687", href: "https://wa.me/923212322687", gradient: "from-cyan-400 to-cyan-600" },
    { icon: MapPinIcon, label: "Address", value: "Karachi, Pakistan", href: "#", gradient: "from-teal-400 to-teal-600" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center lg:min-h-[800px] w-full">
      <Notification
        show={notif.show}
        type={notif.type}
        message={notif.message}
        onClose={() => setNotif((n) => ({ ...n, show: false }))}
      />

      <div className="absolute inset-0 hidden xl:block">
        {contactInfo.map((info, index) => (
          <OrbitingCard key={index} info={info} index={index} totalCards={contactInfo.length} isPaused={isPaused} onHover={setIsPaused} />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-2xl px-4 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-20 blur-xl animate-pulse" />
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl transition-all duration-500" style={{ transformOrigin: "left" }} />

          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#38bdf8] uppercase tracking-wider mb-2">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <UserIcon aria-hidden="true" />
                  </div>
                  <input id="name" aria-label="Your Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required className="w-full pl-12 pr-4 py-4 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] text-white placeholder-slate-500 transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#38bdf8] uppercase tracking-wider mb-2">Your Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <MailIcon aria-hidden="true" />
                  </div>
                  <input id="email" aria-label="Your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" required className="w-full pl-12 pr-4 py-4 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] text-white placeholder-slate-500 transition-all" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-[#38bdf8] uppercase tracking-wider mb-2">Subject</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <MessageSquareIcon aria-hidden="true" />
                </div>
                <input id="subject" aria-label="Subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help you?" required className="w-full pl-12 pr-4 py-4 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] text-white placeholder-slate-500 transition-all" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#38bdf8] uppercase tracking-wider mb-2">Your Message</label>
              <textarea id="message" aria-label="Your Message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." required className="w-full p-4 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] text-white placeholder-slate-500 resize-none transition-all" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white rounded-xl font-semibold shadow-lg shadow-sky-400/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 relative overflow-hidden group">
              {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><span>Send Message</span><div aria-hidden="true"><SendIcon /></div><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ width: "200%" }} /></>}
            </button>
          </form>
        </div>
      </div>

      <div className="xl:hidden mt-12 space-y-4 w-full max-w-2xl px-4">
        {contactInfo.map((info, i) => (
          <a key={i} href={info.href} target="_blank" rel="noopener noreferrer" className="block bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 hover:border-[#38bdf8]/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0`}><info.icon /></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                <p className="text-white font-semibold break-words">{info.value}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
