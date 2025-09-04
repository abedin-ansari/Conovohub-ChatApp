import React from "react";
import Message from "./Message";
import useGetMessages from "../CustomHooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../CustomHooks/useGetRealTimeMessage";

const Messages = () => {
  useGetMessages();
  useGetRealTimeMessage();
  const { messages } = useSelector(store => store.message);
  

  return (
    <div className='px-4 flex-1 overflow-y-auto mobile-scroll-container messages-container min-h-0'>
        {
           messages && messages?.map((message) => {
                return (
                    <Message key={message._id} message={message} />
                )
            })
        }

    </div>


)
}

export default Messages