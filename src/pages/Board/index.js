import React from "react";
import { Helmet } from "react-helmet";
import BoardTemplate from "../../templates/Board";

export default function Board() {
  return (
    <>
      <Helmet title="FreeTeuxDeux - Board" />
      <BoardTemplate
        primary={
          <>
            <h1>h1</h1>
            <h1>h1</h1>
            <h1>h1</h1>
            <h1>h1</h1>
            <h1>h1</h1>
            <h1>h1</h1>
            <h1>h1</h1>
          </>
        }
        secondary={<h1>h2</h1>}
      ></BoardTemplate>
    </>
  );
}
