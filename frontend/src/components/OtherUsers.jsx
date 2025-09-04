import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../CustomHooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) return; // early return in react

 
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
