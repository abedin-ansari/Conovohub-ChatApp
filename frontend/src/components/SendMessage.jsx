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
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
      dispatch(setMessages([...messages, res?.data?.newMessage]))
    } catch (error) {
      // Error handled silently - message will not be sent if error occurs
    }
    setMessage("");
  };
  return (
    <form onSubmit={submitHandler} className="px-4 py-4 border-t border-white/10 flex-shrink-0">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type your message..."
          className="w-full px-4 py-3 pr-12 glass-effect rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all hover-glow"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 glass-effect rounded-lg text-white hover:bg-white/20 transition-all hover-glow"
        >
          <IoSend className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
