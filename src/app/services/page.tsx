'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Palette, Smartphone, Cloud, Megaphone } from 'lucide-react';

const servicesData = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Building high-performance, scalable, and secure web applications tailored to your business needs. From custom websites to complex enterprise solutions, we deliver robust digital experiences.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'CMS Integration (WordPress, Strapi)',
      'API Development & Integration',
      'Performance Optimization',
      'Responsive Design',
    ],
  },
  {
    id: 'ai-solutions',
    title: 'AI & Machine Learning',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Leveraging artificial intelligence and machine learning to automate processes, gain insights, and create intelligent systems that drive innovation and efficiency.',
    features: [
      'Custom AI Model Development',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Predictive Analytics',
      'AI-powered Chatbots & Assistants',
      'Data Science & Analytics',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: Palette,
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Crafting intuitive, engaging, and aesthetically pleasing user interfaces and experiences that captivate your audience and ensure seamless interaction.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Information Architecture',
      'Interaction Design',
      'Visual Design & Branding',
      'Usability Testing',
    ],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    gradient: 'from-orange-500 to-amber-500',
    description: 'Developing native and cross-platform mobile applications that deliver exceptional performance and user experience on iOS and Android devices.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform (React Native, Flutter)',
      'Backend Integration',
      'Push Notifications',
      'App Store Optimization (ASO)',
    ],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & DevOps',
    icon: Cloud,
    gradient: 'from-red-500 to-yellow-500',
    description: 'Designing, deploying, and managing robust cloud infrastructure and implementing DevOps practices to streamline your development lifecycle and ensure scalability.',
    features: [
      'Cloud Strategy & Migration (AWS, Azure, GCP)',
      'CI/CD Pipelines',
      'Containerization (Docker, Kubernetes)',
      'Infrastructure as Code (IaC)',
      'Monitoring & Logging',
      'Security & Compliance',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: Megaphone,
    gradient: 'from-pink-500 to-purple-500',
    description: 'Boosting your online presence and reaching your target audience through comprehensive digital marketing strategies and execution.',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Content Marketing',
      'Pay-Per-Click (PPC) Advertising',
      'Email Marketing',
      'Analytics & Reporting',
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="relative min-h-screen bg-black text-white py-20 pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital solutions to empower your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;