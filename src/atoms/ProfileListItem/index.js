import React from "react";
import { useHistory } from "react-router-dom";

import { StyledProfileListItem } from "./style";

export default function ProfileListItem({ text, to }) {
  const history = useHistory();

  return <StyledProfileListItem onClick={() => history.push(to)}>{text}</StyledProfileListItem>;
}
