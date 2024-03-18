import React from "react";
import LessonAccordian from "../../LessonAccordian";
import { Link } from "react-router-dom";
import { jsCourse as data } from "../../../data/Courses";

const SectionJavascript = () => {
  return (
    <div className="h-full w-full overflow-y-scroll py-10 px-8 space-y-10">
      {/* title */}
      <div className="space-y-2">
        <div className="flex items-center gap-1 text-xs italicy">
          <Link to={"/dashboard"}>Home</Link> |
          <Link to={"/dashboard/web-development"}>Web Development</Link> |
          <Link to={"/dashboard/web-development/javascript-section"}>
            Javascript
          </Link>
        </div>
        <h1 className="font-semibold text-2xl">JavaScript Lessons</h1>
      </div>
      <LessonAccordian data={data} />
    </div>
  );
};

export default SectionJavascript;

//WE WOULD USE THIS DATA STRUCTURE WHEN WE HAVE AGREED ON WHETHER TO ADD SUMMARY OR NOT
// {
//   lessonName: "Variables",
//   video_url: "https://www.youtube.com/watch?v=yLZUVsmUwZY",
//   summary:
//     "<p>In JavaScript, variables are used to store data values. They are containers for storing information that can be referenced and manipulated throughout a program. Variables in JavaScript can hold different types of data, such as numbers, strings, booleans, objects, or functions.</p><p>To declare a variable in JavaScript, you use the var, let, or const keyword followed by the variable name. Here's a brief overview of each:</p>",
//   assignment: ["What are variables?", "What is the syntax for writing a variable?","What is the difference between var, let and const?"],
// },
