import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers, setAuthUser, setSelectedUser } from "../utils/userSlice";
import { setMessages } from '../utils/messageSlice';

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:7000/api/user/logout`);
      navigate("/login");

      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      dispatch(setMessages(null));
      dispatch(setOtherUsers(null));
      dispatch(setSelectedUser(null));
      
    } catch (error) {
        // Error handled by toast notification
    }
  };


  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      // Clear search - reload all users
      const fetchAllUsers = async () => {
        try {
          const res = await axios.get(`http://localhost:7000/api/user/`, {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          });
          dispatch(setOtherUsers(res.data));
        } catch (error) {
          // Error handled silently - users will see empty list if fetch fails
        }
      };
      fetchAllUsers();
      return;
    }

    const filtered = otherUsers?.filter((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (filtered && filtered.length > 0) {
      dispatch(setOtherUsers(filtered));
    } else {
      toast.error("No user found");
    }
  };

  return (
    <div className="w-full sm:w-1/3 p-4 glass-dark border-r border-white/20 flex flex-col h-full mobile-sidebar">
      <form
        onSubmit={searchSubmitHandler}
        className="flex items-center gap-2 mb-4"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 glass-effect rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all hover-glow"
          type="text"
          placeholder="Search users..."
        />
        <button
          type="submit"
          className="px-4 py-3 glass-effect rounded-xl text-white hover:bg-white/20 transition-all hover-glow"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </form>
      
      <div className="border-b border-white/20 mb-4"></div>
      
      <div className="flex-1 overflow-hidden min-h-0">
        <OtherUsers />
      </div>
      
      <div className="mt-4">
        <button
          onClick={logoutHandler}
          className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover-glow cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar