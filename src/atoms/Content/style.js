import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledContent = styled.div`
  height: calc(100% - 36px);
  width: 100%;
  position: absolute;
  top: 36px;
  background-color: ${Colors.CONTENT_BACKGROUND};
`;
