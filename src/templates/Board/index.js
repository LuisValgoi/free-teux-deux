import React from "react";
import { StyledMainSection, StyledPrimarySection, StyledSecondarySection } from "./style";

export default function Board({ primary, secondary }) {
  return (
    <StyledMainSection>
      <StyledPrimarySection>{primary}</StyledPrimarySection>
      <StyledSecondarySection>{secondary}</StyledSecondarySection>
    </StyledMainSection>
  );
}
