import React from "react";
import { useState } from "react";
import chat from "../assets/svg/chat.svg";
import Contact from "../assets/svg/contact.svg";
import Setting from "../assets/svg/setting.svg";

import callIcon from "../assets/svg/call.svg";
import NotifyIcon from "../assets/svg/notification.svg";
import Group from "../assets/svg/group.svg";
import userProfile from "../assets/svg/profile.png";
import useLogout from "../../hooks/useLogout";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout, loading } = useLogout();
  return (
    <header className="mb-1 bg-[#20232C] max-h-[20%] rounded-t-3xl">
      <div className="relative flex flex-col overflow-hidden px-4 py-4 md:flex-row md:items-center ">
        <div className="flex items-center whitespace-nowrap text-2xl font-bold">
          <span className="text-white">ChatApp</span>
        </div>
        <input
          type="checkbox"
          className="peer hidden"
          id="navbar-open"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className={`peer-checked:mt-8 peer-checked:max-h-56 flex w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-center ${isOpen ? "" : "hidden md:flex"
            }`}>
          <ul className="flex flex-col items-center space-y-2 gap-6 md:m-auto md:flex-row md:space-y-0">
            <li className="text-gray-400 flex gap-3 md:mr-12 hover:text-amber-200">
              <img className="w-6" src={Contact} />
              <a href="#">Contacts</a>
            </li>
            <li className="text-gray-400 flex gap-3 md:mr-12 hover:text-amber-200">
              <img className="w-6" src={chat} />
              <a href="#">Chat</a>
            </li>
            <li className="text-gray-400 flex gap-3 md:mr-12 hover:text-amber-200">
              <img className="w-6" src={Group} />
              <a href="#">Groups</a>
            </li>
            <li className="text-gray-400 flex gap-3 md:mr-12 hover:text-amber-200">
              <img className="w-6" src={Setting} />
              <a href="#">Settings</a>
            </li>
          </ul>
          <div className="flex m-auto items-center gap-5 mx-auto max-xl:hidden">
            <input type="checkbox" className="toggle" />
            <div className="call">
              <img className="w-7" src={callIcon} />
            </div>
            <div className="notify">
              <img className="w-7" src={NotifyIcon} />
            </div>
          </div>
          <div className="text-xs flex gap-3 max-xl:m-auto max-lg:hidden">
            <div className="text-white text-right" tabIndex={0} role="button">
              <p>Good Evening, Abhi</p>
              <p>+919634355530</p>
            </div>
            <div className="h-8 w-8 max-w-full rounded-full overflow-hidden object-cover">
              <img src={userProfile} />
            </div>
            <div className="dropdown dropdown-hover dropdown-end fixed pt-10  px-20">
              <ul tabIndex={0} className="dropdown-content z-[1]  menu p-2 shadow bg-gray-700 rounded-box w-52">
                <li><button
                  disabled={loading}
                  onClick={logout}
                >
                  Logout </button> </li>
              </ul>
            </div>

          </div>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;
