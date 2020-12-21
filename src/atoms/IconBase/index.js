import React from "react";
import { StyledIconBase } from "./style";

export default function IconBase(props) {
  return <StyledIconBase {...props} className={`fas fa-${props.icon} ${props.className}`}></StyledIconBase>;
}
