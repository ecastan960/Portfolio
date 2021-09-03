import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Nabvar from "../components/Navbar";
import Signup from "../pages/Signup";
import TaskView from "../pages/TaskView";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Nabvar></Nabvar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup}></Route>
          <PrivateRoute
            path="/taskview"
            exact
            component={TaskView}
          ></PrivateRoute>
          <PrivateRoute
            path="/profile"
            exact
            component={Profile}
          ></PrivateRoute>
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
