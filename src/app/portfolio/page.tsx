'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import products from '../../components/data/products';
import { Product } from '../../components/data/products_types';

const PortfolioPage = () => {
  const projectData: Product[] = products;

  return (
    <main className="relative min-h-screen bg-black text-white py-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            All{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A complete showcase of our web creations, from idea to execution.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                className="h-full"
              >
                <div className="group relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                        View Project
                        <ExternalLink size={18} />
                      </div>
                    </Link>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                      >
                        <ExternalLink
                          size={16}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                        Live Demo
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
                  />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <Link href="/" className="text-gray-400 hover:text-white transition-all text-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PortfolioPage;
