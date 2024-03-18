import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="h-full w-full py-10 px-3 md:px-8 space-y-10">
      {/* title */}
      <div className="space-y-1">
        <h1 className="font-semibold text-2xl">List Of Enrolled Courses</h1>
        <p className="text-sm font-normal capitalize text-gray-500">
          Click on the courses to see their content and course outline
        </p>
      </div>
      {/* content */}
      <div className="course-list">
        <Link to={'web-development'} className="capitalize active:scale-[0.97] hover:translate-x-2 ease-in-out transition-transform duration-300 font-semibold py-5 px-5 border border-l-black border-l-4">
          Web Development Course
        </Link>
      </div>
    </div>
  );
};

export default Courses;
