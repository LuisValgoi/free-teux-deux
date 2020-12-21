import styled from "styled-components";
import * as Colors from "../../styles/colors";

export const StyledMainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
`;

export const StyledSection = styled.div`
  display: flex;
  height: 50%;
  flex-direction: row;
`;

export const StyledPrimarySection = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: row;
  overflow: auto;

  transform: ${(props) => `translateX(${props.primaryAxisX}%)`};
  transition: all 0.5s;
`;

export const StyledSecondarySection = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-direction: row;
  overflow: auto;
`;

export const StyledNav = styled.nav`
  z-index: 99;
  background-color: ${Colors.CONTENT_BACKGROUND};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 4rem;
  border-left: 1px solid ${Colors.LIST_BORDER};
  border-right: 1px solid ${Colors.LIST_BORDER};
`;
