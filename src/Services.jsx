import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SoftwareDesign from './services_card_component';
import serviceContent1image1 from './assets/servicesContent1Image1.png';
import serviceContent2image1 from './assets/servicesContent2Image1.png';
import serviceContent3image1 from './assets/servicesContent3Image1.png';
import serviceCurveImage from './assets/project-hero-bot-swish.svg';
import RotatingCircle from './service_Circles_animation.jsx';
import Section6 from './Section6';
import Footer from './Footer';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <>
      <div className="bg-white  pt-6 md:pt-6 md:pl-12 md:pr-0 lg:pl-24 lg:pr-0 xl:pl-36 xl:pr-0 ">
        <div className="flex flex-col space-y-4 md:space-y-6 justify-center p-6 lg:p-16 lg:pl-0">
          <div>
            <h1 className="text-[#888888] font-medium text-md md:text-lg lg:text-xl pt-8">
              OUR SERVICES
            </h1>
          </div>
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight flex flex-col">
              <span className="text-[#212529]">Custom Software</span>
              <span className="text-[#0DC9C5]">Development Services</span>
            </h1>
          </div>
          <div>
            <p className="font-medium text-md md:text-base lg:text-lg text-[#212529] leading-relaxed md:w-[45rem] md:pb-11">
              We are an Australia-based software agency that designs and develops digital products for the people that use them. Our strength lies in our talented team and our capability to develop end-to-end business process solutions in-house.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white pt-2 md:px-24 content1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="content pt-9">
            <SoftwareDesign
              heading="Software Design"
              paragraphs={[
                "Sprint specialises in automating complex business processes. Our team of developers and web engineers pride ourselves on streamlining business operations to eliminate inefficiencies and provide a competitive advantage, across a wide range of industries - and we're ready to assist you with your operational requirements today.",
                "We take the time to understand your unique business processes, management systems and current software systems, to ensure we tailor a custom software solution plan to suit. We also assess the business's potential for growth, to ensure our software grows alongside the business, rather than falling behind."
              ]}
              subheading="THINGS WE DO"
              listItems={[
                { text: "Project Scoping" },
                { text: "UI/UX Design" }
              ]}
            />
          </div>
          <div className="images p-12 pt-0 mx-auto">
            <img src={serviceContent1image1} alt="Software Design" className="h-auto w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-white pt-8 md:px-24 content2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="images p-12 pt-0 order-last md:order-first mx-auto">
            <img src={serviceContent2image1} alt="Development" className="h-auto w-full object-cover" />
          </div>
          <div className="content pt-9 order-first md:order-last">
            <SoftwareDesign
              heading="Development"
              paragraphs={[
                "At Sprint Digital, we have a proven track record in delivering high quality software solutions that improve our clients' bottom line. Our team of experts are adept at working within your budget and timeline. We thrive on developing state of the art technology solutions for our clients, and have a deep understanding of what it takes to get the job done right.",
                "From web and app development to technology consulting, Sprint Digital is your go-to technology partner in Australia."
              ]}
              subheading="THINGS WE DO"
              listItems={[
                { text: "Web Applications" },
                { text: "Mobile Applications" },
                { text: "Legacy Modernisation" }
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-white pt-8 md:px-24 content3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="content pt-9">
            <SoftwareDesign
              heading="Support"
              paragraphs={[
                "Ongoing service and support are key components of our custom software development process. We don't simply deliver a solution and forget about you. Our team is always on hand to ensure your software keeps pace with the latest changes, keeping you ahead of the competition.",
                "Sprint Digital takes the time to understand each business individually, working closely with our clients to build custom software that solve complex business problems and accelerate growth.",
                "Whether you need a new bespoke software product built from scratch, an existing solution modernised or anything in between, our team has the years of experience and expertise to get the job done. Talk to us about your custom software development needs today."
              ]}
              subheading="THINGS WE DO"
              listItems={[
                { text: "Software Consulting" },
                { text: "Project Rescue" },
                { text: "Service Level Agreements" }
              ]}
            />
          </div>
          <div className="images p-12 pt-0 mx-auto">
            <img src={serviceContent3image1} alt="Support" className="h-auto w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <img src={serviceCurveImage} className="w-full rotate-180" alt="Curve" />
      </div>

      <div className="bg-[#F7F7F7] pt-8 md:px-24 content4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="content pt-9">
            <div className="bg-[#F7F7F7] p-8">
              <h1 className="text-3xl md:text-6xl font-bold mb-10" data-aos="fade-up">Talk to an Expert</h1>
              <p className="font-medium text-sm md:text-base lg:text-lg text-[#212529] leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="50">
                At Sprint Digital, we are a trusted custom software development company and have a proven track record in delivering quality solutions that meet the specific needs of our clients.
              </p>
              <p className="font-medium text-sm md:text-base lg:text-lg text-[#212529] leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="50">
                Offering confidence and quality assurance in our services, we take a personalised approach to every project, working closely with our clients to ensure successful outcomes and custom software applications that work.
              </p>
              <p className="font-medium text-sm md:text-base lg:text-lg text-[#212529] leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="50">
                We're the team of software engineers you can trust when you're looking for reliable, long-lasting and innovative custom software development services. So, if you're looking for a partner to help you streamline your business operations, get in touch with Sprint Digital today.
              </p>
              <button className="bg-[#0DC9C5] text-white px-5 py-3 rounded-full hover:bg-[#0DC9C1] font-medium" data-aos="fade-up" data-aos-delay="50">Get in touch</button>
            </div>
          </div>
          <div className="images background flex justify-center items-center">
            <RotatingCircle />
          </div>
        </div>
      </div>

      <Section6 />
      <Footer />
    </>
  );
}

export default Service;
