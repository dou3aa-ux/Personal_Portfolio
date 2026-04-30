import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fdf2f2] flex items-center justify-center p-4 md:p-8">
      
      {/* 1. The Binder Cover (The Pink Outer Edge) */}
      <div className="relative w-full max-w-5xl aspect-[3/2] bg-[#eec1cc] rounded-[2rem] p-4 shadow-[20px_20px_60px_#d9a5b1,-20px_-20px_60px_#ffffff] flex items-stretch border-4 border-white/30">
        
        {/* 2. The Paper Pages (The White Interior) */}
        <div className="w-full h-full bg-white rounded-2xl shadow-inner flex overflow-hidden relative">
          
          {/* 3. The Metal Rings */}
          <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 flex flex-col justify-around py-8 z-20 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="relative flex items-center justify-center h-full">
                {/* The Metal Loop */}
                <div className="w-10 h-3 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 rounded-full shadow-md border-b border-black/20" />
                {/* The Holes in the paper */}
                <div className="absolute w-4 h-4 bg-gray-200 rounded-full left-[-10px] shadow-inner border border-gray-300" />
                <div className="absolute w-4 h-4 bg-gray-200 rounded-full right-[-10px] shadow-inner border border-gray-300" />
              </div>
            ))}
          </div>

          {/* 4. Left Page Content */}
          <div className="w-1/2 h-full pt-16 pb-12 pl-12 pr-16 border-r-2 border-gray-100">
             <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 italic">
               About Me
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-medium text-sm md:text-base">
              {/* FIXED: Added closing </p> tag here */}
              <p>
                Hi! I'm <span className="text-pink-500 font-bold underline decoration-pink-200 underline-offset-4">Douaa</span>. 
                I’m a software developer who enjoys exploring different fields,
                driven by curiosity and a desire to create meaningful experiences.
              </p> 
              <p>
                I’m currently focused on building beautiful websites to deepen my skills and develop my own unique style.
              </p>
            </div>
          </div>

          {/* 5. Right Page Content */}
          <div className="w-1/2 h-full pt-16 pb-12 pl-16 pr-12 flex flex-col">
            <h2 className="text-2xl font-serif text-gray-700 mb-6 border-b-2 border-pink-100 pb-2 inline-block w-fit">
              My Hobbies
            </h2>
            
            <ul className="space-y-4 text-gray-700 italic font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full" /> Reading novels (Crime)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full" /> Sports
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full" /> Chess
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full" /> Gaming
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-400 rounded-full" /> Kdrama & anime
              </li>
            </ul>

            <div className="mt-auto mb-8 p-4 border-2 border-dashed border-pink-200 rounded-xl bg-pink-50/50">
              <p className="text-xs md:text-sm text-pink-700 font-bold text-center italic">
                "Building things that make people smile, one pixel at a time."
              </p>
            </div>
          </div>

          {/* 6. Tabs */}
          <div className="absolute right-0 top-1/4 flex flex-col gap-1">
            <div className="w-4 h-12 bg-pink-200 rounded-l-md" />
            <div className="w-4 h-12 bg-pink-300 rounded-l-md" />
            <div className="w-4 h-12 bg-pink-400 rounded-l-md" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;