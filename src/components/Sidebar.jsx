import React from 'react';
import HashMediaIcon from "../assets/hashmedia.png";
import LogoutIcon from "../assets/logout.png";

const SideBar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HashMediaIcon} alt="Hashmedia" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={logout}>
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

export default Sidebar