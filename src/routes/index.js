import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import { CONSTANTS as RouteConstants } from "./paths";

import Board from "../pages/Board";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const Routes = () => {
  const { signed } = useAuth();

  const getRoutesForSignedUsers = () => {
    return (
      <Switch>
        <Route key={RouteConstants.BOARD.key} path={RouteConstants.BOARD.path} component={Board} exact />
        <Redirect from={RouteConstants.HOME.path} to={RouteConstants.BOARD.path} />
        <Redirect from={RouteConstants.LOGIN.path} to={RouteConstants.BOARD.path} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  };

  const getRoutesForUnauthorizedUsers = () => {
    return (
      <Switch>
        <Route key={RouteConstants.LOGIN.key} path={RouteConstants.LOGIN.path} component={Login} exact />
        <Redirect from={RouteConstants.BOARD.path} to={RouteConstants.LOGIN.path} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  };

  return <>{signed ? getRoutesForSignedUsers() : getRoutesForUnauthorizedUsers()}</>;
};

export default Routes;
