import styled from "styled-components";

import * as Colors from "../../styles/colors";
import ButtonBase from "../../atoms/ButtonBase";

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledArea = styled.div`
  width: 400px;
  text-align: center;
`;

export const StyledLogInButton = styled(ButtonBase)`
  background-color: ${Colors.BUTTON_COLOR_PRIMARY};
  width: 100%;
  height: auto;
  border-radius: 5px;

  &:hover {
    transition: all 0.5s;
    background-color: ${Colors.BUTTON_COLOR_PRIMARY_HOVER};
  }
`;
