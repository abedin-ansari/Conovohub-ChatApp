import React from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-1/3 p-2 sm:p-4 bg-black/30 border-r border-white/20 flex flex-col h-full">
      <form className="flex items-center gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          type="text"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white hover:bg-white/30 transition-colors"
        >
          <FaSearch className="w-4 h-4" />
        </button>
      </form>
      <div className="border-b border-white/20 mb-4"></div>
      <div className="flex-1 overflow-hidden">
        <OtherUsers />
      </div>
      <div className="mt-4">
        <button className="w-full px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
