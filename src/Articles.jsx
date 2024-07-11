import React from 'react';
import Picsa1 from './assets/picsa1.jpeg';
import Picsa2 from './assets/picsa2.png';
import Picsa3 from './assets/picsa3.jpeg';
import Picsa4 from './assets/picsa4.jpg';
import Picsa5 from './assets/picsa5.jpeg';
import Picsa6 from './assets/picsa6.png';
import Picsa7 from './assets/picsa7.jpg';
import Picsa8 from './assets/picsa8.jpeg';
import Picsa9 from './assets/picsa9.jpeg';
import Footer from './Footer';

const Articles = () => {
  return (
    <>
      <div className="bg-white px-4 md:px-20 py-6 md:py-20 ">
        <div className="flex flex-col items-start mb-12 ">
          <br/>
          <br/>
          <br/>
          <p className="text-lg md:text-xl text-gray-500 font-semibold uppercase">Articles</p>
          <br/>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            A collection of <br />
            <span className="text-[#0DC9C5]">articles, tips &amp; <br /> customer stories</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <img src={Picsa1} alt="Article 1" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">App Trends</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">New App Trends: The Future of Custom Software And App Development</h2>
            <p className="text-gray-500 mb-4">What’s on the horizon when it comes to custom software development and apps? We take a moment to assess new app trends and how they might impact your business.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>
          <div className="flex flex-col">
            <img src={Picsa2} alt="Article 2" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">UI/UX Design</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">The importance of UX/UI design in custom app development</h2>
            <p className="text-gray-500 mb-4">Here’s how UX/UI design contributes to a successful app development process.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>
          <div className="flex flex-col">
            <img src={Picsa3} alt="Article 3" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">Apps</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">Finding a custom mobile app development company</h2>
            <p className="text-gray-500 mb-4">Not sure how to choose the right custom mobile app development company? Here's some guidance.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>

          <div className="flex flex-col">
            <img src={Picsa4} alt="Article 4" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">Apps</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">The app trends that shaped 2022</h2>
            <p className="text-gray-500 mb-4">2022 was a particularly interesting year, bringing apps into the mainstream. Here are the app trends that shaped the digital landscape in 2022.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>

          <div className="flex flex-col">
            <img src={Picsa5} alt="Article 5" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">Development</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">A breakdown of mobile app development costs</h2>
            <p className="text-gray-500 mb-4">How much does the average mobile app development project cost?</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>

          <div className="flex flex-col">
            <img src={Picsa6} alt="Article 6" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">Software</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">Top 5 benefits of developing in-house software for your company.</h2>
            <p className="text-gray-500 mb-4">Here’s how it can transform your business.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>

          <div className="flex flex-col">
            <img src={Picsa7} alt="Article 7" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">BUSINESS EFFICIENCY</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">How personalised software can improve business efficiency</h2>
            <p className="text-gray-500 mb-4">Not sure how to choose the right custom mobile app development company? Here's some guidance.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>

          <div className="flex flex-col">
            <img src={Picsa8} alt="Article 8" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">DEVELOPMENT</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">Does your business need a digital transformation?</h2>
            <p className="text-gray-500 mb-4">In today's business world, digital transformation is becoming more and more of a necessity.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>

          <div className="flex flex-col">
            <img src={Picsa9} alt="Article 9" className="mb-4 w-full h-56 object-cover rounded-2xl"/>
            <p className="text-lg md:text-xl text-gray-500 font-medium uppercase">TECHNOLOGY</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">Laravel & Xero — A dream combo</h2>
            <p className="text-gray-500 mb-4">Working with 3rd party APIs can always be a hassle, but one particular platform we absolutely love working with.</p>
            <a href="#" className="text-xl md:text-2xl underline">Read More</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articles;