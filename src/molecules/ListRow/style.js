import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledOrderedList = styled.ol`
  width: 100%;
  margin: 0;
  margin-top: 80px;
  padding: 0 0.5rem;
  list-style-type: none;
  list-style: none;
  max-height: 100%;
`;

export const StyledListItem = styled.li`
  height: 1rem;
  width: 100%;
  padding: 0.15rem 0;
  list-style: none;
  align-items: stretch;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  font-size: 12px;
  border-bottom: 1px solid ${Colors.LIST_BORDER};
`;
