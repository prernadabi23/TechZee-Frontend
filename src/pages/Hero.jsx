import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-between gap-3 px-3 py-1 items-center">
        <Link to="/" className="text-2xl font-bold flex gap-2 items-center">
          <img src="/icon.png" alt="img" />
          <div>HashMedia</div>
        </Link>
        <div className="flex gap-4 py-1">
          <Link to="/signup">
            <button className="bg-purple-500 text-white px-3 py-2 rounded-lg">
              SignUp
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-purple-500 text-white px-3 py-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center gap-4 p-2 mt-20">
        <div className="flex-1 flex-col ml-8">
          <div className="text-4xl font-bold ">
            Discover the World of HashMedia
          </div>
          <div className="text-2xl mt-5 italic">
            Where Communication Flourishes Through Hashtags, Posts, Likes,
            Comments, Shares, and Beyond!
          </div>
          <Link to="/signup" className="flex mt-5">
            <div className="bg-purple-500 text-white p-2 rounded-lg flex items-center justify-center gap-2">
              <div className="items-center justify-center">
                Get Started for free
              </div>
              <div className="items-center">
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-1 items-center justify-end">
          <img src="/hashtag.png" alt="img" width={400} />
        </div>
      </div>

      {/* <div className="bg-black text-white h-24 mt-20">footer</div> */}
    </div>
  );
}
