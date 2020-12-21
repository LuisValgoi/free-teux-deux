import styled from "styled-components";
import * as Colors from "../../styles/colors";

export const StyledIconBase = styled.i`
  text-align: center;
  color: ${(props) => (props.color ? props.color : Colors.ICON_COLOR)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    transition: all 0.2s;
  }
`;
