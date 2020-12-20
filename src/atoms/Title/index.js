import React from "react";
import { StyledTitle } from "./style";

export default function Title(props) {
  return <StyledTitle>{props.text ? props.text : "N/A"}</StyledTitle>;
}
