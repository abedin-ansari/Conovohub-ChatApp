import React from "react";
import Message from "./Message";
import useGetMessages from "../CustomHooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../CustomHooks/useGetRealTimeMessage";

// const Messages = () => {
//   useGetMessages(); // Load existing messages from database
//   useGetRealTimeMessage(); // Handle new real-time messages
//   const { messages } = useSelector((store) => store.message);

//   if (!messages || messages.length === 0) {
//     return (
//       <div className="px-2 sm:px-4 flex-1 overflow-auto flex items-center justify-center">
//         <div className="text-white/60 text-center">No messages yet</div>
//       </div>
//     );
//   }

//   return (
//     <div className="px-2 sm:px-4 flex-1 overflow-auto">
//       {messages &&
//         messages.map((message) => {
//           return <Message key={message._id} message={message} />;
//         })}
//     </div>
const Messages = () => {
  useGetMessages();
  useGetRealTimeMessage();
  const { messages } = useSelector(store => store.message);
  
  // if (!messages || messages.length === 0) {
  //   return (
  //     <div className="px-4 flex-1 overflow-auto flex items-center justify-center">
  //       <div className="text-white/60 text-center fade-in">
  //         <p className="text-lg mb-2">No messages yet</p>
  //         <p className="text-sm">Start the conversation!</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className='px-4 flex-1 overflow-auto'>
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