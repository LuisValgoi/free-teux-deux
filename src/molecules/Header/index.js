import React, { useState } from "react";

import Navbar from "../../atoms/Navbar";
import Logo from "../../atoms/Logo";

import { StyledSettingsButtonArea, StyledLogo, StyledHeaderSpacer, StyledSettingsButton } from "./style";
import { useAuth } from "../../contexts/auth";
import SettingsList from "../../molecules/SettingsList";

export default function Header() {
  const { signed, user } = useAuth();
  const [isSettingsListShown, setIsSettingsListShown] = useState(false);

  return (
    <Navbar>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledHeaderSpacer />
      <StyledSettingsButtonArea>
        {signed && (
          <>
            <StyledSettingsButton onMouseEnter={() => setIsSettingsListShown(true)} text={!user ? "Loading..." : user.name} icon="angle-down" />
            {isSettingsListShown && <SettingsList onMouseLeave={() => setIsSettingsListShown(false)} />}
          </>
        )}
      </StyledSettingsButtonArea>
    </Navbar>
  );
}
