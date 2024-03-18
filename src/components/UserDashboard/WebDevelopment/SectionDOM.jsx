import React from "react";
import LessonAccordian from "../../LessonAccordian";
import { Link } from "react-router-dom";
import { domCourse as data } from "../../../data/Courses";
import Header from "./Header";
import WebSections from "../../WebSections";

const SectionDOM = () => {
  return (
    <WebSections>
      {/* Title */}
      <Header
        navTitle={"Dom"}
        navUrl={"dom-section"}
        title={"DOM Manipulations Lessons"}
      />
      {/* Lessons */}
      <LessonAccordian data={data} />
    </WebSections>
  );
};

export default SectionDOM;
