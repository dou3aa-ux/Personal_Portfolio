import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';

const LottieCharacter = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DotLottiePlayer
        src="/character.json"
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieCharacter;