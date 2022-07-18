import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../common/context/User";
const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useUserAuth();

  console.log("Check user in Private: ", currentUser);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;