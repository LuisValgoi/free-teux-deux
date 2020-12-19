import React from "react";
import { useHistory } from "react-router-dom";

import { StyledSettingsListItem } from "./style";

export default function SettingsListItem({ text, onClick }, props) {
  const history = useHistory();

  return (
    <StyledSettingsListItem {...props} onClick={() => onClick(history)}>
      {text}
    </StyledSettingsListItem>
  );
}
