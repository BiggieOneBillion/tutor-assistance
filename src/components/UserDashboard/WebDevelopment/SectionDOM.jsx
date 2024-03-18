import React from "react";
import LessonAccordian from "../../LessonAccordian";
import { Link } from "react-router-dom";
import { domCourse as data } from "../../../data/Courses";

const SectionDOM = () => {
  return (
    <div className="h-full w-full overflow-y-scroll py-10 px-8 space-y-10">
      {/* Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-xs">
          <Link to={"/dashboard"}>Home</Link> |
          <Link to={"/dashboard/web-development"}>Web Development</Link> |
          <Link to={"/dashboard/web-development/dom-section"}>Dom</Link>
        </div>
        <h1 className="font-semibold text-2xl">DOM Manipulations Lessons</h1>
      </div>
      {/* Lessons */}
      <LessonAccordian data={data} />
    </div>
  );
};

export default SectionDOM;
