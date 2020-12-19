import React from "react";

import { useAuth } from "../../contexts/auth";
import { StyledSettingsButtonArea } from "./style";

export default function SettingsButton(props) {
  const { user } = useAuth();

  return <StyledSettingsButtonArea {...props} text={!user ? "Loading..." : user.name} icon="angle-down" />;
}
