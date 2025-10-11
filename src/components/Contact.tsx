'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '@/utils/emailSerivce';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_name: "Cortex Agents",
      from_name: name,
      from_email: email,
      reply_to: email,
      message: message,
      subject: subject
    }

    try {
      await sendEmail(templateParams);
      alert("Message sent successfully! We'll get back to you soon.");
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
    catch (error) {
      console.error('Email Error', error);
      alert("Failed to send message. Please try again.");
    }
    finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cortexagents@gmail.com',
      href: 'mailto:cortexagents@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+123 456 7890',
      href: 'tel:+1234567890',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Karachi, Pakistan',
      href: '#',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="relative  text-white py-20 overflow-hidden" id="contact">

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
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Touch
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Lets discuss how we can help transform your business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links or Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-800/50">
                <p className="text-sm text-gray-400 mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {['LinkedIn', 'Twitter', 'GitHub'].map((social, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 flex items-center justify-center cursor-pointer transition-all duration-300 text-gray-400 hover:text-white text-sm font-medium"
                    >
                      {social[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="w-full p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500 resize-none"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-800 rounded-xl font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
  );
}