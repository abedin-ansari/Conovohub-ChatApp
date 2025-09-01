import React from "react";
import SendMessage from "./SendMessage";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);
  return (
    <div className="flex-1 flex flex-col bg-black/20">
      <div className="text-white p-2 sm:p-4">
        <div className="flex gap-2 items-center bg-white/10 text-white px-3 sm:px-4 py-2 rounded-lg">
          <div className="avatar online">
            <div className="w-8 sm:w-10 rounded-full ring-2 ring-green-400 ring-offset-2 ring-offset-black/30">
              <img
                src={selectedUser?.profilePhoto}
                alt="User avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-2 justify-between">
              <p className="font-medium text-sm sm:text-base">
                {selectedUser?.fullName}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Messages />
      <SendMessage />
    </div>
  );
};

export default MessageContainer;
