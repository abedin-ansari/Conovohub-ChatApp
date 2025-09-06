import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../utils/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:7000/api/user/login`,
        user,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );

      navigate("/chat");
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="app-background flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg bg-black/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-6 sm:p-8 lg:p-10 xl:p-20 mx-4">
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-white/80 text-sm lg:text-base xl:text-lg">
            Sign in to your account
          </p>
        </div>

        <form
          onSubmit={onSubmitHandler}
          action=""
          className="space-y-4 lg:space-y-5 xl:space-y-5"
        >
          <div>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 lg:px-5 lg:py-3 xl:px-5 xl:py-3 bg-white/20 border border-white/40 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm lg:text-base xl:text-base"
            />
          </div>
          <div className="relative">
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 lg:px-5 lg:py-3 xl:px-5 xl:py-3 pr-12 bg-white/20 border border-white/40 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all text-sm lg:text-base xl:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors text-sm lg:text-base xl:text-base"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center justify-between text-xs lg:text-sm xl:text-sm">
            <label className="flex items-center text-white/80">
              <input type="checkbox" className="mr-2 rounded" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-white font-semibold hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 lg:py-3 xl:py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg cursor-pointer text-sm lg:text-base xl:text-base"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm lg:text-base xl:text-base">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-white font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
