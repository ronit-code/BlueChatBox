import React, { useState } from "react";
import logo from "../assets/personFirst.png";
import search from "../assets/search_icon.png";
import people from "../assets/peoplee.png";
import filter from "../assets/filterIcon.png";
import personFirst from "../assets/personFirst.png";
import personSecond from "../assets/personSecond.png";
import personThird from "../assets/personThird.png";
import personFourth from "../assets/personFourth.png";
import "./Sidebar.css";



function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex">
        <img className="logo" src={logo} alt="logo" />
        <h2 className="text-lg font-semibold mb-4 m-0 p-0 top text">
          BlueChat
          <p className="inbox">Inbox</p>
        </h2>
        <div class="wrapper">
          <div class="search cursor-pointer">
            <img src={search} alt="" />
          </div>
        </div>
      </div>

      <div className="button">
        <button className="text-blue-600 font-medium ">Messages</button>
        <button className="ml-4 text-gray-500">Segments</button>
      </div>

      <div className="filter cursor-pointer">
        <img className="img imgPeople " src={people} alt="" />
        <p>All</p>
        <div className="down-arrow"></div>

        <img className="img " src={filter} alt="" />
        <p>Oldest</p>
        <div className="down-arrow"></div>
      </div>

      <div className="mt-6 cursor-pointer">
        
        <div className="space-y-4 ">
          
          <div className="flex items-center space-x-4">
            <img
              src={personFirst}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className=" flex  items-center justify-between w-full">
              <p className="font-medium messageBox  "> Admin</p>
              <p className="text-xs text-gray-500 oneLine messageBox messageTime">
                5m ago
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-700">
            I keep getting "error while creating a new pop up" for the first
            time
          </p>
          
          <hr />
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={personSecond}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className=" flex  items-center justify-between w-full">
              <p className="font-medium messageBox ">John</p>
              <p className="text-xs text-gray-500 oneLine messageBox messageTime">
                {" "}
                54m ago
              </p>
            </div>
          </div>
          <p className="  text-sm text-slate-700">
            Wow, This is really epic man
          </p>
          <hr />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={personThird}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className=" flex  items-center justify-between w-full">
              <p className="font-medium messageBox ">840-12</p>
              <p className="text-xs text-gray-500 oneLine messageBox messageTime">
                1h 54m ago
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-700">Hahah, this is amazing man</p>
          <hr />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={personFourth}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className=" flex  items-center justify-between w-full">
              <p className="font-medium messageBox  ">Prazz</p>
              <p className="text-xs text-gray-500 oneLine messageBox messageTime">
                5h 21m ago
              </p>
            </div>
          </div>
          <p className="  text-sm text-slate-700">
            There will be changes to next week's presentation due to recent
            policies
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
