import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const AboutImage = () => {
  const { scrollY } = useViewportScroll();
  const xTransform = useTransform(scrollY, [0, 1000], [0, -320]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container-fluid about-img-row">
      <div className="container">
        <div className="row">
          <motion.div
            className={`flex flex-col about-img-wrap js-anim-about-img-wrap ${isMobile ? 'w-full' : 'w-[100rem] p-0 m-0'}`}
            style={isMobile ? {} : { x: xTransform }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <div className={`flex ${isMobile ? 'flex-col' : 'items-end'} mb-4`}>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full mb-4' : 'me-4'} about-img-1`}
                  src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/about/sdig-happy-meeting-min.png"
                  alt="Happy Meeting"
                />
              </div>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full mb-4' : 'me-4'} about-img-2`}
                  src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/about/sdig-typing-min.png"
                  alt="Typing"
                />
              </div>
              <div className={`${isMobile ? 'w-full' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full' : ''} about-img-3`}
                  src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/about/sdig-meeting-blurred-min.png"
                  alt="Meeting Blurred"
                />
              </div>
            </div>
            <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} mb-4`}>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full mb-4' : 'me-4'} about-img-4`}
                  src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/about/sdig-team-1-min.png"
                  alt="Team 1"
                />
              </div>
              <div className={`${isMobile ? 'w-full mb-4' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full mb-4' : 'me-4'} about-img-5`}
                  src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/about/sdig-table-min.png"
                  alt="Table"
                />
              </div>
              <div className={`${isMobile ? 'w-full' : ''}`}>
                <img
                  className={`rounded-lg ${isMobile ? 'w-full' : ''} about-img-6`}
                  src="https://sprintdigital.com.au/themes/sprint-digital/assets/images/pages/about/sdig-dogs-min.png"
                  alt="Dogs"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
