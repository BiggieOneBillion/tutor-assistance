import React from "react";
import LessonAccordian from "../../LessonAccordian";
import { jsCourse as data } from "../../../data/Courses";
import Header from "./Header";
import WebSections from "../../WebSections";

const SectionJavascript = () => {
  return (
    <WebSections>
      {/* title */}
      <Header
        navTitle={"Javascript"}
        navUrl={"javascript-section"}
        title={"JavaScript Lessons"}
      />
      <LessonAccordian data={data} />
    </WebSections>
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
