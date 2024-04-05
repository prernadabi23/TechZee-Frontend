import React from 'react';
import HashMediaIcon from "/hashmedia.png";
import LogoutIcon from "/logout.png";
import ActivtyIcon from "/activity.png"

const SideBar = ({ logout }) => (
  <div className="">
    <div className="">
      <div className="">
        <img src={HashMediaIcon} alt="Hashmedia" width="30" />
      </div>
    </div>
    <div className="">
    <div className="">
      <div className="">
        <img src={ActivtyIcon} alt="Activty" width="30" />
      </div>
    </div>
    <div className="">
      <div className="" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <SideBar />
  )
}

export default Sidebar;