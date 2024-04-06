import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between gap-3 px-3 py-1 items-center shadow-lg top-0">
      <Link to="/" className="text-2xl font-bold flex gap-2 items-center">
        <div>TZEE</div>
      </Link>
      <div className="flex gap-4 py-1">
        <Link to="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
