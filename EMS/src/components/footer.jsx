import React from 'react';

const Footer = () => {
  return (
    <>
    <footer id="contact" className="bg-gradient-to-r from-[#1a0330] to-[#3a0303] py-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="f-container">
          <h2 className="text-2xl text-white mb-4">EventZilla - Your Personal Event Planner</h2>
          <p className="text-gray-400 mb-4">Plan your Event with Us. EventZilla is free for all users</p>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-purple-950 hover:rounded-full hover:border-slate-600 hover:border-[1px]">Register as a Vendor</button>
          </div>
          <div className="social flex space-x-4 mt-4">
            <i className="fab fa-facebook text-blue-600 text-2xl"></i>
            <i className="fab fa-instagram text-pink-500 text-2xl"></i>
            <i className="fab fa-linkedin text-blue-700 text-2xl"></i>
            <i className="fab fa-twitter text-blue-400 text-2xl"></i>
            <i className="fab fa-pinterest text-red-600 text-2xl"></i>
          </div>
        </div>
        <div className="f-container w-32">
          <h2 className="text-2xl text-white mb-4">Our Offices</h2>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Islamabad</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Lahore</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Faislabad</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Hassanabad</a>
          <a href="#" className="block text-gray-400 mb-2"><i className="fas fa-angle-right mr-2"></i>Seattle</a>
        </div>
        <div className="f-container">
          <h2 className="text-2xl text-white mb-4">Our Newsletter</h2>
          <p className="text-gray-400 mb-4">Subscribe for the latest updates</p>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-4"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-purple-950 hover:rounded-full hover:border-slate-600 hover:border-[1px]">Subscribe</button>
          
        </div>
      </div>
      
    </footer>
    <div className="text-center bg-gray-900 text-gray-300 py-4">
    <p>Copyright ©2024 All Rights Reserved | Luzy Corporation Limited</p>
  </div>
  </>
  );
};

export default Footer;
