"use client";

import { useState, useEffect } from 'react';
import { WhatsAppIcon as RiWhatsappFill } from '@/components/ui/BrandIcons';
import Notification from '@/components/Notification';
import FloatingShape from '@/components/ui/FloatingShape';

// Inline SVGs for minimal hydration
const MailIcon = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MapPinIcon = ({ size = 24 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const SendIcon = ({ size = 18 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 6 22 2"/></svg>;
const UserIcon = ({ size = 18 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const MessageSquareIcon = ({ size = 18 }: { size?: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notif, setNotif] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({ show: false, type: 'success', message: '' });

  useEffect(() => {
    const saved = sessionStorage.getItem('selectedService');
    if (saved) {
      setSubject(saved);
      sessionStorage.removeItem('selectedService');
    }
  }, []);

  const showNotif = (type: 'success' | 'error', msg: string) => {
    setNotif({ show: true, type, message: msg });
    setTimeout(() => setNotif((n) => ({ ...n, show: false })), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
      if (res.ok) {
        showNotif('success', 'Message sent successfully!');
        setName(''); setEmail(''); setSubject(''); setMessage('');
      } else {
        showNotif('error', 'Failed to send message.');
      }
    } catch {
      showNotif('error', 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MailIcon, label: 'Email', value: 'cortexagents@gmail.com', href: 'mailto:cortexagents@gmail.com', gradient: 'from-sky-400 to-sky-600' },
    { icon: RiWhatsappFill, label: 'WhatsApp', value: '+92 321 2322687', href: 'https://wa.me/923212322687', gradient: 'from-cyan-400 to-cyan-600' },
    { icon: MapPinIcon, label: 'Address', value: 'Karachi, Pakistan', href: '#', gradient: 'from-teal-400 to-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-[#02040a]">
      <Notification show={notif.show} type={notif.type} message={notif.message} onClose={() => setNotif((n) => ({ ...n, show: false }))} />
      <section className="relative text-white pt-32 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-10%] top-[15%] animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
             <FloatingShape width={600} height={140} rotate={12} />
          </div>
          <div className="absolute right-[-5%] top-[70%] animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
             <FloatingShape width={500} height={120} rotate={-15} />
          </div>
          <div className="absolute left-[5%] bottom-[10%] animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
             <FloatingShape width={300} height={80} rotate={-8} />
          </div>
          <div className="absolute right-[15%] top-[10%] animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
             <FloatingShape width={200} height={60} rotate={20} />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up" style={{ animationDuration: '0.8s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6">
              <span className="text-sm text-[#38bdf8] font-medium tracking-wide">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#38bdf8] to-white">Get In Touch</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with AI-powered solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl p-8 shadow-2xl group overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-20 blur-xl animate-pulse" style={{ transform: 'scale(1.02)' }} />
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-2xl transition-all duration-500 group-hover:skew-x-0" style={{ transformOrigin: 'left' }} />
                <h2 className="relative text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"><UserIcon /></div>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"><MailIcon /></div>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"><MessageSquareIcon /></div>
                      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help?" required className="w-full pl-12 pr-4 py-3 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." required className="w-full p-4 bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-xl focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] text-white placeholder-slate-500 resize-none transition-all" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white rounded-xl font-semibold shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 relative overflow-hidden group">
                    {isSubmitting ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</> : <><span className="relative z-10">Send Message</span><SendIcon /><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ width: '200%' }} /></>}
                  </button>
                </form>
                <span className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-32 group-hover:h-24 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px] animate-pulse" style={{ willChange: 'transform, opacity' }} />
                <span className="pointer-events-none absolute bottom-0 left-0 w-0 h-0 rounded-full opacity-0 bg-[#0ea5e9]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:opacity-100 group-hover:bottom-[-10px] group-hover:left-[-10px] animate-pulse" style={{ willChange: 'transform, opacity', animationDelay: '1s' }} />
              </div>
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} target="_blank" rel="noopener noreferrer" className="block relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-xl p-4 hover:border-[#38bdf8]/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#38bdf8]/20 group overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-xl opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#38bdf8]/10 to-[#0ea5e9]/5 transform skew-x-12 rounded-xl transition-all duration-500 group-hover:skew-x-0" style={{ transformOrigin: 'left' }} />
                    <div className="relative flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0`}><info.icon size={24} /></div>
                      <div className="flex-1 min-w-0"><p className="text-xs text-slate-400 mb-1">{info.label}</p><p className="text-white font-semibold break-words">{info.value}</p></div>
                    </div>
                    <span className="pointer-events-none absolute top-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-20 group-hover:h-20 group-hover:opacity-100 group-hover:top-[-10px] group-hover:right-[-10px] animate-pulse" style={{ willChange: 'transform, opacity' }} />
                  </a>
                ))}
              </div>
              <div className="relative bg-[#02040a]/80 backdrop-blur-xl border border-[#38bdf8]/20 rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] rounded-2xl opacity-20 blur-xl animate-pulse" style={{ transform: 'scale(1.02)' }} />
                <div className="relative p-4 border-b border-[#38bdf8]/20"><h3 className="text-lg font-semibold text-white flex items-center gap-2"><MapPinIcon size={20} />Our Location</h3></div>
                <div className="relative h-64 bg-slate-900"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7100103!2d66.59499374999999!3d24.8614622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale hover:grayscale-0 transition-all duration-500" /></div>
                <span className="pointer-events-none absolute bottom-0 right-0 w-0 h-0 rounded-full opacity-0 bg-[#38bdf8]/10 backdrop-blur-[10px] transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:opacity-100 group-hover:bottom-[-20px] group-hover:right-[-20px] animate-pulse" style={{ willChange: 'transform, opacity' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
      </section>
    </div>
  );
}
