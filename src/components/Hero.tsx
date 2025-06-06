// D:\New folder\mur-craftsolution\src\components\Hero.tsx
'use client';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'; // Import the Typewriter component

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/hero1.jpg', // Background Image URL
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Fixed Position */}
     {/* Background Image with Fixed Position */}  
<div
  className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
  style={{
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundAttachment: 'fixed', // یہ ہٹاو یا replace کرو `backgroundAttachment: 'scroll'`
  }}
/>

      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-16 py-10 mt-[200px] flex flex-col justify-center items-center">
        {/* Hero Title with Typewriter Animation */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <Typewriter
            words={['Welcome to MUR Crafts Solutions']}
            loop={0} // Loop for the animation
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        {/* Hero Subtitle with Typewriter Animation */}
        <p className="text-lg md:text-2xl mb-6">
          <Typewriter
            words={['Your trusted partner for building high-end websites']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        {/* Get Started and Contact Us Buttons */}
        <div className="space-x-5 flex justify-center mb-4">
          <button className="bg-blue-600 px-8 py-4 rounded-full text-xl transition-all duration-300 hover:bg-blue-700 transform hover:scale-110 animate__animated animate__fadeIn">
            Get Started
          </button>

          <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-xl transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-110 animate__animated animate__fadeIn">
            Contact Us
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
