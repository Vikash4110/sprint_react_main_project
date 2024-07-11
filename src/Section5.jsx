import React from 'react';
import airplane from './assets/airplane png.png';
import './Section5.css';

const Section5 = () => {
    return (
        <div className="airplane-animation bg-[#F7F7F7] py-36">
            {/* For all viewports */}
            <div className="flex flex-col items-center text-center px-4">
                {/* Adjusting size based on viewport */}
                <img src={airplane} className="w-4/5 md:w-2/3 lg:w-2/3 xl:w-3/6 mb-8 fly" alt="Airplane" />
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">
                    <span className="text-[#212529]">Get Your Head </span>
                    <span className="text-[#0DC9C5]">in the Cloud</span>
                </h1>
                <p className="text-sm md:text-base lg:text-lg font-medium max-w-2xl" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    Day dreaming of changing the world, or maybe just your business? Whichever it may be, we're
                    backing you to make it happen. The sky's the limit, so what can we help you achieve?
                </p>
            </div>
        </div>
    );
}

export default Section5;
