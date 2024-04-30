import React from "react";
import Header from "./Header";
import WebSections from "../WebSections";

const DomExercise = () => {
  return (
    <WebSections>
      {/* title */}
      <Header
        navTitle={"DOM Exercise"}
        navUrl={"dom"}
        title={"DOM Exercise"}
      />
       <h1 className="font-medium text-lg text-black">COMING SOON!!</h1>
      {/* <LessonAccordian data={data} /> */}
    </WebSections>
  );
};

export default DomExercise;
