'use client';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Building responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.',
            icon: '💻',
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive and user-friendly designs that provide great user experiences.',
            icon: '🎨',
        },
        {
            title: 'E-commerce Solutions',
            description: 'Custom e-commerce websites tailored to your business needs, integrated with the best payment systems.',
            icon: '🏪',
        },
        {
            title: 'SEO Optimization',
            description: 'Boosting your website’s visibility on search engines to drive more organic traffic.',
            icon: '🔍',
        },
    ];

    return (
        <section className="py-20 bg-gray-100" id="services">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                        Our Services
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        We offer a wide range of digital services to help your business grow and succeed online.
                    </p>
                </motion.div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-500 p-8 rounded-lg shadow-lg text-center relative overflow-hidden group"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Background hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-200 opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Icon */}
                            <p className="text-6xl mx-auto mb-6 relative z-10">{service.icon}</p>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800 relative z-10">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
