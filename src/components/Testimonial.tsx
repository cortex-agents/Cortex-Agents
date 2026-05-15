import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCounter from './AnimatedCounter';

// Inline SVGs for minimal hydration
const QuoteIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1 0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1 0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>;
const StarIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

const testimonials = [
    {
        id: 1,
        name: 'Ali Ahmed',
        designation: 'CEO, TechCorp',
        feedback: 'Cortex Agents provided outstanding service! The website they built for us exceeded expectations.',
        image: '/ali.webp',
        rating: 5,
        gradient: 'from-sky-400 to-sky-600'
    },
    {
        id: 2,
        name: 'Sarah Khan',
        designation: 'Marketing Manager, Brandify',
        feedback: 'Great attention to detail! Their UI/UX skills transformed our online presence beautifully.',
        image: '/sarah.webp',
        rating: 5,
        gradient: 'from-cyan-400 to-cyan-600'
    },
    {
        id: 3,
        name: 'Zain Malik',
        designation: 'Founder, StartupX',
        feedback: 'Their expertise in Next.js and Tailwind made our platform fast and responsive. Highly recommended!',
        image: '/zain.webp',
        rating: 5,
        gradient: 'from-sky-400 to-cyan-400'
    },
    {
        id: 4,
        name: 'Hira Fatima',
        designation: 'Product Designer, UX Solutions',
        feedback: 'The team at Cortex Agents truly understands user experience. Our customers love the new design!',
        image: '/hira.webp',
        rating: 5,
        gradient: 'from-teal-400 to-teal-600'
    }
];

export default function Testimonials() {
    return (
        <section className="relative py-20 text-white overflow-hidden" id="testimonials">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
                {/* Section Title */}
                <div
                    className="text-center mb-16 animate-fade-in-up"
                    style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 text-transparent bg-clip-text">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                        Real stories from real customers who trust us
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="group relative animate-fade-in-up"
                            style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both' }}
                        >
                            <div className="relative bg-[#02040a]/90 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 h-full transition-all duration-500 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/20 overflow-hidden">
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                                {/* Quote Icon */}
                                <div className={`absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500`} aria-hidden="true">
                                    <QuoteIcon className="text-sky-400" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Stars Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`text-amber-400`}
                                            />
                                        ))}
                                    </div>

                                    {/* Feedback Text */}
                                    <div className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                                        {testimonial.feedback}
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-sky-400/20">
                                        <div className={`relative p-0.5 rounded-full bg-gradient-to-br ${testimonial.gradient} transition-transform duration-300 group-hover:scale-105`}>
                                            <div className="bg-[#02040a] rounded-full p-1">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={56}
                                                    height={56}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">
                                                {testimonial.name}
                                            </h3>
                                            <div className="text-slate-400 text-sm">
                                                {testimonial.designation}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Corner Glow */}
                                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${testimonial.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up"
                    style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
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
                </div>

                {/* CTA */}
                <div
                    className="mt-16 text-center animate-fade-in-up"
                    style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                >
                    <p className="text-slate-400 mb-6 text-lg">
                        Ready to join our satisfied clients?
                    </p>
                    <Link
                        href="/contact"
                        aria-label="Start Your Project"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Start Your Project</span>
                        <span className="relative z-10">→</span>
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                            style={{ width: '200%' }}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
