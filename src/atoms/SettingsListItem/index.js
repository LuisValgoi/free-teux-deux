import React from "react";
import { useHistory } from "react-router-dom";

import { StyledSettingsListItem } from "./style";

export default function SettingsListItem({ text, to, onMouseLeave }) {
  const history = useHistory();

  return (
    <StyledSettingsListItem onMouseLeave={onMouseLeave} onClick={() => history.push(to)}>
      {text}
    </StyledSettingsListItem>
  );
}
