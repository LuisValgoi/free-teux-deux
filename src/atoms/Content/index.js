import React from "react";

import { StyledContent } from "./style";

export default function Content(props) {
  return <StyledContent {...props}>{props.children}</StyledContent>;
}
