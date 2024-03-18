import React from "react";
import { Route, Navigate } from "react-router-dom";
import Dashboard from "./UserDashboard/Dashboard";
import { useGlobalContext } from "../context/GlobalContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useGlobalContext();
  // This variable is to be gotten from the global context.
  // If true then display the dashboard, If not navigate to the index route when is also the login page.
  return isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
