"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "2+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Optimized for speed" },
    { icon: "🎨", title: "Modern Design", desc: "Beautiful interfaces" },
    { icon: "🔒", title: "Secure", desc: "Enterprise-grade security" },
    { icon: "📱", title: "Responsive", desc: "Works on all devices" },
  ];

  return (
    <section className="relative w-full py-20 text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Cortex Agents
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-normal">
            Professional AI Solutions for Modern Businesses
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Text Content with Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                <span className="text-blue-400">●</span> Who We Are
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Cortex Agents is a team of highly skilled professionals
                dedicated to delivering cutting-edge web solutions that drive
                business growth and enhance user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With years of experience in web development, design, and AI/ML,
                we provide custom solutions that empower businesses to thrive in
                the digital world.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 p-3 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {feature.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {feature.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-800 py-4 px-8 rounded-xl text-xl font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Get a Quote
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-700/30 shadow-2xl">
              <Image
                src="/aboutImg.png"
                alt="Our Team"
                width={600}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 text-center shadow-2xl hover:border-gray-600/50 transition-all duration-300 group"
            >
              <div
                className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
