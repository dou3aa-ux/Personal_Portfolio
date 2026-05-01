import React, { useState } from "react";

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    return (
        <div className="min-h-screen bg-[#fdf2f2] flex flex-col items-center justify-center p-4 overflow-hidden">

        {/* WRAPPER - Centered on screen */}
        <div className="relative w-full max-w-[550px] h-[400px] flex items-center justify-center">

            {/* 1. THE LETTER - Stays Centered */}
            <div
            className={`absolute w-[90%] bg-white rounded-sm shadow-2xl p-8 transition-all duration-700 ease-in-out z-20 ${
            isOpen 
            ? "opacity-100 scale-100 translate-y-[-20px]" 
            : "opacity-0 scale-95 translate-y-[50px] pointer-events-none"
            }`}
            onClick={(e) => e.stopPropagation()}
            >
            <h2 className="text-2xl font-serif text-gray-700 mb-6 italic border-b border-pink-100 pb-2">
            Hello This is Douaa,
            </h2>

            <form className="space-y-4 font-mono text-xs">
                <div>
                    <label className="text-[10px] text-pink-400 block mb-1 uppercase tracking-widest">Your Name</label>
                    <input
                    type="text"
                    className="w-full border-b border-pink-200 outline-none pb-2 focus:border-pink-400 transition-colors bg-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div>
                    <label className="text-[10px] text-pink-400 block mb-1 uppercase tracking-widest">Your Email</label>
                    <input
                    type="email"
                    className="w-full border-b border-pink-200 outline-none pb-2 focus:border-pink-400 transition-colors bg-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div>
                    <label className="text-[10px] text-pink-400 block mb-1 uppercase tracking-widest">Message</label>
                    <textarea
                    rows="4"
                    className="w-full bg-pink-50/50 rounded p-3 outline-none border-none resize-none text-gray-600"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                </div>
                <button className="w-full bg-pink-400 text-white py-3 rounded-full font-bold hover:bg-pink-500 shadow-md transition-all active:scale-95 uppercase tracking-widest text-[11px]">
                Send Mail
                </button>
            </form>
        </div>

        {/* 2. THE ENVELOPE - Slides DOWN when opened */}
        <div
            className={`relative w-full h-[300px] cursor-pointer transition-transform duration-700 ease-in-out z-10 ${
            isOpen ? "translate-y-[180px]" : "translate-y-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-[#fbb6ce] rounded-b-xl shadow-xl z-0" />

          {/* Top Flap */}
        <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 z-[25] origin-top ${
            isOpen ? "rotateX-180 opacity-0" : "rotateX-0"
            }`}
            style={{
            clipPath: "polygon(0 0, 50% 55%, 100% 0)",
            backgroundColor: "#fbb6ce",
            filter: "brightness(1.05)",
            }}
        />

          {/* Front Pocket (Folds) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
            <div
            className="absolute bottom-0 left-0 w-full h-full bg-[#f6a5c0]"
            style={{ clipPath: "polygon(0 100%, 50% 60%, 100% 100%)" }}
            />
            <div
            className="absolute inset-0 bg-[#fbb6ce]"
            style={{ clipPath: "polygon(0 0, 0 100%, 50% 60%)", filter: "brightness(0.98)" }}
            />
            <div
            className="absolute inset-0 bg-[#fbb6ce]"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 60%)", filter: "brightness(0.98)" }}
            />
        </div>

          {/* Heart Seal */}
        {!isOpen && (
            <div className="absolute inset-0 flex items-center justify-center z-30 animate-bounce">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-pink-100">
                <span className="text-pink-400 text-xl">♥</span>
                </div>
            </div>
        )}
        </div>
        </div>

        {!isOpen && (
            <p className="mt-8 text-pink-400 font-serif italic text-lg animate-pulse">
            "Tap the heart to write to me"
            </p>
        )}
    </div>
);
};

export default Contact;