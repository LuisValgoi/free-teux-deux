import React from "react";
import { Helmet } from "react-helmet";
import List from "../../molecules/List";
import BoardTemplate from "../../templates/Board";

import * as date from "../../utils/date";

export default function Board() {
  return (
    <>
      <Helmet title="FreeTeuxDeux - Board" />
      <BoardTemplate
        primary={
          <>
            <List disabled={true} title={date.getWeekDayDecreasedBy(1)} subtitle={date.getFullWeekDayDecreasedBy(1)} />
            <List title={date.getCurrentWeekDay()} subtitle={date.getFullCurrentWeekDay()} />
            <List title={date.getWeekDayIncrementedBy(1)} subtitle={date.getFullWeekDayIncrementedBy(1)} />
            <List title={date.getWeekDayIncrementedBy(2)} subtitle={date.getFullWeekDayIncrementedBy(2)} />
            <List title={date.getWeekDayIncrementedBy(3)} subtitle={date.getFullWeekDayIncrementedBy(3)} />
            <List title={date.getWeekDayIncrementedBy(4)} subtitle={date.getFullWeekDayIncrementedBy(4)} />
            <List last title={date.getWeekDayIncrementedBy(5)} subtitle={date.getFullWeekDayIncrementedBy(5)} />
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
