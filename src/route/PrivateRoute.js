import React from "react";
import { Redirect, Route } from "react-router-dom";

// redirect to login page if user is not logined
function PrivateRoute({
  component: Component,
  isAllow,
  redirectPath,
  ...othersProps
}) {
  return (
    <Route
      {...othersProps}
      render={(props) =>
        isAllow === true ? (
          <Component {...props}></Component>
        ) : (
          <Redirect
            to={{ pathname: redirectPath, state: { from: props.location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
}

PrivateRoute.defaultProps = {
  redirectPath: "/login",
};

export default PrivateRoute;
