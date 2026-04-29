import React from 'react';
import pixelAvatar from '../assets/pixel-me.gif';

const PlayerStats = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <div className="w-48 h-48 bg-pink-100 border-4 border-black rounded-full flex items-center justify-center overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <img
                    src={pixelAvatar}
                    alt="Pixel Character"
                    className="w-[80%] h-[80%] object-contain mix-blend-multiply"
                    style={{ imageRendering: 'pixelated' }}
                    />
                </div>

                <div className="absolute -bottom-2 -right-2 bg-yellow-300 border-2 border-black px-3 py-1 text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
                LVL 22
                </div>
            </div>

            <div className="bg-black text-white px-6 py-1 rounded-full font-mono text-sm uppercase tracking-tighter shadow-lg mt-2">
            Assila Douaa
            </div>
        </div>
);
};

export default PlayerStats;