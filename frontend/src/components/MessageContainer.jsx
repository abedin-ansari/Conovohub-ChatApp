// import React, { useEffect } from "react";
// import SendMessage from "./SendMessage";
// import Messages from "./Messages";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedUser } from "../utils/userSlice";

// const MessageContainer = () => {
//   const { selectedUser, authUser } = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     return () => dispatch(setSelectedUser(null));
//   }, []);
//   return (
//     <>
//       {selectedUser != null ? (
//         <div className="flex-1 flex flex-col bg-black/20">
//           <div className="text-white p-2 sm:p-4">
//             <div className="flex gap-2 items-center bg-white/10 text-white px-3 sm:px-4 py-2 rounded-lg">
//               <div className="avatar online">
//                 <div className="w-8 sm:w-10 rounded-full ring-2 ring-green-400 ring-offset-2 ring-offset-black/30">
//                   <img
//                     src={selectedUser?.profilePhoto}
//                     alt="User avatar"
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col flex-1">
//                 <div className="flex gap-2 justify-between">
//                   <p className="font-medium text-sm sm:text-base">
//                     {selectedUser?.fullName}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Messages />
//           <SendMessage />
//         </div>
//       ) : (
//         <div className="flex-1 flex flex-col items-center justify-center gap-2 bg-black/10 text-center">
//           <h1 className="text-lg sm:text-xl font-semibold text-white">
//             Hi {authUser?.fullName}👋
//           </h1>
//           <h2 className="text-base sm:text-lg text-gray-300">
//             Let’s start conversation
//           </h2>
//         </div>
//       )}
//     </>
//   );
// };

// export default MessageContainer;


//Github Code

import React, { useEffect } from 'react'
import SendMessage from './SendMessage'
import Messages from './Messages';
import { useSelector,useDispatch } from "react-redux";
import { setSelectedUser } from '../utils/userSlice';

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

//     const isOnline = onlineUsers?.includes(selectedUser?._id);
   
//     return (
//         <>
//             {
//                 selectedUser !== null ? (
//                     <div className='flex-1 flex flex-col glass-effect min-h-0 mobile-messages'>
//                         <div className='flex gap-3 items-center glass-dark text-white px-6 py-4 border-b border-white/10 flex-shrink-0'>
//                             <div className={`avatar ${isOnline ? 'online' : ''}`}>
//                                 <div className='w-12 h-12 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-transparent'>
//                                     <img src={selectedUser?.profilePhoto} alt="user-profile" className="w-full h-full rounded-full object-cover" />
//                                 </div>
//                             </div>
//                             <div className='flex flex-col flex-1'>
//                                 <div className='flex justify-between items-center'>
//                                     <p className="font-semibold text-lg">{selectedUser?.fullName}</p>
//                                     {isOnline && <span className="text-green-400 text-sm font-medium">● Online</span>}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex-1 min-h-0 flex flex-col">
//                             <Messages />
//                             <SendMessage />
//                         </div>
//                     </div>
//                 ) : (
//                     <div className='flex-1 flex flex-col justify-center items-center glass-effect text-center p-8'>
//                         <div className="fade-in">
//                             <h1 className='text-4xl text-white font-bold mb-4'>Hi, {authUser?.fullName}! 👋</h1>
//                             <h2 className='text-xl text-white/80 mb-6'>Let's start a conversation</h2>
//                             <p className='text-white/60'>Select a user from the sidebar to begin chatting</p>
//                         </div>
//                     </div>
//                 )
//             }
//         </>

//     )
// }

// export default MessageContainer

const isOnline = onlineUsers?.includes(selectedUser?._id);
   
    return (
        <>
            {
                selectedUser !== null ? (
                    <div className='md:min-w-[550px] flex flex-col'>
                        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
                            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                                <div className='w-12 rounded-full'>
                                    <img src={selectedUser?.profilePhoto} alt="user-profile" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2'>
                                    <p>{selectedUser?.fullName}</p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendMessage />
                    </div>
                ) : (
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold'>Hi,{authUser?.fullName} </h1>
                        <h1 className='text-2xl text-white'>Let's start conversation</h1>

                    </div>
                )
            }
        </>

    )
}

export default MessageContainer