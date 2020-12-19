import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledProfileButtonArea = styled.div`
  width: auto;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  justify-self: center;

  &:hover {
    background-color: ${Colors.PROFILE_BUTTON_BACKGROUND_HOVER};
    color: ${Colors.NAVBAR_BACKGROUND};
  }
`;
