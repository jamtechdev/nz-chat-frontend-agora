import React from "react";
import { Route, Navigate } from "react-router-dom";
const isAuthenticated = () => {
  return true;
};

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
