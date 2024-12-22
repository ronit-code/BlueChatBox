import React from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ProfileDetails from "./components/ProfileDetails";

import "./App.css"

function App() {
  return (

    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Chat Area */}
    <div className="flex-1 flex flex-col">
      <ChatArea />
    </div>

    {/* Profile Details */}
    <ProfileDetails />

    
  </div>
  );
}

export default App;
