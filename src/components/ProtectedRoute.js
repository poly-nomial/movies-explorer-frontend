import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "./Preloader";

function ProtectedRoute({ element: Component, ...props }) {
  if (props.loggedIn === null) {
    return <Preloader />;
  } else if (props.loggedIn === true) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;
