// D:\New folder\mur-craftsolution\src\components\About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    return (
        <section className="relative w-full py-20 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 text-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when the section is in view
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About Us
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700">
                        We are a team of passionate developers, designers, and thinkers who create exceptional digital experiences.
                    </p>

                </motion.div>

                {/* About Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }} // Animate on scroll into view
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <h3 className="text-3xl font-semibold mb-4">Who We Are</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            MUR Crafts Solutions is a team of highly skilled professionals dedicated to delivering cutting-edge web
                            solutions that drive business growth and enhance user experiences.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4">
                            With years of experience in web development, design, and UI/UX, we provide custom solutions that empower
                            businesses to thrive in the digital world.
                        </p>
                        {/* CTA Section */}
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} // Fade-in effect on scroll into view
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-xl transition-all duration-300 hover:bg-blue-700 transform hover:scale-105">
                                Join Our Team
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image or Illustration */}
                    <motion.div
                       initial={{ opacity: 0, x: 20 }} // Pehle 100 tha
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 1, ease: "easeInOut" }}
                       className="relative"
                    >
                        <Image
                            src="/aboutImg.png"
                            alt="Our Team"
                            width={500}  // Add this
                            height={300} // Add this
                            className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-500 transform group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
