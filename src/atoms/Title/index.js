import React from "react";
import { StyledTitle } from "./style";

export default function Title(props) {
  return <StyledTitle {...props}>{props.text ? props.text : "N/A"}</StyledTitle>;
}
