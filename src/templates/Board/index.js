import React from "react";
import NavIcon from "../../atoms/NavIcon";
import { StyledMainSection, StyledNav, StyledPrimarySection, StyledSecondarySection, StyledSection } from "./style";

export default function Board({ primary, secondary }) {
  return (
    <StyledMainSection>
      <StyledSection>
        <StyledNav>
          <NavIcon primary icon="angle-left" />
          <NavIcon icon="angle-double-left" />
          <NavIcon icon="home" />
        </StyledNav>
        <StyledPrimarySection>{primary}</StyledPrimarySection>
        <StyledNav>
          <NavIcon primary icon="angle-right" />
          <NavIcon icon="angle-double-right" />
          <NavIcon icon="calendar-alt" />
        </StyledNav>
      </StyledSection>

      <StyledSection>
        <StyledNav></StyledNav>
        <StyledSecondarySection>{secondary}</StyledSecondarySection>
        <StyledNav></StyledNav>
      </StyledSection>
    </StyledMainSection>
  );
}
