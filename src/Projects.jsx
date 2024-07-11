import React from 'react';
import Footer from './Footer';
import ScrollingText from './ScrollingText';

const Project = () => {
  return (
    <>
      <div className="bg-white px-4 md:px-20 py-16 md:py-36">
        <div className="flex flex-col items-start mb-12">
          <br />
          <br />
          <br />
          <p className="text-lg md:text-xl text-gray-500 font-semibold uppercase">FEATURED PROJECTS</p>
          <br />
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            See what we can
            <span className="text-[#0DC9C5]"> do <br /> for you</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-xl md:mr-16">
            <img className="w-full rounded-lg " src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/case-studies/snap-fitness/projects-snap-min.png" alt="Snap Fitness" />
            <div className="px-6 py-4">
              <div className="text-xl text-gray-500 font-semibold uppercase">SNAP FITNESS</div>
              <br/>
              <p className="text-gray-700 text-2xl font-bold leading-tight">
                Fitness & nutrition app for Snap Fitness members
              </p>
              <br/>
              <a href="https://sprintdigital.com.au/case-studies/snap-fitness" className="text-2xl text-gray-900 underline">Read Case Study</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl mt-8 md:mt-60">
            <img className="w-full rounded-lg" src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/case-studies/rochele/projects-rochele-min.png" alt="Rochele Painting" />
            <div className="px-6 py-4">
              <div className="text-xl text-gray-500 font-semibold uppercase">ROCHELE PAINTING</div>
              <br/>
              <p className="text-gray-700 text-2xl font-bold leading-tight">
                Professional painting services.
              </p>
              <br/>
              <a href="https://sprintdigital.com.au/case-studies/rochele-painting" className="text-2xl text-gray-900 underline  rounded-lg">Read Case Study</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl md:-mt-36 md:mr-10">
            <img className="w-full mt-8 md:mt-0 rounded-lg" src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/case-studies/go-turf/projects-goturf-min.png" alt="Goturf" />
            <div className="px-6 py-4">
              <div className="text-xl text-gray-500 font-semibold uppercase">GOTURF</div>
              <br/>
              <p className="text-gray-700 text-2xl font-bold leading-tight">
                Web system and mobile app for delivery tracking and inventory management
              </p>
              <br/>
              <a href="https://sprintdigital.com.au/case-studies/snap-fitness" className="text-2xl text-gray-900 underline rounded-lg">Read Case Study</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl mt-8 md:mt-16">
            <img className="w-full mt-8 md:mt-0 rounded-lg" src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/case-studies/pure-grain/projects-puregrain-min.png" alt="Pure Grain" />
            <div className="px-6 py-4">
              <div className="text-xl text-gray-500 font-semibold uppercase">PURE GRAIN</div>
              <br/>
              <p className="text-gray-700 text-2xl font-bold leading-tight">
                Web system and mobile app for resource management and transportation
              </p>
              <br/>
              <a href="https://sprintdigital.com.au/case-studies/rochele-painting" className="text-2xl text-gray-900 underline rounded-lg">Read Case Study</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0DC9C5] text-white text-center py-16">
        <ScrollingText />
        <h2 className="text-7xl font-bold">Contact us</h2>
        <ScrollingText />
      </div>

      <Footer />
    </>
  );
}

export default Project;