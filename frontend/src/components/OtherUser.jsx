import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../utils/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector((store) => store.user);
  const isOnline = onlineUsers?.includes(user._id);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div 
        onClick={() => selectedUserHandler(user)} 
        className={`${selectedUser?._id === user?._id ? 'glass-effect border-purple-400' : 'glass-dark'} flex gap-3 items-center hover:glass-effect cursor-pointer rounded-xl p-3 mb-2 transition-all duration-200 hover-glow fade-in`}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className='w-12 h-12 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-transparent'>
            <img src={user?.profilePhoto} alt="user-profile" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between items-center'>
            <p className="text-white font-medium">{user?.fullName}</p>
            {isOnline && <span className="online-indicator w-3 h-3 rounded-full"></span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherUser;