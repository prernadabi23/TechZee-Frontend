import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
function SideBar({ open, setOpen, page, setPage }) {
  return (
    <div
      style={{ height: "89vh" }}
      className="shadow-lg w-56 bg-gray-50 mt-1 border-2"
    >
      <div className="flex flex-col items-center justify-center mt-20">
        <img src="/person.png" alt="profile" width={150} />
        <div>yankur2002@gmail.com</div>
        <div>Memeber Since: 1990</div>
      </div>
      <div className="flex flex-col ml-2">
        <Link
          className="flex items-center justify-start ml-5 text-xl gap-2 mt-5"
          onClick={() => setPage(0)}
        >
          <MdSpaceDashboard />
          <h2>Dashboard</h2>
        </Link>
        <Link
          onClick={() => setPage(1)}
          className="flex items-center text-xl justify-start gap-2 ml-5 mt-3"
        >
          <FaSearch />
          <h2>Search Class</h2>
        </Link>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded sm:hidden"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SideBar;
