import React from 'react';

const ChibiCharacter = () => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        {/* Hijab Shadow */}
        <radialGradient id="hijabShadow" cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor="#5D4037" stopOpacity="0" />
          <stop offset="100%" stopColor="#5D4037" stopOpacity="0.06" />
        </radialGradient>

        {/* Soft Highlight */}
        <linearGradient id="hijabHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="70%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <style>
        {`
          @keyframes blink {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.08); }
          }
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-12deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .eye-group { 
            transform-origin: 50% 92px; 
            animation: blink 4s infinite; 
          }
          .arm-right-wave { 
            transform-origin: 140px 145px; 
            animation: wave 2.2s infinite ease-in-out; 
          }
          .main-char {
            animation: float 4s infinite ease-in-out;
          }
        `}
      </style>

      <g className="main-char">
        {/* HIJAB BACK - Soft Pink */}
        <circle cx="100" cy="85" r="60" fill="#FFBAD1" />
        <circle cx="100" cy="85" r="60" fill="url(#hijabShadow)" />

        {/* Left Arm */}
        <g>
          <path d="M65 145 Q45 140 35 155" fill="none" stroke="#8D6E63" strokeWidth="3.8" strokeLinecap="round" />
          <circle cx="35" cy="155" r="8.5" fill="#FFF0E8" stroke="#8D6E63" strokeWidth="1" />
        </g>

        {/* FACE */}
        <path 
          d="M100 45 C70 45 60 70 60 95 C60 120 75 135 100 135 C125 135 140 120 140 95 C140 70 130 45 100 45 Z" 
          fill="#FFF0E8" 
        />

        {/* EYES */}
        <g className="eye-group">
          <circle cx="80" cy="90" r="8.5" fill="#2C2C2C" />
          <circle cx="120" cy="90" r="8.5" fill="#2C2C2C" />
          <circle cx="77.5" cy="87" r="3.2" fill="#FFFFFF" />
          <circle cx="117.5" cy="87" r="3.2" fill="#FFFFFF" />
        </g>

        {/* CHEEKS */}
        <circle cx="68" cy="106" r="7.5" fill="#FF9EBE" opacity="0.85" />
        <circle cx="132" cy="106" r="7.5" fill="#FF9EBE" opacity="0.85" />

        {/* GLASSES - BIGGER & CLEAN */}
        <g fill="none" stroke="#2C2C2C" strokeWidth="3">
          <circle cx="80" cy="91" r="16.5" />
          <circle cx="120" cy="91" r="16.5" />
          <path d="M92 91 Q100 88.5 108 91" strokeWidth="2.5" />
        </g>

        {/* MOUTH */}
        <path 
          d="M93 117 Q100 122 107 117" 
          fill="none" 
          stroke="#2C2C2C" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />

        {/* DRESS */}
        <path d="M65 140 L135 140 L150 185 H50 Z" fill="#FF8EB8" />
        <circle cx="85" cy="155" r="3.2" fill="#FFFFFF" opacity="0.55" />
        <circle cx="115" cy="165" r="3.2" fill="#FFFFFF" opacity="0.55" />
        <circle cx="100" cy="175" r="3.2" fill="#FFFFFF" opacity="0.55" />

        {/* Right Arm - Waving */}
        <g className="arm-right-wave">
          <path d="M135 145 Q155 140 165 155" fill="none" stroke="#8D6E63" strokeWidth="3.8" strokeLinecap="round" />
          <circle cx="165" cy="155" r="8.5" fill="#FFF0E8" stroke="#8D6E63" strokeWidth="1" />
        </g>

        {/* HIJAB FRONT - Clean version without thick pink ring */}
        <path 
          d="M100 38 C75 38 60 65 60 90 C60 110 70 120 100 120 C130 120 140 110 140 90 C140 65 125 38 100 38 Z" 
          fill="url(#hijabHighlight)" 
        />
      </g>
    </svg>
  );
};

export default ChibiCharacter;