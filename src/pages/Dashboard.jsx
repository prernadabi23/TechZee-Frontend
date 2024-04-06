import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import MainBar from "../components/MainBar";

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div>
        <Nav />
      </div>
      <div className="flex">
        <div className="sm:hidden">
          <button
            className="sm:hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(!open)}
          >
            Toggle
          </button>
          {open && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex flex-col z-50">
              <SideBar open={open} setOpen={setOpen} />
            </div>
          )}
        </div>
        <div className="flex w-full">
          <div className="hidden sm:block">
            <SideBar />
          </div>
            <MainBar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
