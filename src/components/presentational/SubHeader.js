import React from "react";
import { NavLink } from "react-router-dom";

const SubHeader = () => (
  <div className="subheader--container">
    <ul className="subheader">
      <li><NavLink to="/">Box Shadow</NavLink></li>
      <li><NavLink to="/border-radius">Border Radius</NavLink></li>
    </ul>
  </div>
);

export default SubHeader;
