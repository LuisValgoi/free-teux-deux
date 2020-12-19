import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledNavbar = styled.div`
  position: fixed;
  z-index: 100;
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  background-color: ${Colors.NAVBAR_BACKGROUND};
`;
