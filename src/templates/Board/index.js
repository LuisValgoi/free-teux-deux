import React from "react";
import { StyledMainSection, StyledNav, StyledPrimarySection, StyledSecondarySection, StyledSection } from "./style";

export default function Board({ primary, primaryNavLeft, primaryNavRight, secondary, secondaryNavLeft, secondaryNavRight }) {
  return (
    <StyledMainSection>
      <StyledSection>
        <StyledNav>{primaryNavLeft}</StyledNav>
        <StyledPrimarySection>{primary}</StyledPrimarySection>
        <StyledNav>{primaryNavRight}</StyledNav>
      </StyledSection>

      <StyledSection>
        <StyledNav></StyledNav>
        <StyledSecondarySection>{secondary}</StyledSecondarySection>
        <StyledNav></StyledNav>
      </StyledSection>
    </StyledMainSection>
  );
}
