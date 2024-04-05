import React from "react";
import HashMediaIcon from "/signn.png";
import LogoutIcon from "/logout.png";
import ActivtyIcon from "/user.png";

function SideBar() {
  return (
    <div className="flex flex-col gap-3 items-center justify-start py-4 w-16 border-2 h-screen">
      <div className="">
        <img src={HashMediaIcon} alt="Hashmedia" width="30" />
      </div>
      <div className="">
        <img src={ActivtyIcon} alt="Activty" width="30" />
      </div>
      <div className="">
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  );
}

export default SideBar;
