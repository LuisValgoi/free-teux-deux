import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledTitle = styled.h2`
  font-family: TitleTX, -apple-system, system-ui, sans-serif;
  font-size: 40px;
  line-height: 66px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  color: ${(props) => (props.disabled ? Colors.TEXT_DISABLED_BORDER : "auto")};
`;
