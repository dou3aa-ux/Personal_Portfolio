import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CuteTerminal = () => {
  const [activeCommand, setActiveCommand] = useState('welcome');

  const commands = {
    welcome: "System ready... Click a command to start exploring!",
    about: "Name: Assila Douaa\nRole: Software Engineering Student\nLoc: Tunisia 🌍\nMission: Building cute things with clean code.",
    skills: "Mastering: web dev, cyber security.\nLeveling up: Node.js & UI Design.\nWeapon of choice: VS Code.",
    projects: "Current status: 12 projects completed.\nLatest: This Portfolio (v3.0).\nCheck the 'Projects' tab for more!",
    hobbies: "🕹️ Sports: Staying active & healthy!\n🎬 Media: Huge fan of Anime & K-Dramas.\n♟️ Strategy: I love a good game of Chess.\n📚 Mindset: Always reading and learning new things.",
    animals: "🐾 Animal Lover Level: MAX\n🐱 Cats: Pure chaos and cuteness.\n🐶 Dogs: The best loyal companions.\n(Current status: Wanting to pet every cat I see).",
    secret: "🌸 You found the secret. Hire me. ✨"
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#1a1a1a] rounded-lg overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      
      {/* Terminal Header */}
      <div className="bg-black p-3 flex items-center justify-between border-b-2 border-black">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-400"></div>
          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
        </div>
        <span className="text-white font-mono text-xs uppercase tracking-widest opacity-50">Douaa-Terminal.exe</span>
      </div>

      {/* Terminal Screen */}
      <div className="p-6 h-64 font-mono text-sm relative overflow-hidden">
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]"></div>
        
        <div className="text-pink-400 mb-2">{">"} status: online</div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCommand}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-gray-300 whitespace-pre-wrap leading-relaxed"
          >
            <span className="text-cyan-400">{">"} {activeCommand}</span>
            <br />
            {commands[activeCommand]}
          </motion.div>
        </AnimatePresence>

        {/* Blinking Cursor */}
        <motion.span 
          animate={{ opacity: [0, 1] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-pink-400 ml-1 align-middle"
        />
      </div>

      {/* Command Buttons */}
      <div className="bg-[#252525] p-4 flex flex-wrap gap-3 border-t-2 border-black">
        {Object.keys(commands).filter(cmd => cmd !== 'welcome').map((cmd) => (
          <button
            key={cmd}
            onClick={() => setActiveCommand(cmd)}
            className={`px-4 py-1 rounded-full border-2 border-black font-mono text-xs transition-all active:translate-y-1 ${
              activeCommand === cmd 
                ? 'bg-pink-400 text-black shadow-none' 
                : 'bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-100'
            }`}
          >
            ./{cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CuteTerminal;