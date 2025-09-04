import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaUsers, FaShieldAlt } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="app-background min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="p-4 md:p-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 md:gap-6">
            <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-3 md:px-4 md:py-2">
              <FaComments className="text-gray-800 text-2xl" />
              <h1 className="text-xl font-bold text-gray-800">ConvoHub</h1>
            </div>
            <div className="flex space-x-3 md:space-x-4 justify-center md:justify-end md:px-4 md:py-2">
              <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 md:px-4 rounded">
                About
              </Link>
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

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Real-Time Chat Made Simple
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect instantly with friends and family through secure, fast messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
            >
              Start Chatting
            </Link>
            <Link 
              to="/about" 
              className="border border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Features */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FaComments className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Real-Time</h3>
              <p className="text-gray-600 text-sm">Instant messaging with live updates</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FaUsers className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Online Status</h3>
              <p className="text-gray-600 text-sm">See who's available to chat</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FaShieldAlt className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">Protected conversations</p>
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

export default LandingPage;
