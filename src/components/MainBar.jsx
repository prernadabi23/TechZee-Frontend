import React, { useState } from "react";
const MainBar = () => {
  const [classCode, setClassCode] = useState("");
  return (
    <div className="w-full gap-2 flex flex-col items-center justify-center">
      <div>
        <img
          src="https://feweek.co.uk/wp-content/uploads/2023/10/Mark-Bremner-online-learning-blended-teach-education-feat.jpg "
          width={400}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="text-2xl font-bold">Live Streaming</div>
        <form type="submit">
          <div className="flex gap-4 mt-5">
            <span>
              <input
                className="border-2 px-4 py-2 rounded-lg"
                type="text"
                placeholder="Enter Class Code"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
              />
            </span>
            <span>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                Enter Class
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainBar;
