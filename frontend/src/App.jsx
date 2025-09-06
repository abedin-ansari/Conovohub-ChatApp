import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import io from "socket.io-client";
import { setSocket } from "./utils/socketSlice";
import { setOnlineUsers } from "./utils/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/chat",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socketio = io("https://conovohub-chatapp.onrender.com", {
        query: { userId: authUser._id },
      });
      dispatch(setSocket(socketio));

      socketio?.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className="h-screen">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
