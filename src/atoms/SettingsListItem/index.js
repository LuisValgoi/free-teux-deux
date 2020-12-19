import React from "react";
import { useHistory } from "react-router-dom";

import { StyledSettingsListItem } from "./style";

export default function SettingsListItem({ text, to }, props) {
  const history = useHistory();

  return (
    <StyledSettingsListItem {...props} onClick={() => history.push(to)}>
      {text}
    </StyledSettingsListItem>
  );
}
