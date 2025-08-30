import React from "react";
import { IoSend } from "react-icons/io5";

const SendMessage = () => {
  return (
    <form className="px-2 sm:px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Type your message..."
          className="border text-sm rounded-lg block w-full p-3 sm:p-4 border-white/40 bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 shadow-lg"
        />
        <button className="absolute flex items-center inset-y-0 end-0 pr-3 sm:pr-4 text-white hover:text-white/80">
          <IoSend className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
