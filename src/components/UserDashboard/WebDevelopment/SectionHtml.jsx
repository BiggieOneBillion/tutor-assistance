import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import WebSections from "../../WebSections";

const SectionHtml = () => {
  return (
    <WebSections>
      {/* title */}
      <Header
        navTitle={"Html"}
        navUrl={"html-section"}
        title={"HTML LESSONS"}
      />
      <h1 className="font-medium text-lg text-black">COMING SOON!!</h1>
    </WebSections>
  );
};

export default SectionHtml;
