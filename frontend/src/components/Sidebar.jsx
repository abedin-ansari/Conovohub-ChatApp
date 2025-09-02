import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers, setAuthUser, setSelectedUser } from "../utils/userSlice";

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const { otherUsers } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:7000/api/user/logout`);
      // Clear Redux state
      dispatch(setAuthUser(null));
      dispatch(setSelectedUser(null));
      dispatch(setOtherUsers(null));
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      // Clear search - show all users
      const fetchAllUsers = async () => {
        try {
          const res = await axios.get(`http://localhost:7000/api/user/`, {
            headers: { "Content-type": "application/json" },
            withCredentials: true,
          });
          dispatch(setOtherUsers(res.data));
        } catch (error) {
          console.log("Error fetching users:", error);
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
    <div className="w-full sm:w-1/3 p-2 sm:p-4 bg-black/30 border-r border-white/20 flex flex-col h-full">
      <form
        onSubmit={searchSubmitHandler}
        action=""
        className="flex items-center gap-2 mb-4"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          type="text"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white hover:bg-white/30 transition-colors"
        >
          <FaSearch className="w-6 h-6 cursor-pointer text-black" />
        </button>
      </form>
      <div className="border-b border-white/20 mb-4"></div>
      <div className="flex-1 overflow-hidden">
        <OtherUsers />
      </div>
      <div className="mt-4">
        <button
          onClick={logoutHandler}
          className="w-full px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
