import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledSubTitle = styled.p`
  font-family: "Helvetica Neue", Helvetica, -apple-system, system-ui, sans-serif;
  font-size: 0.7rem;
  margin-top: 0.3rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.disabled ? Colors.TEXT_DISABLED_BORDER : "auto")};
`;
