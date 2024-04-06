import React from "react";

function Card() {
  return (
    <div className="flex flex-col border-2 rounded-lg p-4 gap-2">
      <div>Title</div>
      <div>Description</div>
      <div>Instructor: Ankur Yadav</div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-600 text-white px-2 py-1 rounded-lg">
          Join Class
        </button>
      </div>
    </div>
  );
}

export default Card;
