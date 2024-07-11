import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Diga from './assets/diga.png';
import Digb from './assets/digb.png';
import Digc from './assets/digc.png';
import ScrollingText from './ScrollingText';
import AboutImage from './AboutImage';
import curveBg from './assets/serviceCurveImage1.svg';
import RotatingCircle from './service_Circles_animation.jsx';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <>
      <div className='bg-[white] px-4 md:px-20 py-8'>
        <div className="flex flex-col items-start mb-12">
          <br />
          <br />
          <br />
          <p className="text-xl text-gray-500 font-semibold uppercase">Articles</p>
          <br />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[#0DC9C5]">Brisbane leaders </span>
            <br />
            <span>
              in custom software <br />
              development
            </span>
          </h1>
          <span className="mt-4 text-base md:text-xl text-gray-700">
            We are an Australia-based software agency that designs and develops digital <br className="hidden md:block"/>
            products for the people that use them. Our strength lies in our talented<br className="hidden md:block"/>
            team and our capability to develop end-to-end business process solutions<br className="hidden md:block"/>
            in-house.
          </span>
        </div>
        <br />
        <br />
        <AboutImage />
        <br />
        <br />
        <div className="flex flex-col md:flex-row justify-between pt-20 md:pt-40">
          <div>
            <p className="text-xl text-gray-500 font-semibold uppercase" data-aos="fade-up">WHAT WE DO</p>
            <br />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight" data-aos="fade-up" data-aos-delay='50'>
              <span className="">Here at Sprint, we </span>
              <br />
              <span className="text-[#0DC9C5]">
                create change <br />
              </span>
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay='50' className="mt-8 md:mt-0">
            <span className="mt-4 text-base md:text-xl text-gray-700">
              We work with clients from a range of industries, and have spent the past <br className="hidden md:block"/>
              decade perfecting our craft. Our goal is to make digital products that are a<br className="hidden md:block"/>
              joy to use, and we measure our success by the impact that our products have<br className="hidden md:block"/>
              on our clients' businesses.
              <br />
              <br />
              We’re here to help you create change. If you’re looking for a talented team of<br className="hidden md:block"/>
              designers and software engineers who can help you turn your vision into <br className="hidden md:block"/>
              reality, then we'd love to hear from you.
            </span>
            <br />
            <br />
            <button className="bg-[#0DC9C5] text-white px-5 py-3 rounded-full hover:bg-[#0DC9C1] font-medium">
              <a href="/contact" className="text-white">
                Get in touch
              </a>
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="flex flex-col justify-between pt-20 md:pt-52" data-aos="fade-up">
          <div>
            <p className="text-xl text-gray-500 font-semibold uppercase">OUR CORE VALUES</p>
            <br />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="">Our fuel to </span>
              <span className="text-[#0DC9C5]">
                go the<br />
                distance <br />
              </span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-14 md:pt-28" data-aos="fade-up" data-aos-delay='50'>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <img src={Diga} alt="Innovation" className="w-32 h-32 md:w-auto md:h-auto" />
              <h2 className="text-2xl font-bold">Innovation</h2>
              <p className="mt-4 text-base md:text-xl text-gray-900 text-center md:text-left">
                We value creative thinking to generate thoughtful solutions for complex problems.
              </p>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <img src={Digb} alt="Adaptation" className="w-32 h-32 md:w-auto md:h-auto" />
              <h2 className="text-2xl font-bold">Adaptation</h2>
              <p className="mt-4 text-base md:text-xl text-gray-900 text-center md:text-left">
                We strive to overcome roadblocks efficiently to help you reach your business goals.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Digc} alt="Collaboration" className="w-32 h-32 md:w-auto md:h-auto" />
              <h2 className="text-2xl font-bold">Collaboration</h2>
              <p className="mt-4 text-base md:text-xl text-gray-900 text-center md:text-left">
                When you partner with us, we become part of your team and share your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white pt-36'>
        <img src={curveBg} alt="Curve background" className='w-full rotate-180' />
      </div>
      <div className="bg-[#F7F7F7] pt-20 md:pt-0 md:pr-16 w-full circle grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col space-y-4 md:space-y-6 justify-center p-6 md:p-12 lg:p-36 col-start-1 col-span-3">
          <div data-aos="fade-up">
            <h1 className="text-[#888888] font-medium text-sm md:text-lg lg:text-xl">
              OUR SERVICES
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay='70'>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight flex flex-col">
              <span className="text-[#212529]">Custom Software</span>
              <span className="text-[#0DC9C5]">
                Development Services
              </span>
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay='70'>
            <p className="font-medium text-sm md:text-base lg:text-lg text-[#212529] leading-relaxed">
              We are an Australia-based software agency that designs and develops digital products for the people that use them. Our strength lies in our talented team and our capability to develop end-to-end business process solutions in-house.
            </p>
          </div>
        </div>
        <div className='pt-10 md:pt-40 pl-10 md:pl-20 pb-8'>
          <RotatingCircle />
        </div>
      </div>
      <div className="bg-[#0DC9C5] text-white text-center py-16">
        <ScrollingText />
        <h2 className="text-4xl md:text-7xl font-bold">Contact us</h2>
        <ScrollingText />
      </div>
      <Footer />
    </>
  );
};

export default About;