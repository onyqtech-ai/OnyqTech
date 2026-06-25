'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The data structure for your agency's pitch deck
const slides = [
  {
    id: 0,
    title: "ONYQ TECH",
    subtitle: "End-to-End Enterprise Engineering.",
    description: "We don't just build websites. We architect custom web applications, internal tools, and automated business systems.",
    highlight: "Full-Stack Development"
  },
  {
    id: 1,
    title: "Lightning-Fast UIs",
    subtitle: "React & Next.js Architecture.",
    description: "We deliver pixel-perfect, highly interactive user interfaces that load instantly and perform flawlessly across all devices.",
    highlight: "Frontend Execution"
  },
  {
    id: 2,
    title: "Robust Data Pipelines",
    subtitle: "MongoDB & Node.js Backends.",
    description: "Secure, scalable database architectures designed to handle complex queries, user authentication, and high-volume traffic.",
    highlight: "Backend & Database"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 h-[400px] flex items-center justify-center">
      
      {/* The Slides Container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-[#1e1f24]/50 backdrop-blur-sm shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-16"
          >
            <span className="px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-[#00F0FF] bg-[#00F0FF]/10 rounded-full">
              {slides[currentIndex].highlight}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              {slides[currentIndex].title}
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-gray-300 mb-6">
              {slides[currentIndex].subtitle}
            </h3>
            <p className="max-w-2xl text-base md:text-lg text-gray-400">
              {slides[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#151619] border border-white/10 text-white hover:bg-white hover:text-black transition-all z-10"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#151619] border border-white/10 text-white hover:bg-white hover:text-black transition-all z-10"
      >
        &#8594; {/* Right Arrow */}
      </button>

      {/* Slide Indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#00F0FF]' : 'w-2 bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
}