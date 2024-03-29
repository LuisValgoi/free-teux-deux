import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import { CONSTANTS as RoutesPath } from "./paths";

import Board from "../pages/Board";
import Account from "../pages/Settings/Account";
import Digest from "../pages/Settings/Digest";
import Colors from "../pages/Settings/Colors";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

export default function Routes() {
  const { signed } = useAuth();

  const getRoutesForSignedUsers = () => {
    return (
      <Switch>
        <Route key={RoutesPath.BOARD.key} path={RoutesPath.BOARD.path} component={Board} exact />
        <Route key={RoutesPath.ACCOUNT.key} path={RoutesPath.ACCOUNT.path} component={Account} exact />
        <Route key={RoutesPath.DIGEST.key} path={RoutesPath.DIGEST.path} component={Digest} exact />
        <Route key={RoutesPath.COLORS.key} path={RoutesPath.COLORS.path} component={Colors} exact />
        <Redirect from={RoutesPath.HOME.path} to={RoutesPath.BOARD.path} />
        <Redirect from={RoutesPath.LOGIN.path} to={RoutesPath.BOARD.path} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  };

  const getRoutesForUnauthorizedUsers = () => {
    return (
      <Switch>
        <Route key={RoutesPath.LOGIN.key} path={RoutesPath.LOGIN.path} component={Login} exact />
        <Redirect from={RoutesPath.HOME.path} to={RoutesPath.LOGIN.path} />
        <Redirect from={RoutesPath.BOARD.path} to={RoutesPath.LOGIN.path} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  };

  return <>{signed ? getRoutesForSignedUsers() : getRoutesForUnauthorizedUsers()}</>;
}
