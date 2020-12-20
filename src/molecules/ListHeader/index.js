import React from "react";
import { StyledListHeader } from "./style";
import Title from "../../atoms/Title";
import SubTitle from "../../atoms/SubTitle";

export default function ListHeader({ title, subtitle, disabled }) {
  return (
    <StyledListHeader>
      <Title disabled={disabled} text={title} />
      <SubTitle disabled={disabled} text={subtitle} />
    </StyledListHeader>
  );
}
