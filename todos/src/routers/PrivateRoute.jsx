import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  return (
    <div>
      <Route {...rest}>
        {auth.authUser ? <Component></Component> : <Redirect to="/"></Redirect>}
      </Route>
    </div>
  );
}

export default PrivateRoute;
