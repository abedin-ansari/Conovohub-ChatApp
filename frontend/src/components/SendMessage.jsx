import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../utils/messageSlice";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:7000/api/message/send/${selectedUser?._id}`,
        { message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(setMessages([...messages, res.data.newMessage]));
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className="px-2 sm:px-4 my-3">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type your message..."
          className="border text-sm rounded-lg block w-full p-3 sm:p-4 border-white/40 bg-white/30 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 shadow-lg"
        />
        <button
          type="submit"
          className="absolute flex items-center inset-y-0 end-0 pr-3 sm:pr-4 text-white hover:text-white/80"
        >
          <IoSend className="w-5 h-5 text-black cursor-pointer" />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
