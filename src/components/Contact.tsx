"use client";
import React, { useState, useEffect } from "react";
import Notification from "./Notification";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: RiWhatsappFill,
      label: "Whatsapp",
      value: "+92 321 2322687",
      href: "https://wa.me/923212322687",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Karachi, Pakistan",
      href: "#",
      gradient: "from-emerald-500 to-teal-500",
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
      <section className="relative text-white py-20 pt-28 overflow-hidden" id="contact">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          {/* heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-black mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Touch
              </span>
            </h2>
            <p className="text-2xl text-gray-300">
              Let’s discuss how we can help transform your business
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* left contact info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  Fill out the form and our team will get back to you soon.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <motion.a
                      key={i}
                      href={info.href}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600/50 transition-all"
                    >
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0`}
                      >
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-blue-400">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* right form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="How can we help you?"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project..."
                      required
                      className="w-full p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-xl font-semibold shadow-xl shadow-white/20 transform transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
