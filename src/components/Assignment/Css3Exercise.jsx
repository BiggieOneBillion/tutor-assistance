import React from "react";
import Header from "./Header";
import {cssExercise as data} from '../../data/Exercise'
import WebSections from "../WebSections";
import { v4 } from "uuid";

const Css3Exercise = () => {
  return (
    <WebSections>
      {/* title */}
      <Header
        navTitle={"Css3 Exercise"}
        navUrl={"css"}
        title={"Css3 Exercise"}
      />
      {/* Each Exercise */}
      {data.map((datum, i) => (
        <div key={v4()} className="w-full py-5 px-3 bg-gray-200 space-y-3">
          <h2 className="font-medium text-lg text-gray-800">
            Exercise {i + 1} - {datum.topic}
          </h2>
          <ul className="space-y-2 md:list-disc list-inside">
            {datum.exercise.map((datai) => (
              <li key={v4()} className="text-sm  font-medium text-gray-500 text-wrap">{datai}</li>
            ))}
            {datum.link.length > 0 && (
              <li>
                {datum.link.map((x, i) => (
                  <a key={v4()} href={x} target="_blank" rel="noopener" className="inline-block px-1 border border-black text-xs">
                    Link-{i + 1}
                  </a>
                ))}
              </li>
            )}
          </ul>
        </div>
      ))}
    </WebSections>
  );
};

export default Css3Exercise;
