import React from "react";
import ContactForm from "./ContactForm";
import FloatingShape from './ui/FloatingShape';

export default function Contact() {
  return (
    <section className="relative text-white pt-28 overflow-hidden min-h-screen" id="contact">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />

      {/* Floating shapes */}
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div
          className="text-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6"
          >
            <span className="text-sm text-[#38bdf8] font-medium tracking-wide">Contact Us</span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#38bdf8] to-white">
              Get In Touch
            </span>
          </h2>

          <p
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Let&apos;s discuss how we can help transform your business with AI-powered solutions
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
