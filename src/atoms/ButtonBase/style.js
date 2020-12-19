import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledButtonBase = styled.button`
  padding: 0.8rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => (props.color ? props.color : Colors.BUTTON_COLOR_DEFAULT)};
  height: 100%;

  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  display: flex;
  flex: row;
  align-content: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const StyledSpan = styled.span`
  color: ${Colors.BUTTON_COLOR_DEFAULT};
  margin-left: 0.1rem;
  text-transform: lowercase;
  font-size: 12px;
  font-weight: bold;
`;

export const StyledIconArea = styled.div`
  min-width: 1rem;
  max-width: 1rem;
  margin-left: 0.1rem;
`;
