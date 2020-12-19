import React from "react";

import Navbar from "../../atoms/Navbar";
import Logo from "../../atoms/Logo";
import ProfileButton from "../../atoms/ProfileButton";
import { StyledProfileButton, StyledLogo, StyledHeaderSpacer } from "./style";

export default function index() {
  return (
    <Navbar>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledHeaderSpacer />
      <StyledProfileButton>
        <ProfileButton />
      </StyledProfileButton>
    </Navbar>
  );
}
