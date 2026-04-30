import React, { useState } from 'react';

const Vlogs = () => {
  const videoIds = [
    "TwS4GTnrbUc", 
    "zVMzBUQ-pUk", 
    "tfB-2X_VUck"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] flex flex-col items-center justify-center p-4">
      
      {/* Recording Header */}
      <div className="mb-8 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="text-pink-400 font-mono text-sm uppercase tracking-[0.3em]">REC 00:22:2026</span>
        </div>
      </div>

      {/* Main Container for Camera + Ribbon */}
      <div className="relative flex items-center">
        
        {/* --- THE CAMERA BODY (Thinner Design) --- */}
        {/* Reduced border from 12px to 6px and padding from p-10 to p-6 */}
        <div className="relative bg-[#f8ccd7] rounded-[50px] border-[6px] border-[#f4b8c8] shadow-[15px_15px_0px_#eec1cc] p-6 flex flex-col items-center max-w-[850px] w-full z-10">
          
          {/* Top Hardware Details */}
          <div className="w-full flex justify-center mb-6 gap-10">
            <div className="w-20 h-4 bg-[#e5a4b5] rounded-full shadow-inner" />
            <div className="w-5 h-5 bg-gray-800 rounded-full border-4 border-[#d493a4]" />
          </div>

          {/* MAIN INTERFACE AREA (The darker pink space) */}
          <div className="flex items-center gap-10 w-full bg-[#e5a4b5] p-6 rounded-[35px] shadow-inner">
            
            {/* THE SCREEN */}
            <div className="relative flex-grow aspect-video bg-black rounded-xl border-[6px] border-[#d493a4] overflow-hidden shadow-2xl">
              <iframe
                key={videoIds[currentIndex]}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoIds[currentIndex]}?autoplay=0&rel=0`}
                title="Vlog Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* THE BUTTON PANEL */}
            <div className="flex flex-col items-center gap-6 px-4">
              <div className="flex gap-3">
                 <div className="w-6 h-6 bg-[#f4b8c8] rounded-full shadow-sm" />
                 <div className="w-6 h-6 bg-[#f4b8c8] rounded-full shadow-sm" />
              </div>

              {/* NEXT BUTTON DIAL */}
              <div className="relative w-28 h-28 bg-[#f4b8c8] rounded-full border-4 border-[#d493a4] shadow-md flex items-center justify-center">
                <button 
                  onClick={nextVideo}
                  type="button"
                  className="w-16 h-16 bg-pink-500 rounded-full border-[3px] border-pink-300 flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer z-[50] hover:bg-pink-400"
                >
                  <span className="text-white text-xs font-black pointer-events-none">NEXT</span>
                </button>
                <div className="absolute top-2 text-[10px] text-[#d493a4] font-black uppercase">W</div>
                <div className="absolute bottom-2 text-[10px] text-[#d493a4] font-black uppercase">T</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <div className="w-8 h-8 bg-[#d493a4] rounded-lg shadow-inner flex items-center justify-center text-[10px] text-white font-bold">MENU</div>
                 <div className="w-8 h-8 bg-[#d493a4] rounded-lg shadow-inner flex items-center justify-center text-[10px] text-white">🏠</div>
              </div>
            </div>
          </div>

          {/* Brand Label */}
          <div className="w-full mt-6 px-6 flex justify-between items-end">
            <span className="text-[#d493a4] font-black italic text-xl tracking-tighter opacity-40 select-none">SONY-ISH</span>
            <div className="opacity-30">
               <div className="w-10 h-1 bg-[#d493a4] rounded-full mb-1.5" />
               <div className="w-16 h-1 bg-[#d493a4] rounded-full" />
            </div>
          </div>
        </div>

        {/* --- ATTACHED RIBBON (Adjusted for thinner bezel) --- */}
        <div className="absolute -right-8 top-1/2 flex flex-col items-center z-[20]">
          <div className="w-1.5 h-20 bg-pink-200 rounded-full shadow-sm border-r border-pink-300" />
          <div className="w-14 h-14 bg-yellow-100 rounded-full border-[3px] border-yellow-200 flex items-center justify-center shadow-xl -mt-5 rotate-12 animate-bounce">
             <span className="text-xl">🎀</span>
          </div>
        </div>

      </div>

      <p className="mt-8 text-pink-300 font-mono text-[10px] uppercase tracking-widest">
        Click NEXT to cycle through {videoIds.length} memories
      </p>

    </div>
  );
};

export default Vlogs;