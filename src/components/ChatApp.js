




import React, { useState } from "react";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "john",
      text: "I keep getting 'error while creating a new pop-up' for the first-time setup, so I'm not able to create a pop-up. My shop name is PinkSweetHeart.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "you",
      text: "Hey, I saw you were curious about our products. My name is X from StoreName. Feel free to save my number and send me a text if you have any questions or concerns.",
      time: "10:32 AM",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() || file) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages([
        ...messages,
        {
          id: Date.now(),
          sender: "you",
          text: newMessage,
          time: currentTime,
          file: file ? file.name : null,
        },
      ]);
      setNewMessage("");
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
      e.preventDefault(); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-2 p-4 bg-gray-100 rounded shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700">Chat</h2>
      </div>
     
      <div className="h-64 overflow-y-auto bg-white p-4 rounded shadow-inner">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-4 flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded max-w-xs break-words ${
                msg.sender === "you"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {msg.text}
            </div>
            {msg.file && (
              <p className="text-sm text-gray-600 mt-1">
                Attached: {msg.file}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
          </div>
        ))}
      </div>
     
      <div className="mt-4 flex flex-col space-y-2">
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded focus:outline-none"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <input
          type="file"
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          onChange={handleFileChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
