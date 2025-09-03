import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../utils/messageSlice";

const useGetRealTimeMessage = () => {
  const { socket } = useSelector((store) => store.socket);
  const { messages } = useSelector((store) => store.message);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (!socket) return;
    // const handleNewMessage = (newMessage) => {
    //   const current = Array.isArray(messages) ? messages : [];
    //   dispatch(setMessages([...current, newMessage]));
    // };
    socket?.on("newMessage", (newMessage)=>{
      dispatch(setMessages([...messages, newMessage]));
    });
    return () => socket?.off("newMessage");
  },[setMessages, messages]);
};
export default useGetRealTimeMessage;
