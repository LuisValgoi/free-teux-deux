import styled from "styled-components";
import ButtonBase from "../../atoms/ButtonBase";
import * as Colors from "../../styles/colors";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  flex-grow: 1;
`;

export const StyledSettingsButtonArea = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  color: white;
  flex-grow: 1;
`;

export const StyledSettingsButton = styled(ButtonBase)`
  &:hover {
    background-color: ${Colors.SETTINGS_BUTTON_BACKGROUND_HOVER};
  }
`;

export const StyledHeaderSpacer = styled.div`
  flex-grow: 4;
`;
