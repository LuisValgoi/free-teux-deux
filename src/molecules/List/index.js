import React from "react";
import ListHeader from "../ListHeader";
import ListRow from "../ListRow";
import { StyledList } from "./style";

export default function List(props) {
  return (
    <StyledList {...props}>
      <ListHeader disabled={props.disabled} title={props.title} subtitle={props.subtitle} />
      <ListRow />
    </StyledList>
  );
}
