import React from "react";
import Header from "./Header";
import { jsExercise as data } from "../../data/Exercise";

const JavascriptExercise = () => {
  return (
    <div className="h-full w-full overflow-y-scroll py-10 px-3 md:px-8 space-y-10">
      {/* title */}
      <Header
        navTitle={"Javascript Exercise"}
        navUrl={"javascript"}
        title={"Javascript Exercise"}
      />
      {/* Each Exercise */}
      {data.map((datum, i) => (
        <div className="w-full py-5 px-3 bg-gray-200 space-y-3">
          <h2 className="font-medium text-lg text-gray-800">
            Exercise {i + 1} - {datum.topic}
          </h2>
          <ul className="space-y-2 list-disc md:list-inside">
            {datum.exercise.map((datai, i) => (
              <li className="text-sm font-medium text-gray-500 flex items-center gap-2 flex-wrap ">
                {/* <span>{i + 1}.</span> */}
                <span>{datai}</span>
                <div className="flex items-center gap-1">
                  {datum.link.map((l, i) => (
                    <a
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
    </div>
  );
};

export default JavascriptExercise;
