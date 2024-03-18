import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Dashboard from "./components/UserDashboard/Dashboard";
import Courses from "./components/UserDashboard/Courses";
import WebDev from "./components/UserDashboard/WebDevelopment/WebDev";
import SectionHtml from "./components/UserDashboard/WebDevelopment/SectionHtml";
import SectionCss from "./components/UserDashboard/WebDevelopment/SectionCss";
import SectionJavascript from "./components/UserDashboard/WebDevelopment/SectionJavascript";
import SectionDOM from "./components/UserDashboard/WebDevelopment/SectionDOM";
import Assignment from "./components/Assignment/Assignment";
import WebDevExercise from "./components/Assignment/WebDevExercise";
import JavascriptExercise from "./components/Assignment/JavascriptExercise";
import HtmlExercise from "./components/Assignment/HtmlExercise";
import Css3Exercise from "./components/Assignment/Css3Exercise";
import DomExercise from "./components/Assignment/DomExercise";
import ProtectedRoute from "./components/Protected";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route index element={<Courses />} />
        <Route path="web-development" element={<WebDev />}></Route>
        <Route path="web-development/html-section" element={<SectionHtml />} />
        <Route path="web-development/css-section" element={<SectionCss />} />
        <Route path="web-development/dom-section" element={<SectionDOM />} />
        <Route
          path="web-development/javascript-section"
          element={<SectionJavascript />}
        />
        <Route path="assignment" element={<Assignment />} />
        <Route
          path="assignment/web-development-exercise"
          element={<WebDevExercise />}
        />
        <Route path="assignment/web-development-exercise/javascript" element={<JavascriptExercise />}/>
        <Route path="assignment/web-development-exercise/html" element={<HtmlExercise />}/>
        <Route path="assignment/web-development-exercise/css" element={<Css3Exercise />}/>
        <Route path="assignment/web-development-exercise/dom" element={<DomExercise/>}/>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;
