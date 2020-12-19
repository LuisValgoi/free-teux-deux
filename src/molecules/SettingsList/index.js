import React from "react";

import { CONSTANTS as RoutesPath } from "../../routes/paths";
import { StyledSettingsList } from "./style";
import SettingsListItem from "../../atoms/SettingsListItem";

const SETTINGS_ITEMS = [
  {
    key: RoutesPath.ACCOUNT.key,
    path: RoutesPath.ACCOUNT.path,
    text: "Account",
  },
  {
    key: RoutesPath.DIGEST.key,
    path: RoutesPath.DIGEST.path,
    text: "Daily Digest",
  },
  {
    key: RoutesPath.COLORS.key,
    path: RoutesPath.COLORS.path,
    text: "Colors",
  },
];

export default function SettingsList() {
  return (
    <StyledSettingsList>
      {SETTINGS_ITEMS.map((item) => {
        return <SettingsListItem key={item.key} text={item.text} to={item.path} />;
      })}
    </StyledSettingsList>
  );
}
