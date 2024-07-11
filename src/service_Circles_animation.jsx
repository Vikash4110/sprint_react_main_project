import React, { useEffect } from 'react';
import circledot from './assets/circledot.svg';
import circledotcircle from './assets/circledotcircle.svg';
import Section3content from './Section3content';

const RotatingCircle = () => {
  useEffect(() => {
    const handleScroll = () => {
      const circle = document.getElementById('circle');
      const rotation = window.scrollY / 10;
      if (circle) {
        circle.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
    

      
      <div
        className="relative w-60 h-60 md:w-80 md:h-80 mx-auto rounded-full flex items-center justify-center md:order-2  "
        id="circle" 
      >
        <img src={circledotcircle} className="absolute inset-0 w-full h-full object-contain" alt="circle" />
        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full" style={{ top: '3%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={circledot} className="w-full h-full" alt="dot" />
        </div>
        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full" style={{ top: '75%', right: '8%', transform: 'translate(50%, -50%)' }}>
          <img src={circledot} className="w-full h-full" alt="dot" />
        </div>
        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full" style={{ bottom: '3%', left: '48%', transform: 'translate(-50%, 50%)' }}>
          <img src={circledot} className="w-full h-full" alt="dot" />
        </div>
        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full" style={{ top: '25%', left: '6%', transform: 'translate(-50%, -50%)' }}>
          <img src={circledot} className="w-full h-full" alt="dot" />
        </div>
        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full" style={{ top: '27%', right: '9%', transform: 'translate(50%, -50%)' }}>
          <img src={circledot} className="w-full h-full" alt="dot" />
        </div>
        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full" style={{ bottom: '24%', left: '7%', transform: 'translate(-50%, 50%)' }}>
          <img src={circledot} className="w-full h-full" alt="dot" />
        </div>
      </div>
    
  
  
  );
};

export default RotatingCircle;
