import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import { useAuthContext } from '../../context/AuthContext';

const NewNavbar = () => {
  const { authUser } = useAuthContext();
  const [theme, setTheme] = useState("fussy");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "fussy" ? "fussylight" : "fussy"));
  };

  return (
    <div className="navbar w-8/12 max-lg:w-full mb-1 bg-primary mx-auto rounded-b-3xl">
      <div className="navbar-start">

      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-white">Fusssy</a>
      </div>
      <div className="navbar-end gap-2 mr-2">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
        <input type="checkbox" checked={theme === "fussylight"}  readOnly className='toggle  theme-controller'/>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={authUser.profilePic}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary text-info rounded-box w-52"
          >
            <li>
            <Logout />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
