import { useState, useRef } from 'react';

// Company Showcase Card with 3D tilt effect
const CompanyShowcaseCard = () => {
  const [transform, setTransform] = useState<string>('');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(null);

  const services = [
    { icon: "🎨", name: "Web Design", color: "text-purple-400" },
    { icon: "⚡", name: "Web Development", color: "text-blue-400" },
    { icon: "🤖", name: "AI Solutions", color: "text-emerald-400" },
    { icon: "📱", name: "Mobile Apps", color: "text-pink-400" },
    { icon: "☁️", name: "Cloud Services", color: "text-cyan-400" },
    { icon: "🚀", name: "Performance", color: "text-orange-400" },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    const clampedX = Math.max(-1, Math.min(1, mouseX));
    const clampedY = Math.max(-1, Math.min(1, mouseY));

    const rotateX = clampedY * -12;
    const rotateY = clampedX * 12;
    const translateX = clampedX * 3;
    const translateY = clampedY * -3;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(() => {
      setTransform(
        `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(${isHovering ? 20 : 0}px) scale(${isHovering ? 1.02 : 1})`
      );
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) translateZ(0px) scale(1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-96 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-gray-900 via-blue-950/20 to-gray-900 shadow-2xl  overflow-hidden group backdrop-blur-sm cursor-pointer will-change-transform"
      style={{
        transform: transform,
        transition: isHovering 
          ? 'box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease' 
          : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
    >

      
      {/* Card Content */}
      <div className="p-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
        
        {/* Services Grid */}
        <div className="relative z-10 mb-6">
          <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
            <span className="text-blue-400">●</span> Our Expertise
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800/80 p-3 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group/item"
              >
                <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
                <span className={`text-sm font-medium ${service.color}`}>
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 grid grid-cols-3 gap-4 mt-6">
          <div className="text-center bg-blue-900/20 rounded-lg p-3 border border-blue-500/30">
            <div className="text-2xl font-bold text-blue-400">50+</div>
            <div className="text-xs text-gray-400 mt-1">Projects</div>
          </div>
          <div className="text-center bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
            <div className="text-2xl font-bold text-purple-400">2+</div>
            <div className="text-xs text-gray-400 mt-1">Years</div>
          </div>
          <div className="text-center bg-emerald-900/20 rounded-lg p-3 border border-emerald-500/30">
            <div className="text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-xs text-gray-400 mt-1">Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcaseCard;