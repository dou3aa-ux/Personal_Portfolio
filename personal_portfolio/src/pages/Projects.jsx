import React, { useState } from 'react';

const Projects = () => {
  const myProjects = [
    {
      title: "Project One",
      description: "A cool app I built",
      image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Project+1+Demo",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Another awesome creation",
      image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Project+2+Demo",
      link: "#"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextProject = () => setIndex((prev) => (prev + 1) % myProjects.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + myProjects.length) % myProjects.length);

  return (
    <div className="min-h-screen bg-[#fff5f7] flex flex-col items-center justify-center p-6">
      
      {/* THE CONSOLE BODY */}
      <div className="relative bg-[#fbb6ce] w-full max-w-[950px] aspect-[2/1] rounded-[90px] border-[14px] border-[#f6a5c0] shadow-[0_30px_60px_rgba(244,143,177,0.4)] flex items-center p-2 overflow-hidden">
        
        {/* LEFT CONTROLS (D-Pad for PREV) */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12 z-10">
          <div className="w-20 h-20 bg-[#d1d5db] rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2),0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <div className="w-14 h-14 bg-[#e5e7eb] rounded-full shadow-md border-2 border-white/20" />
          </div>

          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute w-20 h-7 bg-[#d1d5db] rounded-sm shadow-md" />
            <div className="absolute h-20 w-7 bg-[#d1d5db] rounded-sm shadow-md" />
            
            {/* Transparent button overlay for D-pad interaction */}
            <button 
              onClick={prevProject}
              className="absolute inset-0 z-20 flex items-center justify-center group cursor-pointer"
              title="Previous Project"
            >
              <div className="w-full h-full relative">
                {/* Visual feedback for the left side of the D-pad */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 active:bg-gray-400/20 rounded-sm" />
              </div>
            </button>
            <div className="absolute w-4 h-4 bg-[#c4c9d1] rounded-full z-10 shadow-inner" />
          </div>
        </div>

        {/* THE SCREEN AREA */}
        <div className="flex-[3.5] h-[82%] bg-black rounded-2xl border-[10px] border-[#f48fb1] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,1)] group">
          <img 
            src={myProjects[index].image} 
            alt={myProjects[index].title} 
            className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">{myProjects[index].title}</h3>
            <p className="text-sm mt-2 mb-6 font-medium text-pink-100">{myProjects[index].description}</p>
            <a 
              href={myProjects[index].link}
              className="bg-pink-500 px-6 py-2 rounded-full text-xs font-black hover:bg-white hover:text-pink-500 transition-all shadow-lg uppercase tracking-widest"
            >
              Start Game
            </a>
          </div>
        </div>

        {/* RIGHT CONTROLS (ABXY for NEXT) */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12 z-10">
          <div className="relative w-24 h-24">
            {/* All ABXY buttons now trigger nextProject for a seamless "Next" feel */}
            {['X', 'B', 'Y', 'A'].map((label, i) => {
              const positions = [
                "top-0 left-1/2 -translate-x-1/2",
                "bottom-0 left-1/2 -translate-x-1/2",
                "left-0 top-1/2 -translate-y-1/2",
                "right-0 top-1/2 -translate-y-1/2"
              ];
              return (
                <button 
                  key={label}
                  onClick={nextProject}
                  className={`absolute ${positions[i]} w-8 h-8 bg-[#d1d5db] rounded-full shadow-md active:shadow-inner active:scale-95 flex items-center justify-center text-[10px] font-bold text-gray-600 transition-transform cursor-pointer`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="w-20 h-20 bg-[#d1d5db] rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2),0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
            <div className="w-14 h-14 bg-[#e5e7eb] rounded-full shadow-md border-2 border-white/20" />
          </div>
        </div>

        {/* Decorative Details */}
        <div className="absolute bottom-12 right-16 w-6 h-6 bg-[#d1d5db] rounded-full border-2 border-[#f6a5c0] shadow-inner flex items-center justify-center">
             <div className="w-2 h-2 bg-gray-400 rounded-full" />
        </div>
        <div className="absolute top-12 left-16 w-5 h-2 bg-[#d1d5db] rounded-full border border-[#f6a5c0] shadow-inner" />
      </div>

      {/* Pagination Pips */}
      <div className="mt-10 flex gap-3">
        {myProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${index === i ? 'w-10 bg-pink-400' : 'w-3 bg-pink-200 hover:bg-pink-300'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;