import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#2A2A2A] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 px-8 md:px-36 py-14 md:py-28 space-y-8 md:space-y-0">
                <div className="flex flex-col space-y-8">
                    <div className="text-4xl font-bold">
                        <h1>Ready when you are</h1>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <button className="bg-[#0DC9C5] text-white text-base px-10 py-4 rounded-full text-sm font-medium">Get in touch</button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 pt-10 justify-between">
                        <div className="explore flex flex-col space-y-5">
                            <h2 className="text-lg opacity-75">EXPLORE</h2>
                            <ul className="flex flex-col space-y-5">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/articles">Articles</Link></li>
                                <li><Link to="/savingcalculator">Saving Calculator</Link></li>
                                <li><Link to="/services">Services</Link></li>
                            </ul>
                        </div>
                        <div className="follow-us flex flex-col space-y-5 pt-8 sm:pt-0">
                            <h2 className="text-lg opacity-75">Follow Us</h2>
                            <ul className="flex flex-col space-y-5">
                                <li>sprintdigitalaua</li>
                                <li>sprintdigitalaua</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-end lg:justify-center px-0 md:px-36 py-14 md:py-28 space-y-8">
                    <div className="review self-start lg:self-end">
                        <div className="text-xs opacity-75">
                            <p>REVIEWED ON</p>
                            <div className="flex items-center">
                                <span className="text-3xl font-bold">Clutch</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-1">
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.463a1 1 0 00-.364 1.118l1.286 3.975c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.393 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.975a1 1 0 00-.364-1.118L2.598 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z"></path>
                            </svg>
                        </div>
                        <div className="text-sm text-gray-400">
                            <p>7 REVIEWS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="terms-and-conditions flex flex-col md:flex-row px-8 md:px-36 py-10 md:py-14 justify-between items-center">
                <div className="flex space-x-10 text-sm opacity-75">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div className="flex space-x-10 text-sm opacity-75 pt-4 md:pt-0 md:pr-24">
                    <a href="#">All rights reserved Sprint Digital 2024.</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
