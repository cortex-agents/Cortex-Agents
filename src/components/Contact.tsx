"use client";
import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";

// Floating background shapes
function FloatingShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-transparent backdrop-blur-[2px] border border-[#38bdf8]/20 shadow-[0_8px_32px_0_rgba(56,189,248,0.15)]" />
      </motion.div>
    </motion.div>
  );
}

// Orbiting Contact Card
interface OrbitingCardProps {
  info: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
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
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        transformOrigin: "0 0",
      }}
      animate={{
        rotate: isPaused ? angle : [angle, angle + 360],
      }}
      transition={{
        duration: isPaused ? 0 : 20,
        repeat: isPaused ? 0 : Infinity,
        ease: "linear",
      }}
    >
      <motion.a
        href={info.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        style={{
          transform: `translateX(${radius}px) translateY(-50%)`,
        }}
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => onHover(true)}
        onHoverEnd={() => onHover(false)}
      >
        <motion.div
          className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 shadow-2xl hover:border-[#38bdf8]/50 transition-all duration-300 w-64"
          animate={{
            rotate: isPaused ? -angle : [-angle, -angle - 360],
          }}
          transition={{
            duration: isPaused ? 0 : 20,
            repeat: isPaused ? 0 : Infinity,
            ease: "linear",
          }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-500"
            animate={{ scale: isPaused ? 1.05 : 1 }}
          />

          {/* Skewed gradient panel */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 transition-all duration-500"
            style={{ transformOrigin: "left" }}
          />

          <div className="relative flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0`}>
              <info.icon size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">{info.label}</p>
              <p className="text-white font-semibold text-sm">{info.value}</p>
            </div>
          </div>

          {/* Animated blob */}
          <motion.span
            className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-20 group-hover:h-20 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [notif, setNotif] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  useEffect(() => {
    const saved = sessionStorage.getItem("selectedService");
    if (saved) {
      setSubject(saved);
      sessionStorage.removeItem("selectedService");
    }
  }, []);

  const showNotif = (type: "success" | "error", msg: string) => {
    setNotif({ show: true, type, message: msg });
    setTimeout(() => setNotif((n) => ({ ...n, show: false })), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        showNotif("success", "Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else showNotif("error", "Failed to send message.");
    } catch {
      showNotif("error", "An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cortexagents@gmail.com",
      href: "mailto:cortexagents@gmail.com",
      gradient: "from-sky-400 to-sky-600",
    },
    {
      icon: RiWhatsappFill,
      label: "WhatsApp",
      value: "+92 321 2322687",
      href: "https://wa.me/923212322687",
      gradient: "from-cyan-400 to-cyan-600",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Karachi, Pakistan",
      href: "#",
      gradient: "from-teal-400 to-teal-600",
    },
  ];

  return (
    <>
      <Notification
        show={notif.show}
        type={notif.type}
        message={notif.message}
        onClose={() => setNotif((n) => ({ ...n, show: false }))}
      />
      <section className="relative text-white pt-28 overflow-hidden min-h-screen" id="contact">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingShape delay={0.3} width={600} height={140} rotate={12} className="absolute left-[-10%] top-[15%]" />
          <FloatingShape delay={0.5} width={500} height={120} rotate={-15} className="absolute right-[-5%] top-[70%]" />
          <FloatingShape delay={0.4} width={300} height={80} rotate={-8} className="absolute left-[5%] bottom-[10%]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6"
            >
              <span className="text-sm text-[#38bdf8] font-medium tracking-wide">Contact Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#38bdf8] to-white">
                Get In Touch
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              Let&apos;s discuss how we can help transform your business with AI-powered solutions
            </motion.p>
          </motion.div>

          {/* Centered Form with Orbiting Cards */}
          <div className="relative flex flex-col items-center justify-center lg:min-h-[800px]">
            {/* Orbiting Contact Cards - Desktop Only */}
            <div className="absolute inset-0 hidden xl:block">
              {contactInfo.map((info, index) => (
                <OrbitingCard
                  key={index}
                  info={info}
                  index={index}
                  totalCards={contactInfo.length}
                  isPaused={isPaused}
                  onHover={setIsPaused}
                />
              ))}
            </div>

            {/* Central Form */}
            <motion.div
              className="relative z-10 w-full max-w-2xl px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-8 shadow-2xl">
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-20 blur-xl"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Skewed gradient panel */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl"
                  style={{ transformOrigin: "left" }}
                />

                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="How can we help you?"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project..."
                      required
                      className="w-full p-4 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 resize-none transition-all"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white rounded-xl font-semibold shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transform transition-all disabled:opacity-50 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message</span>
                        <Send size={18} className="relative z-10" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          style={{ width: "200%" }}
                        />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Animated blobs */}
                <motion.span
                  className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:opacity-100 group-hover:top-[-20px] group-hover:right-[-20px]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="pointer-events-none absolute bottom-0 left-0 w-0 h-0 rounded-full opacity-0 bg-[#0ea5e9]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:bottom-[-10px] group-hover:left-[-10px]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Mobile/Tablet Contact Cards (stacked below form) */}
            <div className="xl:hidden mt-12 space-y-4 w-full max-w-2xl px-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="block bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-6 hover:border-[#38bdf8]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                      <p className="text-white font-semibold break-words">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
