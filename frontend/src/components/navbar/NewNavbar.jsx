import React from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import { useAuthContext } from '../../context/AuthContext';

const NewNavbar = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="navbar w-8/12 max-lg:w-full mb-1 bg-[#20232C] mx-auto rounded-b-3xl">
      <div className="navbar-start">

      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Fuzzzy</a>
      </div>
      <div className="navbar-end gap-2 mr-2">
        <button className="btn btn-ghost btn-circle">
        <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
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
