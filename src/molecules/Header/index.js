import React from "react";

import Navbar from "../../atoms/Navbar";
import Logo from "../../atoms/Logo";
import ProfileButton from "../../atoms/ProfileButton";

import { StyledProfileButton, StyledLogo, StyledHeaderSpacer } from "./style";
import ProfileList from "../../molecules/ProfileList";

export default function Header() {
  return (
    <Navbar>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledHeaderSpacer />
      <StyledProfileButton>
        <ProfileButton />
        <ProfileList />
      </StyledProfileButton>
    </Navbar>
  );
}
