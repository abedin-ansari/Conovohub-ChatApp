import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../CustomHooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return; // early return in react

//   return (
//     <div className="overflow-auto h-full">
//       {!otherUsers ? (
//         <div className="text-white/60 text-center py-4">Loading users...</div>
//       ) : otherUsers.length === 0 ? (
//         <div className="text-white/60 text-center py-4">No users found</div>
//       ) : (
//         otherUsers.map((user) => {
//           return <OtherUser key={user._id} user={user} />;
//         })
//       )}
//     </div>
//   );
// };

// export default OtherUsers;

//Github code 
return (
  <div className='overflow-y-auto flex-1 max-h-full pr-2'>
      {
          otherUsers?.map((user)=>{
              return (
                  <OtherUser key={user._id} user={user}/>
              )
          })
      }
      
  </div>
)
}

export default OtherUsers;
