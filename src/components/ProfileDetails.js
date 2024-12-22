
import React from "react";
import personFirst from "../assets/personFirst.png";
import call from "../assets/call.png";
import people from "../assets/people.png";
import more from "../assets/more.png";
import "./ProfileDetails.css";
import ProfileDetailSection from "./ProfileDetailSection";

function ProfileDetails() {
  return (
    <div className="w-80 bg-white border-l border-gray-200 overflow-auto">
      <div className="text-center">
        <img
          src={personFirst}
          alt="User"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-lg font-semibold mt-4">Admin</h2>
        <p className="text-sm text-gray-500">11:59pm in Ankara, Turkey</p>
      </div>

      <div className="flex pt-5 justify-around my-4 cursor-pointer">
        <img src={call} className="w-10 h-10 rounded-full" alt="Call" />
        <img src={people} className="w-10 h-10 rounded-full" alt="People" />
        <img src={more} className="w-10 h-10 rounded-full" alt="More" />
      </div>

      <div className="revenueVisits grid grid-cols-2 gap-1 overflow-hidden">
        <div className="p-4 bg-white rounded-lg shadow-md border m-1 w-full">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <div className="mt-4">
            <div className="flex justify-between text-gray-600">
              <span className="font-medium">Orders:</span>
              <span className="text-blue-500">24</span>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <span className="font-medium">Revenue:</span>
              <span className="text-green-500">$1142.0</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md border m-2 mr-5 w-full">
          <h3 className="text-lg font-semibold text-gray-700">Web visits</h3>
          <div className="mt-4">
            <div className="flex justify-between text-gray-600">
              <span className="font-medium">Visits:</span>
              <span className="text-blue-500">42</span>
            </div>
            <div className="flex justify-between text-gray-600 mt-2">
              <span className="font-medium">4 Link Clicks</span>
            </div>
          </div>
        </div>
      </div>

      <ProfileDetailSection/>
    </div>

    

  );
}

export default ProfileDetails;
