import React, { useEffect } from "react";
import SendMessage from "./SendMessage";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../utils/userSlice";

const MessageContainer = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);
  return (
    <>
      {selectedUser != null ? (
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
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2 bg-black/10 text-center">
          <h1 className="text-lg sm:text-xl font-semibold text-white">
            Hi {authUser?.fullName}👋
          </h1>
          <h2 className="text-base sm:text-lg text-gray-300">
            Let’s start conversation
          </h2>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
