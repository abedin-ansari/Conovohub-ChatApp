import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../utils/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      // if (!selectedUser?._id) return;

      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:7000/api/message/${selectedUser._id}`);
        dispatch(setMessages(res.data));
      } catch (error) {
        console.log("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [selectedUser?._id, setMessages]);
};

export default useGetMessages;
