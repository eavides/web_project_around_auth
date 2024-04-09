import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as auth from "../utils/auth.js";

function ProtectedRoute({ children, loggedIn, setIsAuthenticated, ...props }) {
  console.log("--------entrooooo--protectd---------------");
  console.log(loggedIn);
  // console.log(localStorage.getItem("token"));

  function datos() {
    let login = localStorage.getItem("token");
    auth.getContent(login).then((data) => {
      if (JSON.stringify(data.data)) {
        setIsAuthenticated(true);
      }
    });
  }
  let respuesta = datos();
  // console.log(respuesta);

  return (
    <Route {...props}>{loggedIn ? children : <Redirect to={"/login"} />}</Route>
  );
}

export default ProtectedRoute;
