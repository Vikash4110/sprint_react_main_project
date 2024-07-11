import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import dot from './assets/dot-point-of-list.svg'

const SoftwareDesign = ({ heading, paragraphs, subheading, listItems }) => {
  useEffect(() => {
    AOS.init({
      duration: 600, 
    });
  }, []);

  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">{heading}</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="font-medium text-sm md:text-base lg:text-lg text-[#212529] leading-relaxed" data-aos="fade-up" data-aos-delay='50'>{paragraph}</p>
      ))}
      <h2 className="text-gray-500 font-semibold text-sm mb-2 mt-10 md:text-lg" data-aos="fade-up" data-aos-delay='100'>{subheading}</h2>
      <ul className="list-none pt-2" data-aos="fade-up" data-aos-delay='50'>
        {listItems.map((item, index) => (
          <li key={index} className="mb-6 md:text-lg flex align-middle">
          <span className='pr-4'><img src={dot}/></span>
        <span className='border-b-2 border-black'>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SoftwareDesign;
