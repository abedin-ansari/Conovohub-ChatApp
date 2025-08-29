import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:7000/api/user/login`, user , {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      })
      
      if(res.data.success){
        toast.success(res.data.message || "Login successful!");
        navigate("/");
        
        // Reset form only on success
        setUser({
          username: "",
          password: "",
        })
      }
              
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/80">Sign in to your account</p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <input
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 bg-white/25 border border-white/30 rounded-xl text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/25 border border-white/30 rounded-xl text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-white/80">
              <input type="checkbox" className="mr-2 rounded" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-white font-semibold hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 shadow-lg cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/80">
            Don't have an account?{" "}
            <Link to="/register" className="text-white font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
