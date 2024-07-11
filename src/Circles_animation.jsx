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
    <div className="relative h-screen bg-[#F7F7F7] p-4 md:p-12 grid grid-cols-1 md:grid-cols-2 items-start gap-8  ">
    

      
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
      <Section3content
        heading="ABOUT US"
        paragraph="When you partner with us, we become an extension of your team. We adopt a collaborative process throughout the development journey, working closely with you to deliver the best solutions for your business."
        mainblack="We work with you,"
        maincyan="not for you."
        className="max-w-md mx-auto md:order-1 mt-8 md:mt-32"
      />
    </div>
  
  );
};

export default RotatingCircle;
