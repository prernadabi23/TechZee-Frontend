import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="flex flex-col border-2 rounded-lg p-4 gap-2">
      <div>Title</div>
      <div>Description</div>
      <div>Instructor: Ankur Yadav</div>
      <Link to="/class/123" className="flex items-center justify-center">
        <button className="bg-blue-600 text-white px-2 py-1 rounded-lg">
          Visit Class
        </button>
      </Link>
    </div>
  );
}

export default Card;
