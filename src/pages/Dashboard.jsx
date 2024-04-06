import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import MainBar from "../components/MainBar";
import SearchClass from "../components/SearchClass";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const mainDiv = () => {
    if (page == 0) return <MainBar />;
    if (page == 1) return <SearchClass />;
  };
  return (
    <div className="flex flex-col">
      <div>
        <Nav />
      </div>
      <div className="flex">
        <div className="sm:hidden flex flex-col items-center justify-center">
          <button
            className="sm:hidden mt-4 px-4 py-2 bg-blue-500 text-white rounded "
            onClick={() => setOpen(!open)}
          >
            X
          </button>
          <div>
            {open && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex flex-col z-50">
                <SideBar
                  open={open}
                  setOpen={setOpen}
                  page={page}
                  setPage={setPage}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full">
          <div className="hidden sm:block">
            <SideBar page={page} setPage={setPage} />
          </div>
          {mainDiv()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
