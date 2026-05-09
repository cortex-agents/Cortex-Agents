"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Layers, MessageSquare, Bot, TrendingUp, Cloud, LucideIcon } from "lucide-react";
import { servicesData } from "@/lib/services-data";

const iconMap: { [key: string]: LucideIcon } = {
  Globe: Code,
  Layers,
  MessageSquare,
  Bot,
  TrendingUp,
  Cloud,
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#020008] text-white py-20 pt-32">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-violet-600/10 to-purple-600/20 animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-[-5]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 text-transparent bg-clip-text">
              Services
            </span>
          </h1>
          <p className="text-xl text-purple-100/70 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions to transform your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
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
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 p-0.5 mb-6"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-full h-full bg-[#020008] rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

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
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-purple-200/70 mb-6 text-lg">
            {"Don't see what you're looking for?"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Custom Solution</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{ width: '200%' }}
            />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
