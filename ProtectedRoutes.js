import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = "saksak";
  return token ? <Outlet /> : <Navigate to={{ pathname: "/" }} />;
};

export default ProtectedRoutes;
