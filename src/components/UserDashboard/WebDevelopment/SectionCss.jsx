import React from "react";
import { Link } from "react-router-dom";

const SectionCss = () => {
  return (
    <div className="h-full w-full py-10 px-8 space-y-10">
      {/* title */}
      <div className="space-y-4">
        <div className="flex items-center gap-1 text-xs">
          <Link to={"/dashboard"}>Home</Link> |
          <Link to={"/dashboard/web-development"}>Web Development</Link> |
          <Link to={"/dashboard/web-development/css-section"}>Css</Link>
        </div>
        <h1 className="font-semibold text-2xl">CSS LESSONS</h1>
      </div>
      <h1 className="font-medium text-lg text-black">COMING SOON!!</h1>
    </div>
  );
};

export default SectionCss;