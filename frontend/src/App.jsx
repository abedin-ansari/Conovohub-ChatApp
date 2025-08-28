import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

const App = () => {
  return (
    <div className="p-4">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
