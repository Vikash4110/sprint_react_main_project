import React from 'react';
import backimage from './assets/contact-swoosh-wavy.svg';

const Section6 = () => {
  return (
    <>
      <div
        className="h-28 bg-no-repeat bg-cover bg-[#F7F7F7]"
        style={{ backgroundImage: `url(${backimage})` }}
      ></div>

      <div className="bg-[#0DC9C5]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col space-y-6 justify-center p-8 md:p-36 bg-transparent">
            <div data-aos="fade-up" data-aos-duration="800">
              <h1 className="text-[#FFFFFF] font-medium text-xl">Get in touch</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
              <h1 className="text-4xl md:text-6xl font-bold slide-in-up2 opacity-0 custom_opacity_span_h1">
                <span className="text-white font-bold">Take the Next Step</span>
              </h1>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
              <p className="font-medium text-white">
                Contact us now for a free no obligation meeting to discuss how we can help launch your digital project.
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 md:p-36 bg-transparent" data-aos="fade-up" data-aos-duration="500"
                data-aos-delay="50">
            <div className="bg-[#0DC9C5] p-8 rounded-lg w-full">
              <form className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-white">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full px-3 py-4 bg-white bg-opacity-20 border-2 border-transparent hover:border-white focus:border-white focus:outline-none rounded-lg transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white">Email address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full px-3 py-4 bg-white bg-opacity-20 border-2 border-transparent hover:border-white focus:border-white focus:outline-none rounded-lg transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white">Phone number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 w-full px-3 py-4 bg-white bg-opacity-20 border-2 border-transparent hover:border-white focus:border-white focus:outline-none rounded-lg transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 w-full px-3 py-4 bg-white bg-opacity-20 border-2 border-transparent hover:border-white focus:border-white focus:outline-none rounded-lg transition duration-300"
                  ></textarea>
                </div>
                <div className="g-recaptcha" data-sitekey="your-site-key"></div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-transparent border-2 border-white rounded-full text-white text-lg py-4 font-medium hover:bg-white hover:text-[#0DC9C5] transition duration-500 focus:outline-none focus:ring-2 focus:ring-teal-800"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
