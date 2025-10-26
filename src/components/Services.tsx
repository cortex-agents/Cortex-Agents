"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const Services = () => {
  const [selectedService, setSelectedService] = useState<null | {
    title: string;
    description: string;
    gradient: string;
  }>(null);

  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and user-friendly designs that provide great user experiences.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom e-commerce websites tailored to your business needs, integrated with the best payment systems.",
      icon: "🏪",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "SEO Optimization",
      description:
        "Boosting your websites visibility on search engines to drive more organic traffic.",
      icon: "🔍",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "AI Integration",
      description:
        "Leverage cutting-edge AI and machine learning to automate and enhance your business processes.",
      icon: "🤖",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for modern applications.",
      icon: "☁️",
      gradient: "from-sky-500 to-blue-500",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="services">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to elevate your business
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 h-full transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />
                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                  </div>
                </div>
                <h3 className="relative z-10 text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-400 leading-relaxed">
                  {service.description.slice(0, 100)}...
                </p>

                <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className={`bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}
                  >
                    Learn More →
                  </span>
                </div>
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6 text-lg">
            Don’t see what you’re looking for?
          </p>

          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-800 py-4 px-10 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            Get Custom Solution →
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        description={selectedService?.description || ""}
        gradient={selectedService?.gradient || "from-blue-500 to-cyan-500"}
      />
    </section>
  );
};

export default Services;
