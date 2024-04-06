import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const data = [
    "Music",
    "Dance",
    "Health And Fitness",
    "Astrology",
    "Sports",
    "School and College",
    "Entrance Examination",
    "Development",
    "Carreer Guides",
    "Business And Finance",
  ];
  return (
    <div>
      <div className="flex justify-between gap-3 px-3 py-1 items-center shadow-lg ">
        <Link to="/" className="text-2xl font-bold flex gap-2 items-center">
          {/* <img src="/icon.png" alt="img" /> */}
          <div>TZEE</div>
        </Link>
        <div className="flex gap-4 py-1">
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              SignUp
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center gap-4 p-2 mt-20">
        <div className="flex-1 flex-col ml-8">
          <div className="text-5xl font-bold text-gray-700">
            Learn,teach and grow on our all-inclusive e-learning platform for
            everyone!
          </div>
          <p className="mt-5">
            Unlock your learning potential with TZEE's cutting-edge online
            teaching platform, designed to deliver the best learning experience
            tailored just for you!
          </p>
          <Link to="/signup" className="flex mt-5">
            <div className="bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center gap-2">
              <div className="items-center justify-center">
                Get Started for free
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-1 items-center justify-end rounded-lg">
          <img
            src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
            width="100%"
            height="50%"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="text-2xl text-gray-950">
          Learn it all in one place! Our multi-learning platform has it all.
        </div>
        <div className="text-3xl font-bold mt-5">
          There's more than one way to learn
        </div>
        <div className="flex sm:flex-row flex-col gap-10 w-2/3 mt-24 items-center justify-center">
          <div className="shadow-lg flex flex-col items-center justify-center transition duration-300 transform hover:scale-105 p-2">
            <div className="flex items-center justify-center">
              <img
                src="https://png.pngtree.com/png-vector/20210329/ourlarge/pngtree-network-teaching-online-learning-illustration-png-image_3158307.jpg "
                alt="img"
                width="40%"
                height="50%"
              />
            </div>
            <div className="text-2xl mt-2 font-bold items-center justify-center">
              Live Learning
            </div>
            <div className="items-center justify-center">
              Community open to all ages, where anyone can teach and learn.
            </div>
          </div>
          <div className="shadow-lg flex flex-col items-center justify-center transition duration-300 transform hover:scale-105 p-2">
            <div className="flex items-center justify-center">
              <img
                src="https://www.annexorien.com/images/service/bulk-mailing.png"
                alt="img"
                width="50%"
                height="50%"
              />
            </div>
            <div className="text-2xl mt-2 font-bold items-center justify-center">
              Mailing Services
            </div>
            <p>
              Get personalized mailing services for teachers you have
              subscribed.
            </p>
          </div>
          <div className="shadow-lg flex flex-col p-2 items-center justify-center transition duration-300 transform hover:scale-105">
            <img
              src="https://img.freepik.com/premium-vector/online-communication-senior-elderly-people-stay-home-quarantine-isolation_313242-921.jpg"
              alt="img"
              width="50%"
            />
            <h2 className="text-2xl font-bold mt-2">Interactive And easy</h2>
            <p>
              Teach and learn with ease on our attractive and user-friendly
              website!
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold flex justify-center mt-28">
          What can you learn and teach? Anything!
        </h1>
        <div className="flex flex-wrap gap-10 items-center justify-center mt-20">
          {data.map((item) => {
            return (
              <div className="w-60 h-28 shadow-lg p-5 rounded-lg flex items-center justify-center font-bold transition duration-300 transform hover:scale-105">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-28"></div>
      <hr />
      <div className="flex text-center justify-center mb-10 mt-10">© 2024 TZEE, Inc.</div>
    </div>
  );
}
