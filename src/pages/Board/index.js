import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import List from "../../molecules/List";
import BoardTemplate from "../../templates/Board";

import * as date from "../../utils/date";
import * as dayService from "../../services/days";

export default function Board() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    async function loadDays() {
      const response = await dayService.days();
      setDays(response);
    }
    loadDays();
  }, []);

  return (
    <>
      <Helmet title="FreeTeuxDeux - Board" />
      <BoardTemplate
        primary={
          <>
            {days.map((day, index) => {
              return (
                <List
                  condition={day.numberOfTheWeek === date.getCurrentWeekNumber()}
                  id={day.id}
                  key={day.id}
                  disabled={day.dayOfTheYear < date.getFullCurrentWeekDay()}
                  title={day.dayOfTheWeek}
                  subtitle={day.dayOfTheYear}
                  last={days[index + 1] && days[index + 1].numberOfTheWeek > day.numberOfTheWeek}
                />
              );
            })}
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
