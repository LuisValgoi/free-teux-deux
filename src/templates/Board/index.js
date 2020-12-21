import React from "react";
import { StyledMainSection, StyledNav, StyledPrimarySection, StyledSecondarySection, StyledSection } from "./style";

export default function Board(props) {
  return (
    <StyledMainSection>
      <StyledSection>
        <StyledNav>{props.primaryNavLeft}</StyledNav>
        <StyledPrimarySection primaryAxisX={props.primaryAxisX}>{props.primary}</StyledPrimarySection>
        <StyledNav>{props.primaryNavRight}</StyledNav>
      </StyledSection>

      <StyledSection>
        <StyledNav>{props.secondaryNavLeft}</StyledNav>
        <StyledSecondarySection>{props.secondary}</StyledSecondarySection>
        <StyledNav>{props.secondaryNavRight}</StyledNav>
      </StyledSection>
    </StyledMainSection>
  );
}
