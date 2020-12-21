import styled from "styled-components";
import IconBase from "../IconBase";

import * as Colors from "../../styles/colors";

export const StyledNavIcon = styled(IconBase)`
  margin-top: 0.5rem;
  font-size: ${(props) => (props.primary ? "3rem" : "1rem")};
  color: ${(props) => (props.primary ? Colors.NAV_ICON_COLOR_PRIMARY : Colors.NAV_ICON_COLOR)};
`;
