import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../common/context/User";

const ProtectedRoutes = ({}) => {
  const { currentUser } = useUserAuth();
  if (currentUser) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoutes;