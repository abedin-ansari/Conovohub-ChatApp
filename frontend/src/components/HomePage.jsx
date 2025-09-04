import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/");
    }
  }, []);
  return (
    <div className="app-background flex items-center justify-center min-h-screen p-2 sm:p-4">
      <div className="w-full max-w-7xl lg:max-w-[90rem] h-[90vh] sm:h-[700px] lg:h-[800px] flex flex-col sm:flex-row rounded-2xl overflow-hidden glass-effect shadow-2xl fade-in chat-main-container">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default HomePage