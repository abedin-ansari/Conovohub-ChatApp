// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";

// const Message = ({ message }) => {
//   const scroll = useRef();
//   const { authUser, selectedUser } = useSelector((store) => store.user);

//   useEffect(() => {
//     scroll.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   const senderIdValue =
//     typeof message?.senderId === "object" && message?.senderId?._id
//       ? message.senderId._id
//       : message?.senderId;
//   const isOwn = authUser?._id === senderIdValue;
//   return (
//     <div
//       ref={scroll}
//       className={`chat ${isOwn ? "chat-end" : "chat-start"}`}
//     >
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src={isOwn ? authUser?.profilePhoto : selectedUser?.profilePhoto}
//           />
//         </div>
//       </div>
//       <div className="chat-header">
//         <time className="text-xs opacity-50">12:45</time>
//       </div>
//       <div className="chat-bubble">{message?.message}</div>
//     </div>
//   );
// };

// export default Message;

// Github Code
import React, { useEffect, useRef } from 'react'
import {useSelector} from "react-redux";

const Message = ({message}) => {
    const scroll = useRef();
    const {authUser,selectedUser} = useSelector(store=>store.user);

    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"});
    },[message]);
    
    // const isOwn = message?.senderId === authUser?._id;
    
//     return (
//         <div ref={scroll} className={`chat ${isOwn ? 'chat-end' : 'chat-start'} fade-in`}>
//             <div className="chat-image avatar">
//                 <div className="w-10 h-10 rounded-full ring-2 ring-white/20">
//                     <img alt="User avatar" src={isOwn ? authUser?.profilePhoto : selectedUser?.profilePhoto} className="w-full h-full rounded-full object-cover" />
//                 </div>
//             </div>
//             <div className="chat-header mb-1">
//                 <time className="text-xs text-white/60">
//                     {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
//                 </time>
//             </div>
//             <div className={`chat-bubble ${isOwn ? 'sent' : 'received'} max-w-xs sm:max-w-md`}>
//                 {message?.message}
//             </div>
//         </div>
//     )
// }

// export default Message

return (
    <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilePhoto  : selectedUser?.profilePhoto } />
            </div>
        </div>
        <div className="chat-header">
            <time className="text-xs opacity-50 text-white">12:45</time>
        </div>
        <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>{message?.message}</div>
    </div>
)
}

export default Message