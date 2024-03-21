import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import WebSections from "../../WebSections";
import {cssCourse as data} from '../../../data/Courses'
import LessonAccordian from "../../LessonAccordian";

const SectionCss = () => {
  return (
    <WebSections>
      {/* title */}
      <Header navTitle={'Css'} navUrl={'css-section'} title={'CSS LESSONS'}/>
      {/* <h1 className="font-medium text-lg text-black">COMING SOON!!</h1> */}
      <LessonAccordian data={data} />
    </WebSections>
  );
};

export default SectionCss;
