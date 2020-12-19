import styled from "styled-components";

import * as Colors from "../../styles/colors";
import ButtonBase from "../ButtonBase";

export const StyledSettingsButtonArea = styled(ButtonBase)`
  &:hover {
    background-color: ${Colors.SETTINGS_BUTTON_BACKGROUND_HOVER};
  }
`;
