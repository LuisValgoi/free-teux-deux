import React from "react";
import { StyledSubTitle } from "./style";

export default function SubTitle(props) {
  return <StyledSubTitle {...props}>{props.text ? props.text : "N/A"}</StyledSubTitle>;
}
