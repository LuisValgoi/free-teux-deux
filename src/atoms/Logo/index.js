import React from "react";
import { Link } from "react-router-dom";

import { CONSTANTS as RoutesPath } from "../../routes/paths";
import { StyledLogo } from "./style";

export default function Logo() {
  return (
    <Link to={RoutesPath.HOME.path}>
      <StyledLogo src="/images/logo.png" alt="logo" />
    </Link>
  );
}
