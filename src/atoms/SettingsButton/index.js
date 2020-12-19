import React from "react";

import { useAuth } from "../../contexts/auth";
import { StyledSettingsButtonArea, StyledSettingsSpan } from "./style";

export default function SettingsButton() {
  const { user } = useAuth();

  return (
    <StyledSettingsButtonArea onMouseEnter={() => {}}>
      <StyledSettingsSpan>{!user ? "Loading..." : user.name}</StyledSettingsSpan>
    </StyledSettingsButtonArea>
  );
}
