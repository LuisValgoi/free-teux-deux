import React from "react";

import { CONSTANTS as RoutesPath } from "../../routes/paths";
import { StyledSettingsList } from "./style";
import { useAuth } from "../../contexts/auth";
import SettingsListItem from "../../atoms/SettingsListItem";

export default function SettingsList(props) {
  const { signOut } = useAuth();

  const SETTINGS_ITEMS = [
    {
      key: RoutesPath.ACCOUNT.key,
      onClick: (history) => history.push(RoutesPath.ACCOUNT.path),
      text: "Account",
    },
    {
      key: RoutesPath.DIGEST.key,
      onClick: (history) => history.push(RoutesPath.DIGEST.path),
      text: "Daily Digest",
    },
    {
      key: RoutesPath.COLORS.key,
      onClick: (history) => history.push(RoutesPath.COLORS.path),
      text: "Colors",
    },
    {
      key: "logout",
      onClick: (history) => {
        signOut();
        history.push(RoutesPath.HOME.path);
      },
      text: "Logout",
    },
  ];

  return (
    <StyledSettingsList {...props}>
      {SETTINGS_ITEMS.map((item) => {
        return <SettingsListItem key={item.key} text={item.text} onClick={item.onClick} />;
      })}
    </StyledSettingsList>
  );
}
