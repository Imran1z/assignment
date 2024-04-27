import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  // Function to check if the current path is signup or login
  const isSignupOrLogin = () => {
    return location.pathname === "/userhome" ;
  };

  return (
    <header className="bg-slate-200 shadow-md min-h-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        
      <Link
            to={"/login"}
          >
            
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-slate-500">Book</span>
            <span className="text-slate-700">Store</span>
          </h1>
          </Link>

        {/* Conditionally render the search bar */}
        {isSignupOrLogin() && (
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-24 sm:w-64"
            />
            <button>
              <FaSearch className="text-slate-600" />
            </button>
          </form>
        )}
        {isSignupOrLogin() && <div className="w-24 sm:w-64"></div>}

        <ul className="flex gap-4">

          {/* <Link
            to={"/signup"}
            className="hidden sm:inline text-slate-700 hover:underline cursor-pointer"
          >
            Signup
          </Link> */}
          <Link
            to={"/login"}
            className="hidden sm:inline text-slate-700 hover:underline cursor-pointer"
          >
            Signin
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
