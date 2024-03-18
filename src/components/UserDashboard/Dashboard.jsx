import React from "react";
import MobilePopMenu from "./MobilePopMenu";
import { MdDashboard } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="flex w-screen bg-white relative">
      {/* Left Section */}
      <div className="lg:w-[400px] px-4 border-r h-screen hidden lg:flex lg:flex-col lg:items-center lg:gap-14 py-5 ">
        {/* title */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            <MdDashboard />
          </span>
          <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        </div>
        {/* side-menu links */}
        <div className=" flex flex-col gap-8 w-full">
          <Link
            to={"/dashboard"}
            className={`${
              location.pathname === "/dashboard"
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } py-3 text-center text-lg hover:scale-[0.98] transition-transform ease-in-out duration-300 active:scale-95 px-2 w-full rounded-md border font-medium`}
          >
            Courses
          </Link>
          <Link
            to={"/dashboard/assignment"}
            className={`${
              location.pathname === "/dashboard/assignment"
                ? "bg-black text-white"
                : "bg-transparent text-black"
            } py-3 text-center text-lg hover:scale-[0.98] transition-transform ease-in-out duration-300 active:scale-95 px-2 w-full rounded-md border font-medium`}
          >
            Exercise
          </Link>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full h-screen border-b flex flex-col">
        <nav className=" py-5 border-b  bg-white flex justify-between  items-center px-3">
          {/* mobile navigation */}
          <div className="lg:hidden">
            <MobilePopMenu />
          </div>
          {/* desktop nav items */}
          <p className="font-medium text-base capitalized text-wrap hidden lg:block">
            Welcome Back
          </p>
          <p className="font-medium text-sm capitalized text-wrap w-[100px]">
            Raymond Trust
          </p>
        </nav>
        <section className="flex-1 overflow-y-auto">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
