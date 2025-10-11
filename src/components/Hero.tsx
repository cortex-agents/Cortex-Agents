'use client';
import CompanyShowcaseCard from '../components/CompanyShowcaseCard';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden " id="home">
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 lg:px-24 gap-8 md:gap-12">
        {/* Left Side - Text Content */}
        <div className="mt-18 md:mt-0 flex-1 text-left text-white max-w-2xl">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Cortex Agents
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-300 font-semibold leading-relaxed">
            Your trusted partner for building high-end websites
          </p>
      </div>

        {/* Right Side - Company Card */}
        <div className="flex-1 max-w-xl w-full hidden md:block">
          <CompanyShowcaseCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;