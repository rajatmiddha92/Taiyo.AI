import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-red-500 w-60 h-screen text-white">
      <div className="w-60 h-20 bg-green-500"></div>

      <div className="mx-auto py-5 ml-4 gap-10">
        <Link to="/">
          <div className="mx-auto px-5 mb-10 cursor-pointer hover:text-gray-900 font-bold">
            Contact
          </div>
          <hr />
        </Link>
        <Link to="/mapandchart">
          <div className="mx-auto px-5 mt-10 mb-10 cursor-pointer hover:text-gray-900 font-bold">
            Chart & Maps
          </div>
          <hr />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
