import React from "react";
import Header from "./Header";
import { jsExercise as data } from "../../data/Exercise";
import WebSections from "../WebSections";
import { v4 } from "uuid";

const JavascriptExercise = () => {
  return (
    <WebSections>
      {/* title */}
      <Header
        navTitle={"Javascript Exercise"}
        navUrl={"javascript"}
        title={"Javascript Exercise"}
      />
      {/* Each Exercise */}
      {data.map((datum, i) => (
        <div key={v4()} className="w-full py-5 px-3 bg-gray-200 space-y-3">
          <h2 className="font-medium text-lg text-gray-800">
            Exercise {i + 1} - {datum.topic}
          </h2>
          <ul className="space-y-2 list-disc md:list-inside">
            {datum.exercise.map((datai, i) => (
              <li
                key={v4()}
                className="text-sm font-medium text-gray-500 flex items-center gap-2 flex-wrap "
              >
                {/* <span>{i + 1}.</span> */}
                <span>{datai}</span>
                <div className="flex items-center gap-1">
                  {datum.link.map((l, i) => (
                    <a
                      key={v4()}
                      href={l}
                      target="_blank"
                      rel="noopener"
                      className="text-xs font-medium border border-black px-1"
                    >
                      Link-{i + 1}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </WebSections>
  );
};

export default JavascriptExercise;
