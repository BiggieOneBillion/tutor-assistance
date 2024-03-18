import React from "react";
import { Link } from "react-router-dom";

const Header = ({navTitle, navUrl, title}) => {
    
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1 text-xs">
        <Link to={"/dashboard/assignment"}>Home</Link> |
        <Link to={"/dashboard/assignment/web-development-exercise"}>Exercise</Link> |
        <Link to={`/dashboard/assignment/web-development-exercise/${navUrl}`}>{navTitle}</Link>
      </div>
      <h1 className="font-semibold text-2xl">{title}</h1>
    </div>
  );
};

export default Header;
