import React from 'react';
import meImage from '../assets/Me.png'; 

const LinkWindow = () => {
  return (
    // 'max-w-2xl' is about 672px wide. Perfect for a centered feature.
    <div className="w-full max-w-2xl mx-auto bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      
      {/* Top Bar */}
      <div className="bg-pink-200 border-b-2 border-black p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-black"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-black"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-400 border border-black"></div>
        </div>
        <div className="bg-white border border-black px-5 py-1.5 rounded-full text-xs font-mono truncate w-1/2 text-center shadow-sm">
          assila.dev/links
        </div>
        <div className="w-8"></div>
      </div>

      {/* Content Area */}
      <div className="p-8 bg-[#fffafa]">
        
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center md:items-start">
          
          {/* Image Container - Slightly larger (w-32) */}
          <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-black rounded-xl overflow-hidden bg-pink-100 flex-shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
             <img src={meImage} alt="Assila" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-['Playfair_Display'] font-bold text-3xl mb-3 text-gray-900">
              About Me
            </h3>
            <div className="bg-pink-100 border border-black p-4 rounded-xl text-sm md:text-base leading-relaxed text-gray-800">
              Hello!! I'm <span className="font-bold text-pink-600">Assila</span>, a creative developer from Tunisia. 
              I love building cute websites and turning ideas into reality! ✨
            </div>
          </div>
        </div>

        {/* Links Section */}
        <h4 className="font-bold text-xs mb-4 uppercase tracking-[0.3em] text-gray-500 text-center md:text-left">
          My Links
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" className="bg-white border-2 border-black p-3 text-center rounded-xl hover:bg-pink-200 transition-all text-sm font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
            Instagram
          </a>
          <a href="#" className="bg-white border-2 border-black p-3 text-center rounded-xl hover:bg-pink-200 transition-all text-sm font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkWindow;