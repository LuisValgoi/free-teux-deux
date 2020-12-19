import styled from "styled-components";

import * as Colors from "../../styles/colors";

export const StyledProfileListItem = styled.div`
  height: 30px;
  width: 100%;
  padding: 0.2rem;
  color: ${Colors.PROFILE_LIST_ITEM_COLOR};
  background-color: ${Colors.PROFILE_LIST_ITEM_BACKGROUND};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  font-size: 12px;

  &:hover {
    background-color: ${Colors.PROFILE_LIST_ITEM_BACKGROUND_HOVER};
  }
`;
