import React from "react";

import { useAuth } from "../../contexts/auth";
import { StyledSettingsButtonArea, StyledSettingsSpan } from "./style";

export default function SettingsButton(props) {
  const { user } = useAuth();

  return (
    <StyledSettingsButtonArea {...props}>
      <StyledSettingsSpan>{!user ? "Loading..." : user.name}</StyledSettingsSpan>
    </StyledSettingsButtonArea>
  );
}
