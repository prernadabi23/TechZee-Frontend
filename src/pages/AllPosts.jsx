import React from "react";
import SideBar from "../components/SideBar";
import Suggestion from "../components/Suggestion";
import Posts from "../components/Posts";

function AllPosts() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-1/2">
        <Posts />
      </div>
      <div className="w-1/4">
        <Suggestion />
      </div>
    </div>
  );
}

export default AllPosts;
