import Link from 'next/link';
import { MotionDiv } from '@/components/ui/MotionDiv';
import ProjectCard from '@/components/ProjectCard';
import products from '../../components/data/products';
import { Product } from '../../components/data/products_types';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#02040a]">
      {/* Main Content */}
      <section className="relative min-h-screen w-full text-white py-20 px-4 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 via-transparent to-[#0ea5e9]/5 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 mb-6">
              <span className="text-sm text-[#38bdf8] font-medium tracking-wide">All Projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#38bdf8] to-white">
                Our Complete Portfolio
              </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore all our projects featuring cutting-edge technologies and innovative solutions
            </p>
          </MotionDiv>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((project: Product, index: number) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Back to Home CTA */}
          <MotionDiv
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/">
              <button className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-400/30 hover:shadow-xl hover:shadow-sky-400/50 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">← Back to Home</span>
              </button>
            </Link>
          </MotionDiv>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#02040a] to-transparent pointer-events-none" />
      </section>
    </div>
  );
}
