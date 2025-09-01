import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../utils/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:7000/api/user/`, {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        });
        // Store
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchOtherUsers();
  }, [dispatch]);
};

export default useGetOtherUsers;
