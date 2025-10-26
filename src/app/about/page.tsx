'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lightbulb, Users, Handshake, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="relative min-h-screen bg-black text-white py-20 pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Us
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our journey, values, and what makes us your ideal partner.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <motion.section
          className="mb-20 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-700/30">
            <Image
              src="/aboutImg.png"
              alt="Our Story"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Story
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Cortex Agents was founded with a vision to revolutionize digital experiences through cutting-edge technology and innovative design. We started as a small team of passionate developers and designers, united by a common goal: to deliver exceptional web and AI solutions that empower businesses to thrive in the digital age.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Over the years, we&apos;ve grown, but our core values remain the same. We believe in pushing boundaries, fostering creativity, and building lasting relationships with our clients based on trust and transparency. Every project is a journey we embark on with dedication, ensuring tailor-made solutions that exceed expectations.
            </p>
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-white">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Values
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Innovation', description: 'Continuously exploring new technologies to deliver groundbreaking solutions.' },
              { icon: Handshake, title: 'Integrity', description: 'Building trust through transparent communication and ethical practices.' },
              { icon: Users, title: 'Collaboration', description: 'Working closely with clients to achieve shared goals and foster success.' },
              { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest quality in every project we undertake.' },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 space-y-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 inline-block shadow-lg">
                    <Icon size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-white">
            Why{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Choose Us?
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Expertise & Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team comprises seasoned professionals with extensive experience in web development, AI, and UI/UX design. We stay ahead of industry trends to provide you with solutions that are not only current but future-proof.
              </p>
              <h3 className="text-2xl font-bold text-white">Client-Centric Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                Your vision is our priority. We work closely with you from conception to deployment, ensuring every solution is perfectly aligned with your business objectives and delivers measurable results.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Innovation & Quality</h3>
              <p className="text-gray-400 leading-relaxed">
                We are committed to innovation, leveraging the latest technologies to build high-quality, scalable, and secure applications. Our rigorous quality assurance processes guarantee a flawless user experience.
              </p>
              <h3 className="text-2xl font-bold text-white">Transparent Communication</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe in clear and honest communication. You&apos;ll be kept in the loop at every stage of your project, with regular updates and direct access to our team.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default AboutPage;