import React from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-1/3 p-4 bg-black/30 border-r border-white/20">
      <form className="flex items-center gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white">
          <FaSearch className="w-4 h-4" />
        </button>
      </form>
      <div className="border-b border-white/20 mb-4"></div>
      <OtherUsers />
    </div>
  );
};

export default Sidebar;
