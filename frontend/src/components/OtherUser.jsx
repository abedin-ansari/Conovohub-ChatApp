import React from "react";
import { setSelectedUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${
          selectedUser?._id === user?._id ? "bg-white/10" : ""
        } flex gap-2 items-center hover:bg-white/10 cursor-pointer rounded-lg p-2 transition-colors`}
      >
        <div className="avatar online">
          <div className="w-8 sm:w-10 rounded-full ring-2 ring-green-400 ring-offset-2 ring-offset-black/30">
            <img
              src={
                user?.profilePhoto ||
                "https://inmyheart.in/site/assets/files/1372/whatsapp_dp_with_emoji.jpg"
              }
              alt="User avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="text-white font-medium text-sm sm:text-base">
              {user?.fullName || "Unknown User"}
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-white/10 my-1"></div>
    </>
  );
};

export default OtherUser;
