import React from 'react'
import './index.css'

const Section3content = (prop) => {
    return (
        <>
            <div className="flex flex-col space-y-4 md:space-y-6 justify-center p-6 md:p-12 lg:p-36">
                <div data-aos="fade-up" data-aos-duration="300">
                    <h1 className="text-[#888888] font-medium text-sm md:text-lg lg:text-xl">
                        {prop.heading}
                    </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                        <span className="text-[#212529]">{prop.mainblack}</span>
                        <span className="text-[#0DC9C5]"> {prop.maincyan}</span>
                    </h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <p className="font-medium text-sm md:text-base lg:text-lg text-[#212529] leading-relaxed">
                        {prop.paragraph}
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
                    <a href="#about" className="text-black hover:border-b-2 border-black font-medium transition-all text-sm md:text-base lg:text-lg">
                        Read Case Study
                    </a>
                </div>
            </div>
        </>
    )
}

export default Section3content
