import React from "react";
import { useHistory } from "react-router-dom";

import { StyledSettingsListItem } from "./style";

export default function SettingsListItem({ text, to }) {
  const history = useHistory();

  return <StyledSettingsListItem onClick={() => history.push(to)}>{text}</StyledSettingsListItem>;
}
