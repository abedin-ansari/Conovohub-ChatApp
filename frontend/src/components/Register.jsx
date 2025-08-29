import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:7000/api/user/register`, user, {
        headers: {
          'Content-type': 'application/json'
        },
        withCredentials: true,
      })
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message);
        
        // Reset form only on success
        setUser({
          fullName: "",
          username: "",
          password: "",
          confirmPassword: "",
          gender: "",
        })
      }      
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
      console.log(error);
    }
  }

  const handleGenderData = (genderValue) => {
    setUser({...user, gender: genderValue})
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-white/80">Join our community today</p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <input
            value={user.fullName}
            onChange={(e) => setUser({...user, fullName: e.target.value})}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white/25 border border-white/30 rounded-xl text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
              type="username"
              placeholder="username"
              className="w-full px-4 py-3 bg-white/25 border border-white/30 rounded-xl text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <select
              value={user.gender}
              onChange={(e) => handleGenderData(e.target.value)}
              className="w-full px-4 py-3 bg-white/25 border border-white/30 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            >
              <option value="" className="text-gray-600">Select Gender</option>
              <option value="male" className="text-gray-600">Male</option>
              <option value="female" className="text-gray-600">Female</option>
            </select>
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
          <div>
            <input
            value={user.confirmPassword}
            onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 bg-white/25 border border-white/30 rounded-xl text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-white/90 transform hover:scale-[1.02] transition-all duration-200 shadow-lg cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/80">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
