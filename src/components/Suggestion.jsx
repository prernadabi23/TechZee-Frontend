import React, { useEffect, useRef } from "react";

function Suggestion() {
  const data = [
    "ipl",
    "webdevelopment",
    "indiannews",
    "wedding",
    "software",
    "engineering",
    "football",
    "cricket",
    "baseball",
    "basketball",
  ];

  return (
    <div className="border-2 h-screen">
      <div className="text-black">Suggestions</div>
      <div className="flex flex-col items-start justify-center mt-5 gap-2 ml-2">
        {data.map((hash) => {
          return (
            <span
              style={{ width: `${hash.length * 10 + 8}px` }}
              className="bg-gray-200 text-sm rounded-lg text-black p-2 items-center justify-center"
            >
              #{hash}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
