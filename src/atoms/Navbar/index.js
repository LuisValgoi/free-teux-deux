import React from "react";

import { StyledNavbar } from "./style";

export default function Navbar(props) {
  return <StyledNavbar>{props.children}</StyledNavbar>;
}
