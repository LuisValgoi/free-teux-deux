import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledSettingsButtonArea = styled.div`
  width: auto;
  padding: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;

  &:hover {
    background-color: ${Colors.SETTINGS_BUTTON_BACKGROUND_HOVER};
    color: ${Colors.NAVBAR_BACKGROUND};
  }
`;

export const StyledSettingsSpan = styled.span`
  text-transform: lowercase;
  font-size: 12px;
  font-weight: bold;
`;
