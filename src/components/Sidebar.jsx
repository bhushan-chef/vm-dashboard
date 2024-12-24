import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <div className="profile">
        <div className="profile-pic"></div>
        <div className="profile-info">
          <p>Name</p>
          <p>Year</p>
        </div>
      </div>
      <div className="menu">
        <p>Menu Item 1</p>
        <p>Menu Item 2</p>
        <p>Menu Item 3</p>
      </div>
    </div>
  );
};

export default Sidebar;
