import React from 'react';
import './index.css';

const Section1 =()=> {
    return (
        <>
        <div className='bg-[#2A2A2A] pt-4'><br />
        <br />
            <div className="unique problems ">
                <div className="ml-4 mt-10 sm:ml-10 sm:mt-20 custom_opacity_h1">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold space-x-2 sm:space-x-4 md:space-x-8 fade-in translate-y-16">
                        <span className="text-[#0DC9C5] custom_opacity_span_h1">Unique</span>
                        <span className="text-white">Problems<span className='pl-2'>?</span></span>
                    </h1>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold space-x-2 sm:space-x-4 md:space-x-8 fade-in-delay -translate-y-16">
                        <span className="text-white">Unique</span>
                        <span className="text-[#0DC9C5] opacity-0 custom_opacity_span_h1">Solutions<span className='pl-2'>.</span></span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div></div>
                    <div>
                        <p className="text-white font-medium p-8 sm:p-16 md:p-24 lg:p-32 pl-4 sm:pl-10 md:pl-14 text-base sm:text-lg md:text-xl fade-in-delay-2 translate-y-24 opacity-0">
                            Sprint builds custom software for business. We help organisations launch new digital products, automate processes and digitise workflows.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Section1;
