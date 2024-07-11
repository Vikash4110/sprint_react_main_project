import React from 'react';
import './ScrollingText.css';

const ScrollingText = () => {
  return (
    <div className="relative w-full h-60 text-[#0DC9C5] overflow-hidden flex items-center justify-center bg-cover bg-fade">
      <div className="absolute flex items-center space-x-12 animate-scroll">
        <div className="flex space-x-6">
          <p className="stroke-text text-4xl md:text-6xl lg:text-8xl whitespace-nowrap fade-light">
            Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step
          </p>
          <p className="stroke-text text-4xl md:text-6xl lg:text-8xl whitespace-nowrap fade-light">
            Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;