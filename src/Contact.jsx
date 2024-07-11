import React from 'react';
import Footer from './Footer.jsx';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-center mt-20 lg:p-16 pb-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-lg md:text-xl text-gray-500 font-medium uppercase">CONTACT US</h2>
          <br />
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Take the <span className="text-[#0DC9C5]"><br />next step</span>
          </h1>
          <p className="text-2xl font-semibold text-[#0DC9C5] mt-4 underline">1300 359 892</p>
          <a href="mailto:hello@sprintdigital.com.au" className="text-2xl text-[#0DC9C5] underline hover:underline">hello@sprintdigital.com.au</a>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl text-gray-500 font-medium uppercase">BRISBANE</h3>
            <br />
            <p className="text-gray-700 text-lg font-medium">
              Suite GB<br />
              120 Wickham Street,<br />
              Fortitude Valley, QLD 4006
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl text-gray-500 font-medium uppercase">TOOWOOMBA</h3>
            <br />
            <p className="text-gray-700 text-lg font-medium">
              Suite 2.03, 123 Margaret Street<br />
              TOOWOOMBA, QLD 4350
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-8">
          <form className="space-y-4 w-full max-w-lg ">
            <div className="relative">
              <label htmlFor="name" className="block text-black">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black">Email address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-black">Phone number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-black">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#0DC9C5] border-2 border-white rounded-full text-white text-lg py-4 font-medium hover:bg-white hover:text-[#0DC9C5] transition duration-500 focus:outline-none focus:ring-2 focus:ring-teal-800"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;