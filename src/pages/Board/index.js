import React from "react";
import { Helmet } from "react-helmet";
import List from "../../molecules/List";
import BoardTemplate from "../../templates/Board";

export default function Board() {
  return (
    <>
      <Helmet title="FreeTeuxDeux - Board" />
      <BoardTemplate
        primary={
          <>
            <List title="Domingo" subtitle="20 de Dezembro de 2020" />
            <List title="Segunda" subtitle="20 de Dezembro de 2020" />
            <List title="Terça" subtitle="20 de Dezembro de 2020" />
            <List title="Quarta" subtitle="20 de Dezembro de 2020" />
            <List title="Quinta" subtitle="20 de Dezembro de 2020" />
            <List title="Sexta" subtitle="20 de Dezembro de 2020" />
            <List last title="Sabado" subtitle="20 de Dezembro de 2020" />
          </>
        }
        secondary={
          <>
            <h1>h2</h1>
          </>
        }
      ></BoardTemplate>
    </>
  );
}
