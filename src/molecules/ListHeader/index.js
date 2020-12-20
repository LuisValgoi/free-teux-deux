import React from "react";
import { StyledListHeader } from "./style";
import Title from "../../atoms/Title";
import SubTitle from "../../atoms/SubTitle";

export default function ListHeader({ title, subtitle }) {
  return (
    <StyledListHeader>
      <Title text={title} />
      <SubTitle text={subtitle} />
    </StyledListHeader>
  );
}
