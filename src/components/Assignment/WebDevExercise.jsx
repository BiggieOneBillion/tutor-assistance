import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { webDevSection as data } from "../../data/Exercise";

const WebDevExercise = () => {
  return (
    <div className="md:h-full w-full py-10 px-3 md:px-8 space-y-10">
      {/* title */}
      <div className="space-y-1">
        <h1 className="font-semibold text-2xl">Web Development Exercise</h1>
        <p className="text-sm font-normal capitalize text-gray-500">
          Click on the various cards to see the assignment for various lessons.
        </p>
      </div>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
        {data.map((datum, i) => (
          <Link
            key={i}
            to={datum.link}
            className="section-cards py-2 px-4 rounded-md flex justify-start items-center gap-4 w-[300px]y w-full lg:w-full border border-l-4 border-l-black"
          >
            <div className="space-y-2">
              <h3 className="uppercase font-semibold">{datum.section}</h3>
              <p className="text-sm">{datum.description}</p>
            </div>
            <span className="link-arrow transition-transform ease-in-out duration-300">
              <IoIosArrowForward />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WebDevExercise;
