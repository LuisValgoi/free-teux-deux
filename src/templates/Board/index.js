import React from "react";
import { StyledMainSection, StyledNav, StyledPrimarySection, StyledSecondarySection, StyledSection } from "./style";

export default function Board({ primary, secondary }) {
  return (
    <StyledMainSection>
      <StyledSection>
        <StyledNav>
          <div style={{ marginTop: "1rem" }}>
            <i style={{ textAlign: "center", fontSize: "2rem" }} className="fas fa-angle-left"></i>
          </div>
        </StyledNav>
        <StyledPrimarySection>{primary}</StyledPrimarySection>
        <StyledNav>
          <div style={{ marginTop: "1rem" }}>
            <i style={{ textAlign: "center", fontSize: "2rem" }} className="fas fa-angle-right"></i>
          </div>
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
