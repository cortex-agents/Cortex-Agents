'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { RiWhatsappFill } from 'react-icons/ri';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Notification from '@/components/Notification';

function FloatingShape({ className, delay = 0, width = 400, height = 100, rotate = 0 }: { className?: string; delay?: number; width?: number; height?: number; rotate?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: -150, rotate: rotate - 15 }} animate={{ opacity: 1, y: 0, rotate: rotate }} transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }} className={className}>
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} style={{ width, height }} className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#38bdf8]/10 to-transparent backdrop-blur-[2px] border border-[#38bdf8]/20 shadow-[0_8px_32px_0_rgba(56,189,248,0.15)]" />
      </motion.div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notif, setNotif] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({ show: false, type: 'success', message: '' });

  useEffect(() => {
    const saved = sessionStorage.getItem('selectedService');
    if (saved) { setSubject(saved); sessionStorage.removeItem('selectedService'); }
  }, []);

  const showNotif = (type: 'success' | 'error', msg: string) => {
    setNotif({ show: true, type, message: msg });
    setTimeout(() => setNotif((n) => ({ ...n, show: false })), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, subject, message }) });
      if (res.ok) { showNotif('success', 'Message sent successfully!'); setName(''); setEmail(''); setSubject(''); setMessage(''); }
      else showNotif('error', 'Failed to send message.');
    } catch { showNotif('error', 'An error occurred. Please try again later.'); }
    finally { setIsSubmitting(false); }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'cortexagents@gmail.com', href: 'mailto:cortexagents@gmail.com', gradient: 'from-sky-400 to-sky-600' },
    { icon: RiWhatsappFill, label: 'WhatsApp', value: '+92 321 2322687', href: 'https://wa.me/923212322687', gradient: 'from-cyan-400 to-cyan-600' },
    { icon: MapPin, label: 'Address', value: 'Karachi, Pakistan', href: '#', gradient: 'from-teal-400 to-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-[#02040a]">
      <Notification show={notif.show} type={notif.type} message={notif.message} onClose={() => setNotif((n) => ({ ...n, show: false }))} />
      <Header />
      <section className="relative text-white py-20 pt-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingShape delay={0.3} width={600} height={140} rotate={12} className="absolute left-[-10%] top-[15%]" />
          <FloatingShape delay={0.5} width={500} height={120} rotate={-15} className="absolute right-[-5%] top-[70%]" />
          <FloatingShape delay={0.4} width={300} height={80} rotate={-8} className="absolute left-[5%] bottom-[10%]" />
          <FloatingShape delay={0.6} width={200} height={60} rotate={20} className="absolute right-[15%] top-[10%]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6">
              <span className="text-sm text-[#38bdf8] font-medium tracking-wide">Contact Us</span>
            </motion.div>
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#38bdf8] to-white">Get In Touch</span>
            </motion.h1>
            <motion.p className="text-slate-400 text-lg max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
              Let&apos;s discuss how we can help transform your business with AI-powered solutions
            </motion.p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-8 shadow-2xl group">
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-20 blur-xl" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
                <motion.div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl" style={{ transformOrigin: 'left' }} />
                <h2 className="relative text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div><label className="block text-sm font-medium text-slate-300 mb-2">Name</label><div className="relative"><User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" /><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all" /></div></div>
                  <div><label className="block text-sm font-medium text-slate-300 mb-2">Email</label><div className="relative"><Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all" /></div></div>
                  <div><label className="block text-sm font-medium text-slate-300 mb-2">Subject</label><div className="relative"><MessageSquare size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" /><input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help?" required className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all" /></div></div>
                  <div><label className="block text-sm font-medium text-slate-300 mb-2">Message</label><textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." required className="w-full p-4 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 resize-none transition-all" /></div>
                  <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }} className="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white rounded-xl font-semibold shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2 relative overflow-hidden group">
                    {isSubmitting ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</> : <><span className="relative z-10">Send Message</span><Send size={18} className="relative z-10" /><motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ width: '200%' }} /></>}
                  </motion.button>
                </form>
                <motion.span className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:opacity-100 group-hover:top-[-20px] group-hover:right-[-20px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
                <motion.span className="pointer-events-none absolute bottom-0 left-0 w-0 h-0 rounded-full opacity-0 bg-[#0ea5e9]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:bottom-[-10px] group-hover:left-[-10px]" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
              </div>
            </motion.div>
            <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <motion.a key={i} href={info.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ scale: 1.02 }} className="block relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-xl p-4 hover:border-[#38bdf8]/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#38bdf8]/20 group">
                    <motion.div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500" />
                    <motion.div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-xl" style={{ transformOrigin: 'left' }} />
                    <div className="relative flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0`}><info.icon size={24} className="text-white" /></div>
                      <div className="flex-1 min-w-0"><p className="text-xs text-slate-400 mb-1">{info.label}</p><p className="text-white font-semibold break-words">{info.value}</p></div>
                    </div>
                    <motion.span className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-20 group-hover:h-20 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
                  </motion.a>
                ))}
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl overflow-hidden shadow-2xl group">
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-20 blur-xl" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
                <div className="relative p-4 border-b border-[#38bdf8]/20"><h3 className="text-lg font-semibold text-white flex items-center gap-2"><MapPin size={20} className="text-[#38bdf8]" />Our Location</h3></div>
                <div className="relative h-64 bg-slate-900"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7100103!2d66.59499374999999!3d24.8614622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale hover:grayscale-0 transition-all duration-500" /></div>
                <motion.span className="pointer-events-none absolute bottom-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:opacity-100 group-hover:bottom-[-20px] group-hover:right-[-20px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
      </section>
      <Footer />
    </div>
  );
}
