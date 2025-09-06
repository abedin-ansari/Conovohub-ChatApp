import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../utils/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:7000/api/user`);
        // Store
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error('Failed to fetch other users:', error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
