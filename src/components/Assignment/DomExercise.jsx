import React from "react";
import Header from "./Header";

const DomExercise = () => {
  return (
    <div className="h-full w-full overflow-y-scroll py-10 px-8 space-y-10">
      {/* title */}
      <Header
        navTitle={"DOM Exercise"}
        navUrl={"dom"}
        title={"DOM Exercise"}
      />
      {/* <LessonAccordian data={data} /> */}
    </div>
  );
};

export default DomExercise;
