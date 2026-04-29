import React from 'react';

const SkillCard = ({ name, level, color }) => {
    const blocks = Math.floor(level / 10);

    return (
        <div className="bg-white border-2 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full">
            <div className="flex justify-between mb-2">
                <span className="font-bold text-xs uppercase tracking-widest">{name}</span>
                <span className="font-mono text-xs">LVL {level}</span>
            </div>
        <div className="flex gap-1">
        {[...Array(10)].map((_, i) => (
        <div
            key={i}
            className={`h-3 w-full border border-black ${i < blocks ? color : 'bg-gray-100'}`}
        />
        ))}
        </div>
    </div>
);
};

export default SkillCard;