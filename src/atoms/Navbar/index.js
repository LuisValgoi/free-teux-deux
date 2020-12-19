import React from "react";

import { StyledNavbar } from "./style";

export default function index(props) {
  return <StyledNavbar id="navbar">{props.children}</StyledNavbar>;
}
