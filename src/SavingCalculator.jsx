import React from "react";
import Calculator from "./assets/calcu.svg";
import Dot from './assets/dot-point-of-list.svg';
import './index.css'
import Footer from './Footer';

const SavingCalculator = () => {
  return (
    <>
    <br/>
    <br/>
      <div className="min-h-screen bg-white">
        <div className="flex flex-col items-center justify-center p-4 md:p-8">
          <img src={Calculator} alt="Calculator" className="w-40 md:w-auto mb-8" />
          <div className="bg-white rounded-lg p-4 md:p-8 max-w-3xl text-center">
            <h2 className="text-xl text-gray-500 font-medium uppercase">
              Business Calculator
            </h2>
            <h1 className="mt-4 md:mt-8 text-4xl md:text-7xl font-semibold text-gray-900">
              How much could your business
              <span className="text-teal-500"> save in overheads?</span>
            </h1>
            <p className="mt-4 md:mt-8 text-lg md:text-2xl text-gray-700">
              Answer a few simple questions on your current workflow and we will
              provide you with an estimate of how much a custom software solution
              could save your business annually.
            </p>
            <div className="mt-8">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                Tell us about your business
              </h3>
              <p className="mt-2 md:mt-4 font-bold text-lg md:text-xl text-gray-700">
                How many staff members does your business have?
              </p>
              <p className="mt-2 font-bold text-lg md:text-xl text-gray-700">1 - 5</p>
              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                min="1"
                max="50"
              />
              <p className="mt-4 font-bold text-lg md:text-xl text-gray-700">
                On average, what is your business' annual turnover?
              </p>
              <p className="mt-2 font-bold text-lg md:text-xl text-gray-700">$0 to $500k</p>
              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                min="1"
                max="50"
              />
            </div>
            <div className="mt-8 text-left">
              <h3 className="mt-4 md:mt-8 font-bold text-xl md:text-2xl text-gray-700 mb-3">
                Do you currently have any of these Saas platforms or software solutions?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700 text-lg md:text-xl font-medium">
                    Accounting{" "}
                  </span>
                  <span className="text-gray-500">(e.g. Xero, Myob)</span>
                </label>
                <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Project Management{" "}
              </span>
              <span className="text-gray-500">(e.g. Office 365)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Point of Sales{" "}
              </span>
              <span className="text-gray-500">(e.g. SAP)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Job Safety
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                CRM
              </span>
              <span className="text-gray-500">(e.g. Hubspot, Pardot)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Other (please specify)
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Productivity{" "}
              </span>
              <span className="text-gray-500">(e.g. Trello, Monday)</span>
            </label>
            <input
              type="text"
              className="form-input mt-1 bg-[#f3f3f3]  py-4 rounded-xl block w-full"
              placeholder=""
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Workflow
              </span>{" "}
              <span className="text-gray-500">(e.g. Salesforce)</span>
            </label>

                {/* Add other checkboxes similarly */}
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">
                Which of these manual processes do your staff currently do every week?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-gray-600"
                  />
                  <span className="ml-2 text-gray-700 text-lg md:text-xl font-medium">
                    Quoting
                  </span>
                </label>
                <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Inductions
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Invoicing
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Scheduling/Booking
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Payroll
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Customer Feedback
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Learning
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Other (please specify)
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl font-medium">
                Asset Management
              </span>
            </label>
            <input
              type="text"
              className="form-input mt-1 bg-[#f3f3f3]  py-4 rounded-xl block w-full"
              placeholder=""
            />

              </div>
            </div>
          </div>

          <form className="bg-white rounded p-4 md:p-8 mt-8 w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Tell us about you
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-md font-medium mb-2" htmlFor="name">
                  Name<span className="text-red-500">*</span>
                </label>
                <input 
                  className="form-input mt-1 bg-[#f3f3f3]  py-4 rounded-xl block w-full" 
                  id="name" 
                  type="text" 
                />
              </div>
              <div>
                <label className="block text-gray-700 text-md font-medium mb-2" htmlFor="companyName">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input 
                  className="form-input mt-1 bg-[#f3f3f3]  py-4 rounded-xl block w-full" 
                  id="companyName" 
                  type="text" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-md font-medium mb-2" htmlFor="email">
                  Email address<span className="text-red-500">*</span>
                </label>
                <input 
                  className="form-input mt-1 bg-[#f3f3f3]  py-4 rounded-xl block w-full" 
                  id="email" 
                  type="email" 
                />
              </div>
              <div>
                <label className="block text-gray-700 text-md font-medium mb-2" htmlFor="phone">
                  Phone number<span className="text-red-500">*</span>
                </label>
                <input 
                  className="form-input mt-1 bg-[#f3f3f3]  py-4 rounded-xl block w-full" 
                  id="phone" 
                  type="tel" 
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-medium mb-2" htmlFor="industry">
                Industry<span className="text-red-500">*</span>
              </label>
              <select 
                className="form-input mt-1 bg-[#f3f3f3]  py-4 rounded-xl block w-full px-4" 
                id="industry"
              >
                <option>Select Industry</option>
                <option>Industry 1</option>
                <option>Industry 2</option>
                <option>Industry 3</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-[#0DC9C5] hover:bg-[#0DC9C1] text-white font-medium py-4 px-4 rounded-full focus:outline-none focus:shadow-outline w-full" 
                type="button"
              >
                Calculate my savings
              </button>
            </div>
            <p className="text-center text-gray-500 text-md font-medium mt-4">
              By submitting your details you agree that Sprint Digital may email you with information regarding your potential business savings and other offers. Sprint Digital will use your information within our <a href="#" className="text-blue-500">Privacy Policy</a>.
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SavingCalculator;