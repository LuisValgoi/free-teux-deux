import React from "react";

import { CONSTANTS as RoutesPath } from "../../routes/paths";
import { StyledProfileList } from "./style";
import ProfileListItem from "../../atoms/ProfileListItem";

const ITEMS = [
  {
    key: RoutesPath.ACCOUNT.key,
    path: RoutesPath.ACCOUNT.path,
    text: "Account",
  },
];

export default function ProfileList() {
  return (
    <StyledProfileList>
      {ITEMS.map((item) => {
        return <ProfileListItem key={item.key} text={item.text} to={item.path} />;
      })}
    </StyledProfileList>
  );
}
