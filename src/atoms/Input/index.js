import React from "react";
import { StyledField, StyledLabel, StyledInput, StyledInputArea } from "./style";

export default function Input({ type, labelText, icon }) {
  return (
    <StyledField>
      <StyledLabel>{labelText}</StyledLabel>
      <StyledInputArea>
        <StyledInput type={type} />
        <i style={{ margin: "0px 0px 0px 10px" }} className={`fas fa-${icon}`} />
      </StyledInputArea>
    </StyledField>
  );
}
