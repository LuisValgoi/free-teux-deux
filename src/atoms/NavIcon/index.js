import React from "react";
import { StyledNavIcon } from "./style";

export default function NavIcon(props) {
  return <StyledNavIcon onClick={props.onClick} {...props}></StyledNavIcon>;
}
