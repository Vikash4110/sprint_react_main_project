import React, { useEffect } from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dot from './assets/dot-point-of-list.svg';

const Section2 = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <>
            <div className="bg-[#F7F7F7] pt-11 px-4 sm:px-16">
                {/* For smaller viewports */}
                <div className="block sm:hidden">
                    <div className="flex flex-col space-y-6" data-aos="fade-up" data-aos-duration="600">
                        <h1 className="text-[#888888] font-semibold">SERVICES</h1>
                        <h1 className="text-4xl font-bold">
                            <span className="text-[#2a2a2a]">What We </span>
                            <span className="text-[#0DC9C5]">Do</span>
                        </h1>
                    </div>
                    <p className="font-normal text-base mt-6" data-aos="fade-up" data-aos-duration="600">
                        We are an Australian software development company that solves complex business problems with
                        unique solutions. We deliver applications that bring real value to businesses and help them
                        achieve their goals.
                    </p>
                    <div className="mt-8 text-[#212529]">
                        <div className="flex flex-col space-y-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                            <h1 className="text-2xl font-bold">Design</h1>
                            <ul className="flex flex-col space-y-5">
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />Project Scoping</li>
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />UI/UX Design</li>
                            </ul>
                        </div>
                        <div className="flex flex-col space-y-6 mt-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                            <h1 className="text-2xl font-bold">Development</h1>
                            <ul className="flex flex-col space-y-5">
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />Web Applications</li>
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />Mobile Applications</li>
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />Legacy Modernization</li>
                            </ul>
                        </div>
                        <div className="flex flex-col space-y-6 mt-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                            <h1 className="text-2xl font-bold">Support</h1>
                            <ul className="flex flex-col space-y-5">
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />Software Consulting</li>
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />Project Rescue</li>
                                <li className="flex text-base"><img src={dot} className="mr-4" alt="dot" />Service Legal Agreements</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* For larger viewports */}
                <div className="hidden sm:block">
                    <div className="grid grid-rows-2 gap-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-y-8">
                            <div className="flex flex-col space-y-6 sm:ml-11" data-aos="fade-up" data-aos-duration="600">
                                <h1 className="text-[#888888] font-semibold">SERVICES</h1>
                                <h1 className="text-4xl sm:text-6xl font-bold">
                                    <span className="text-[#2a2a2a]">What We </span>
                                    <span className="text-[#0DC9C5]">Do</span>
                                </h1>
                            </div>
                            <div className="self-center sm:translate-y-7" data-aos="fade-up" data-aos-duration="600">
                                <p className="font-normal text-base sm:text-lg">
                                    We are an Australian software development company that solves complex business problems with
                                    unique solutions. We deliver applications that bring real value to businesses and help them
                                    achieve their goals.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 mt-8 sm:mt-16 pb-6 sm:ml-11 text-[#212529]">
                            <div className="flex flex-col space-y-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                <h1 className="text-2xl sm:text-4xl font-bold">Design</h1>
                                <ul className="flex flex-col space-y-5">
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />Project Scoping</li>
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />UI/UX Design</li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                <h1 className="text-2xl sm:text-4xl font-bold">Development</h1>
                                <ul className="flex flex-col space-y-5">
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />Web Applications</li>
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />Mobile Applications</li>
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />Legacy Modernization</li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                <h1 className="text-2xl sm:text-4xl font-bold">Support</h1>
                                <ul className="flex flex-col space-y-5">
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />Software Consulting</li>
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />Project Rescue</li>
                                    <li className="flex text-base sm:text-lg"><img src={dot} className="mr-4" alt="dot" />Service Legal Agreements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section2;
