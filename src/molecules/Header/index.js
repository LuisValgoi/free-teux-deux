import React, { useState } from "react";

import Navbar from "../../atoms/Navbar";
import Logo from "../../atoms/Logo";
import SettingsButton from "../../atoms/SettingsButton";

import { StyledProfileButton, StyledLogo, StyledHeaderSpacer } from "./style";
import SettingsList from "../../molecules/SettingsList";

export default function Header() {
  const [isSettingsListShown, setIsSettingsListShown] = useState(false);

  return (
    <Navbar>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledHeaderSpacer />
      <StyledProfileButton>
        <SettingsButton onMouseEnter={() => setIsSettingsListShown(true)} />
        {isSettingsListShown && <SettingsList onMouseLeave={() => setIsSettingsListShown(false)} />}
      </StyledProfileButton>
    </Navbar>
  );
}
