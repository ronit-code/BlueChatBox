import React, { useState } from "react";
import personFirst from "../assets/personFirst.png";

import ChatApp from "./ChatApp";
function ChatArea() {
  return (
    <div className="flex-1 bg-white p-6">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-4">
          <img
            src={personFirst}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">Admin</p>
            <p className="text-sm text-gray-500">admin@bluereceipt.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-blue-600">Messenger</button>
          <button className="text-gray-500">...</button>
        </div>
      </div>
      <div className="mt-4">
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={personFirst}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Admin</p>
                  <p className="text-sm text-gray-500">admin@bluereceipt.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-blue-600">Messenger</button>
                <button className="text-gray-500">...</button>
              </div>
            </div>
            <p className="text-sm">
              This is the very beginning of your direct message history with
              Admin.
            </p>

            <ChatApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
