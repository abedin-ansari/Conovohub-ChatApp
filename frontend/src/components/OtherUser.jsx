import React from "react";

const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-white/10 cursor-pointer rounded-lg p-2 transition-colors">
        <div className="avatar online">
          <div className="w-8 sm:w-10 rounded-full ring-2 ring-green-400 ring-offset-2 ring-offset-black/30">
            <img
              src="https://inmyheart.in/site/assets/files/1372/whatsapp_dp_with_emoji.jpg"
              alt="User avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="text-white font-medium text-sm sm:text-base">Munchun</p>
          </div>
        </div>
      </div>
      <div className="border-b border-white/10 my-1"></div>
    </div>
  );
};

export default OtherUser;
