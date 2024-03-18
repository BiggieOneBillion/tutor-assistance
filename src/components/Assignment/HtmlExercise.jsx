import React from "react";
import Header from "./Header";
import WebSections from "../WebSections";

const HtmlExercise = () => {
  return (
    <WebSections>
      {/* title */}
      <Header
        navTitle={"Html Exercise"}
        navUrl={"html"}
        title={"Html Exercise"}
      />
      {/* <LessonAccordian data={data} /> */}
      {/* Each Exercise */}
      <div className="w-full py-5 px-2 bg-gray-200 space-y-3">
        <h2 className="font-medium text-lg text-gray-800">Exercise 1</h2>
        <p className="text-sm capitalize font-medium text-gray-500">
          Build your cv using just Html, separating each section with a horizontal line.
        </p>
      </div>
    </WebSections>
  );
};

export default HtmlExercise;
