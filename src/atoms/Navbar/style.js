import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledNavbar = styled.div`
  position: fixed;
  z-index: 100;
  height: 36px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${Colors.NAVBAR_BACKGROUND};
`;
