import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledList = styled.div`
  max-width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0.5rem;
  border-right: ${(props) => (props.last ? "none" : `1px solid ${Colors.LIST_BORDER}`)};
`;
