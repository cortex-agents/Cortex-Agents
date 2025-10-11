'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Ali Ahmed',
        designation: 'CEO, TechCorp',
        feedback: 'Cortex Agents provided outstanding service! The website they built for us exceeded expectations.',
        image: '/ali.png',
        rating: 5,
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        id: 2,
        name: 'Sarah Khan',
        designation: 'Marketing Manager, Brandify',
        feedback: 'Great attention to detail! Their UI/UX skills transformed our online presence beautifully.',
        image: '/sarah.png',
        rating: 5,
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        id: 3,
        name: 'Zain Malik',
        designation: 'Founder, StartupX',
        feedback: 'Their expertise in Next.js and Tailwind made our platform fast and responsive. Highly recommended!',
        image: '/zain.png',
        rating: 5,
        gradient: 'from-emerald-500 to-teal-500'
    },
    {
        id: 4,
        name: 'Hira Fatima',
        designation: 'Product Designer, UX Solutions',
        feedback: 'The team at Cortex Agents truly understands user experience. Our customers love the new design!',
        image: '/hira.png',
        rating: 5,
        gradient: 'from-orange-500 to-amber-500'
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
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
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
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 h-full transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl overflow-hidden">
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                                
                                {/* Quote Icon */}
                                <div className={`absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                                    <Quote size={64} className="text-white" />
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
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                                        `{testimonial.feedback}`
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50">
                                        <div className={`relative p-0.5 rounded-full bg-gradient-to-br ${testimonial.gradient} group-hover:scale-105 transition-transform duration-300`}>
                                            <div className="bg-gray-900 rounded-full p-1">
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
                                            <p className="text-gray-400 text-sm">
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
                        { number: '100+', label: 'Happy Clients' },
                        { number: '200+', label: 'Projects Done' },
                        { number: '5 Star', label: 'Average Rating' },
                        { number: '24/7', label: 'Support' }
                    ].map((stat, index) => (
                        <div 
                            key={index}
                            className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm">
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
                    <p className="text-gray-400 mb-6 text-lg">
                        Ready to join our satisfied clients?
                    </p>
                    <button className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-800 py-4 px-10 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl shadow-white/20 transform hover:scale-105 active:scale-95 inline-flex items-center gap-2">
                        Start Your Project
                        <span>→</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}