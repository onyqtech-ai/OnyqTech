'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-4xl px-6 py-3 flex items-center justify-between rounded-full border border-white/10 bg-[#151619]/60 backdrop-blur-md shadow-lg"
    >
      {/* Brand Logo - Increased Size */}
      <a href="#about" className="flex items-center select-none cursor-pointer">
        <Image 
          src="/logo.png" 
          alt="Onyq Tech Logo" 
          width={180} 
          height={52} 
          className="object-contain drop-shadow-md" 
          priority 
        />
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      {/* Primary Action Button */}
      <a href="#contact" className="px-5 py-2 text-xs font-semibold tracking-wider bg-white text-black rounded-full hover:bg-gray-200 transition-all shadow-md">
        Inquire Now
      </a>
    </motion.nav>
  );
}