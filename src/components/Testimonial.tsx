'use client';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Ali Ahmed',
        designation: 'CEO, TechCorp',
        feedback: 'MUR Crafts Solution provided outstanding service! The website they built for us exceeded expectations.',
        image: '/ali.png'
    },
    {
        id: 2,
        name: 'Sarah Khan',
        designation: 'Marketing Manager, Brandify',
        feedback: 'Great attention to detail! Their UI/UX skills transformed our online presence beautifully.',
        image: '/sarah.png'
    },
    {
        id: 3,
        name: 'Zain Malik',
        designation: 'Founder, StartupX',
        feedback: 'Their expertise in Next.js and Tailwind made our platform fast and responsive. Highly recommended!',
        image: '/zain.png'
    },
    {
        id: 4,
        name: 'Hira Fatima',
        designation: 'Product Designer, UX Solutions',
        feedback: 'The team at MUR Crafts Solution truly understands user experience. Our customers love the new design!',
        image: '/hira.png'
    }
];


export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <h2 className="text-4xl font-bold">What Our Clients Say</h2>
                <p className="text-gray-400 mt-2">Real stories from real customers.</p>
            </motion.div>

            <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={testimonial.id} 
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                    >
                        <div className="flex items-center gap-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-gray-400" />
                            <div>
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-gray-400 text-sm">{testimonial.designation}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-300 italic">"{testimonial.feedback}"</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
