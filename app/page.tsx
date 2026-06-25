'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Component Imports
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#151619] text-white overflow-x-hidden selection:bg-[#5EEAD4] selection:text-black">
      
      {/* THE ENTRY GATE LOADER WITH CUSTOM LOGO */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#151619]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center select-none"
            >
              <Image 
                src="/logo.png" 
                alt="Onyq Tech" 
                width={280} 
                height={80} 
                className="object-contain drop-shadow-2xl opacity-90"
                priority 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE MAIN WEBSITE CONTENT */}
      {!isLoading && (
        <div className="relative w-full min-h-screen flex flex-col">
          
          <Navbar />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-32 w-full flex flex-col items-center justify-center flex-grow"
          >
            <section id="about" className="w-full px-4 flex justify-center scroll-mt-32">
              <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-center max-w-4xl leading-tight mb-8 mt-12 md:mt-20">
                Engineering Custom Web Applications & <span className="font-semibold text-white">Enterprise Software</span>
              </h1>
            </section>
            
            <section id="services" className="w-full scroll-mt-32">
              <Carousel />
            </section>
            
            <ProjectsSection />
            <ContactSection />
            
          </motion.div>

          <Footer />

        </div>
      )}

    </main>
  );
}