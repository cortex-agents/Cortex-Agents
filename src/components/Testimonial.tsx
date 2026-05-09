'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const testimonials = [
    {
        id: 1,
        name: 'Ali Ahmed',
        designation: 'CEO, TechCorp',
        feedback: 'Cortex Agents provided outstanding service! The website they built for us exceeded expectations.',
        image: '/ali.png',
        rating: 5,
        gradient: 'from-sky-400 to-sky-600' // Sky Blue - Development
    },
    {
        id: 2,
        name: 'Sarah Khan',
        designation: 'Marketing Manager, Brandify',
        feedback: 'Great attention to detail! Their UI/UX skills transformed our online presence beautifully.',
        image: '/sarah.png',
        rating: 5,
        gradient: 'from-cyan-400 to-cyan-600' // Cyan - Creative/Design
    },
    {
        id: 3,
        name: 'Zain Malik',
        designation: 'Founder, StartupX',
        feedback: 'Their expertise in Next.js and Tailwind made our platform fast and responsive. Highly recommended!',
        image: '/zain.png',
        rating: 5,
        gradient: 'from-sky-400 to-cyan-400' // Electric Cyan - AI Intelligence
    },
    {
        id: 4,
        name: 'Hira Fatima',
        designation: 'Product Designer, UX Solutions',
        feedback: 'The team at Cortex Agents truly understands user experience. Our customers love the new design!',
        image: '/hira.png',
        rating: 5,
        gradient: 'from-teal-400 to-teal-600' // Teal - Data/Analytics
    }
];

export default function Testimonials() {
    return (
        <section className="relative py-20  text-white overflow-hidden">


            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 text-transparent bg-clip-text">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                        Real stories from real customers who trust us
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 h-full transition-all duration-500 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/20 overflow-hidden">
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                                {/* Quote Icon */}
                                <div className={`absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                                    <Quote size={64} className="text-sky-400" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Stars Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className={`fill-current text-amber-400`}
                                            />
                                        ))}
                                    </div>

                                    {/* Feedback Text */}
                                    <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                                        {testimonial.feedback}
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-sky-400/20">
                                        <div className={`relative p-0.5 rounded-full bg-gradient-to-br ${testimonial.gradient} group-hover:scale-105 transition-transform duration-300`}>
                                            <div className="bg-[#02040a] rounded-full p-1">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={56}
                                                    height={56}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-slate-400 text-sm">
                                                {testimonial.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Corner Glow */}
                                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${testimonial.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {[
                        { number: 100, suffix: '+', label: 'Happy Clients', gradient: 'from-sky-400 to-sky-600' },
                        { number: 200, suffix: '+', label: 'Projects Done', gradient: 'from-cyan-400 to-cyan-600' },
                        { number: 5, suffix: ' Star', label: 'Average Rating', gradient: 'from-sky-400 to-cyan-400' },
                        { number: 24, suffix: '/7', label: 'Support', gradient: 'from-teal-400 to-teal-600' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 text-center hover:border-sky-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/20"
                        >
                            <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text mb-2`}>
                                <AnimatedCounter
                                    target={stat.number}
                                    suffix={stat.suffix}
                                    duration={2000}
                                />
                            </div>
                            <div className="text-slate-400 text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-slate-400 mb-6 text-lg">
                        Ready to join our satisfied clients?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Start Your Project</span>
                        <span className="relative z-10">→</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                            style={{ width: '200%' }}
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}