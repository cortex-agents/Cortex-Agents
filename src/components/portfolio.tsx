'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    { id: 1, title: 'Furniture E-Commerce Website', description: 'Built with Next.js & Sanity', image: '/ecommerce.png', link: 'https://hackathone3.vercel.app/' },
    { id: 2, title: 'MER TECH Solution Portfolio Website', description: 'Modern UI/UX with Framer Motion', image: '/portfolio.png', link: 'https://mer-tech-solutions.vercel.app/' },
    { id: 3, title: 'Blog Website', description: 'CMS-powered blog using Next.js', image: '/blog.png', link: 'https://blog-website-livid-six.vercel.app/' }
];

export default function Portfolio() {
    return (
        <section className="bg-black text-white p-8">
            <motion.div
                className="text-center mb-10 p-8  "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <h2 className="text-4xl font-bold">My Portfolio</h2>
                <p className="text-gray-400 mt-2 text-lg md:text-xl  text-center">
                    Explore A Collection Of My Top Projects.
                </p>
            </motion.div>


            <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            glareEnable={true}
                            glareColor="#fff"
                            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                        >
                            {project.link ? (
                                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="rounded-md w-full mb-4 hover:opacity-80 transition-opacity duration-300"
                                    />
                                    <h3 className="text-xl font-semibold hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </Link>
                            ) : (
                                <>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="rounded-md w-full mb-4"
                                    />
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                </>
                            )}
                            <p className="text-gray-400">{project.description}</p>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
