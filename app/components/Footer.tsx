'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#151619] pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        
        {/* Left Side: Brand Logo - Increased Size */}
        <div className="flex flex-col space-y-4">
          <Image 
            src="/logo.png" 
            alt="Onyq Tech Logo" 
            width={180} 
            height={52} 
            className="object-contain opacity-90" 
          />
          <p className="text-sm text-gray-500 max-w-xs">
            Engineering custom web applications and enterprise software from Pune, India.
          </p>
        </div>

        {/* Right Side: Quick Links with Mint Hover */}
        <div className="flex gap-8 text-sm text-gray-400">
          <div className="flex flex-col space-y-2">
            <a href="#services" className="hover:text-[#5EEAD4] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#5EEAD4] transition-colors">Projects</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#contact" className="hover:text-[#5EEAD4] transition-colors">Contact</a>
            <a href="/verify" className="hover:text-[#5EEAD4] transition-colors">Verify Certificate</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© {currentYear} Onyq Tech. All rights reserved.</p>
        <p className="tracking-wider">MSME UDYAM REGISTRATION PENDING</p>
      </div>
    </footer>
  );
}