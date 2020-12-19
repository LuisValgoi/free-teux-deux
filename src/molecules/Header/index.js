import React from "react";

import Navbar from "../../atoms/Navbar";
import Logo from "../../atoms/Logo";
import SettingsButton from "../../atoms/SettingsButton";

import { StyledProfileButton, StyledLogo, StyledHeaderSpacer } from "./style";
import SettingsList from "../../molecules/SettingsList";

export default function Header() {
  return (
    <Navbar>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledHeaderSpacer />
      <StyledProfileButton>
        <SettingsButton />
        <SettingsList />
      </StyledProfileButton>
    </Navbar>
  );
}
