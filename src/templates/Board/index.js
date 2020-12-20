import React from "react";
import { StyledMainSection, StyledSection } from "./style";

export default function Board({ primary, secondary }) {
  return (
    <StyledMainSection>
      <StyledSection>{primary}</StyledSection>
      <StyledSection>{secondary}</StyledSection>
    </StyledMainSection>
  );
}
