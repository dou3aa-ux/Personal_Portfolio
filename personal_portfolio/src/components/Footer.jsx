import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-white pt-16 pb-10 border-t border-pink-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* LOGO - Bold Pink to stand out on White */}
        <h2 className="text-2xl font-black text-[#f48fb1] italic tracking-tighter mb-4">
          Assila Douaa.dev
        </h2>

        {/* NAVIGATION LINKS */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
          {['Home', 'About', 'Projects', 'Vlogs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-[#f48fb1] font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* SOCIAL LINKS (Emoji Style - Works without installs) */}
        <div className="flex gap-8 mb-10">
          <a href="#" className="group relative">
            <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">📸</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 group-hover:w-full transition-all" />
          </a>
          <a href="#" className="group relative">
            <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">💻</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 group-hover:w-full transition-all" />
          </a>
          <a href="#" className="group relative">
            <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">💼</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 group-hover:w-full transition-all" />
          </a>
        </div>

        {/* MINIMALIST DIVIDER */}
        <div className="w-12 h-[2px] bg-pink-100 rounded-full mb-8" />

        {/* COPYRIGHT & CREDITS */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-[0.4em]">
            Designed & Built with 
            <span className="text-[#f48fb1] animate-pulse text-xs">♥</span> 
            by Douaa
          </p>
          <p className="text-[8px] text-gray-300 uppercase tracking-widest mt-2">
            © 2024 All Rights Reserved
          </p>
        </div>
      </div>

      {/* Optional: Subtle floating sparkle detail in the corner */}
      <div className="absolute bottom-4 right-8 opacity-20 pointer-events-none">
        <span className="text-pink-300 text-2xl"></span>
      </div>
    </footer>
  );
};

export default Footer;