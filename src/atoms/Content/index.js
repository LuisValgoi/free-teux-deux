import React from "react";

import { StyledContent } from "./style";

export default function index(props) {
  return (
    <StyledContent id="content" {...props}>
      {props.children}
    </StyledContent>
  );
}
