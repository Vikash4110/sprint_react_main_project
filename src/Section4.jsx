import React from 'react';
import apia from './assets/apia.png'; 
import apib from './assets/apib.png'; 
import apic from './assets/apic.png'; 
import apid from './assets/apid.png'; 
import apie from './assets/apie.png'; 
import apif from './assets/apif.png'; 




const Section4 = () => {
    return (
        <div className="bg-[#F7F7F7] md:py-12 md:px-4 px-0 py-0">
    <h2 className="text-lg font-semibold text-gray-600 ml-4 md:ml-20 mb-5">
        SOME OF THE APIS WE WORK WITH
    </h2>
    <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-16 md:ml-20" data-aos="fade-up" fade-duration="1000">
        <img src={apia} alt="Shopify" className="w-20 md:w-24 m-2 md:m-4" />
        <img src={apib} alt="Stripe" className="w-20 md:w-24 m-2 md:m-4" />
        <img src={apic} alt="Workflow Max" className="w-20 md:w-24 m-2 md:m-4" />
        <img src={apid} alt="MYOB" className="w-20 md:w-24 m-2 md:m-4" />
        <img src={apie} alt="Glofox" className="w-20 md:w-24 m-2 md:m-4" />
        <img src={apif} alt="Xero" className="w-12 md:w-14 h-12 md:h-14 m-2 md:m-4" />
    </div>
</div>

    );
}

export default Section4;