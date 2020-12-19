import React from "react";

import { useAuth } from "../../contexts/auth";
import { StyledProfileButtonArea } from "./style";

export default function ProfileButton() {
  const { user } = useAuth();

  return <StyledProfileButtonArea onMouseEnter={() => alert("s")}>{!user ? "Loading..." : user.name}</StyledProfileButtonArea>;
}
