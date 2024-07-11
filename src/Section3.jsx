import React from 'react';
import Section3content from './Section3content';
import phone from './assets/snap-phone.png';
import phonearrowleft from './assets/snap-phone-arrow-left.svg';
import phonearrowright from './assets/snap-phone-arrow-right.svg';
import ipad from './assets/rochele-mockup-ipad.png';
import ipadarrow from './assets/rochele-arrow.svg';
import tabmob from './assets/tablet_mobile.png';
import legacydot from './assets/legacydot.png';
import arrow1sec3 from './assets/arrow1sec3.svg';
import arrow2sec3 from './assets/arrow2sec3.svg';
import bglegacy from './assets/bglegacy.svg';
import './Section3.css'

const Section3 = () => {
    return (
        <>
            <div className="bg-[#F7F7F7] pt-20 md:pt-40 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative flex justify-center items-center" data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
                        <img
                            src={phonearrowleft}
                            className="absolute left-arrow sm:left-[10%] sm:bottom-[40%] h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 sm:transform sm:-translate-y-[50%]"
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay="200"
                        />
                        <div className="relative">
                            <img src={phone} className="h-60 sm:h-72 md:h-80 lg:h-[35rem] xl:h-[45rem]" />
                        </div>
                        <img
                            src={phonearrowright}
                            className="absolute right-arrow sm:right-[10%] sm:top-[40%] h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 sm:transform sm:translate-y-[50%]"
                            data-aos="fade-left"
                            data-aos-duration="500"
                        />
                    </div>


                    <Section3content
                        heading="NATIVE APP DEVELOPMENT"
                        paragraph="The team behind Snap Fitness approached us wanting to improve member retention and engagement through an app that would provide members with an enhanced gym experience. From fitness tracking, to recipes and wellness articles, the app provides members with a variety of tools to supplement their fitness journey."
                        mainblack="Creating rich user"
                        maincyan="experiences"
                        className="order-2 md:order-1"
                    />
                </div>
            </div>

            <div className="bg-[#F7F7F7] pt-20 md:pt-40 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center relative order-first md:order-last">
                        <div className='relative'>
                            <div data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
                                <img src={legacydot} className="absolute legacydot w-60 md:w-96" />
                            </div>
                            <div data-aos="zoom-out" data-aos-duration="1000">
                                <img src={ipad} className="w-80 md:w-[80rem] pr-0 md:pr-12" />
                            </div>
                            <div data-aos="zoom-out" data-aos-duration="1000">
                                <img src={ipadarrow} className="ipad-arrow w-10 md:w-16 absolute" />
                            </div>
                        </div>
                    </div>

                    <Section3content
                        heading="LEGACY MODERNISATION"
                        paragraph="In business for over 40 years, the team at Rochele Painting approached us to write a new digital chapter in the history books. With such a longstanding legacy, a few old school processes needed a new coat of paint. To modernise Rochele's operations, we automated their whole workflow from inquiry through to invoicing."
                        mainblack="Goodbye paper,"
                        maincyan="hello profit."
                        className='order-last md:order-first'
                    />
                </div>
            </div>

            <div className="bg-[#F7F7F7] pt-20 md:pt-40 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center relative" data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
                        <div>
                            <img src={tabmob} className="-ml-24 md:-ml-52 md:w-[80rem] md:pr-12" />
                            <div data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000" data-aos-offset='50'>
                                <img src={arrow1sec3} className='absolute w-[8rem] -translate-y-52 translate-x-16 md:translate-x-36 md:-translate-y-96 md:w-[12rem]' />
                            </div>
                            <div data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
                                <img src={arrow2sec3} className='absolute w-[8rem] -translate-y-44 translate-x-16 md:translate-x-36 md:-translate-y-[19rem] md:w-[12rem]' />
                            </div>
                        </div>
                    </div>
                    <Section3content
                        heading="INTEGRATED WEB APPLICATIONS"
                        paragraph="We worked with GoTurf to create a comprehensive backend system to manage their inventory and deliveries, connecting turf farms with distributors, and distributors to customers."
                        mainblack="Software built for"
                        maincyan="purpose"
                    />
                </div>
            </div>
        </>
    );
}

export default Section3;
