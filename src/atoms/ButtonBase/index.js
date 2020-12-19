import React from "react";
import { StyledButtonBase, StyledSpan, StyledIconArea } from "./style";

export default function ButtonBase(props) {
  return (
    <StyledButtonBase {...props}>
      {props.text && <StyledSpan>{props.text}</StyledSpan>}
      {props.icon && (
        <StyledIconArea>
          <i className={`fas fa-${props.icon}`}></i>
        </StyledIconArea>
      )}
    </StyledButtonBase>
  );
}
