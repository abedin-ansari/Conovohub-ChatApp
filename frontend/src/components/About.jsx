import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaArrowLeft, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <div className="app-background min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="p-4 md:p-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 md:gap-6">
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 text-gray-800 hover:text-gray-600 md:px-4 md:py-2">
              <FaArrowLeft className="text-lg ml-9" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center justify-center space-x-2 md:space-x-3 md:px-4 md:py-2">
              <FaComments className="text-gray-800 text-2xl" />
              <h1 className="text-xl font-bold text-gray-800">ConvoHub</h1>
            </div>
            <div className="flex space-x-3 md:space-x-4 justify-center md:justify-end md:px-4 md:py-2">
              <Link to="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 md:px-4 rounded">
                Sign In
              </Link>
              <Link to="/register" className="bg-purple-600 text-white px-4 py-2 md:px-5 rounded font-medium hover:bg-purple-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* About Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About ConvoHub
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A modern real-time chat application built with the MERN stack for seamless communication.
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
            <div className="bg-white/10 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Real-Time Communication</h3>
                  <p className="text-gray-600 text-sm mb-4">Instant messaging with Socket.io technology</p>
                  
                  <h3 className="text-gray-800 font-semibold mb-2">User Authentication</h3>
                  <p className="text-gray-600 text-sm mb-4">Secure JWT-based login and registration</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Online Status</h3>
                  <p className="text-gray-600 text-sm mb-4">See who's online and available to chat</p>
                  
                  <h3 className="text-gray-800 font-semibold mb-2">Responsive Design</h3>
                  <p className="text-gray-600 text-sm mb-4">Works perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Chatting?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
              >
                Create Account
              </Link>
              <Link 
                to="/login" 
                className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaComments className="text-gray-800 text-lg" />
            <span className="text-gray-800 font-medium">ConvoHub</span>
          </div>
          <p className="text-gray-600 text-sm">© 2025 ConvoHub</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
