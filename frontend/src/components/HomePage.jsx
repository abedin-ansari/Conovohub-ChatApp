import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

const HomePage = () => {
  return (
    <div className="app-background flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl h-[600px] sm:h-[700px] flex flex-col sm:flex-row rounded-2xl overflow-hidden bg-black/20 backdrop-blur-lg border border-white/20 shadow-2xl">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;
