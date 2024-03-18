import React from "react";
import { Link } from "react-router-dom";

const Header = ({navUrl, navTitle, title}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1 text-xs">
        <Link to={"/dashboard"}>Home</Link> |
        <Link to={"/dashboard/web-development"}>Web Development</Link> |
        <Link to={`/dashboard/web-development/${navUrl}`}>{navTitle}</Link>
      </div>
      <h1 className="font-semibold text-2xl">{title}</h1>
    </div>
  );
};

export default Header;
