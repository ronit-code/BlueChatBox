import React, { useState } from "react";

function ProfileDetails() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden p-4 bg-white rounded-lg shadow-md">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search in general"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Information Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Information</h3>
        <div className=" mt-4">
          <div className="grid grid-cols-2 gap-4">
            <p className="font-medium text-gray-600">Segment</p>
            <p className="text-gray-500">Abandoned Cart</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-medium text-gray-600">Email</p>
            <p className="text-gray-500">admin@123.com</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-medium text-gray-600">Phone Number</p>
            <p className="text-gray-500">+1 234 567 890</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-medium text-gray-600">Last Visited</p>
            <p className="text-gray-500"> Dec 21, 2024</p>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Tags</h3>
        <div className="mt-4 flex flex-wrap gap-2 cursor-pointer">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">bandoned Cart User</span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">popup</span>
          <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm">Shop error</span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm">successful</span>

        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
