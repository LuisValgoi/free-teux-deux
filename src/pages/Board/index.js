import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import List from "../../molecules/List";
import BoardTemplate from "../../templates/Board";

import * as date from "../../utils/date";
import * as dayService from "../../services/days";
import NavIcon from "../../atoms/NavIcon";

export default function Board() {
  const [days, setDays] = useState([]);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [primaryAxisX, setPrimaryAxisX] = useState(0);

  const handleNavWeekBack = () => {
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === (currentWeek[0] && currentWeek[0].numberOfTheWeek - 1);
      })
    );
  };

  const handleNavWeekForward = () => {
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === (currentWeek[0] && currentWeek[0].numberOfTheWeek + 1);
      })
    );
  };

  const handleNavWeekOriginal = () => {
    setPrimaryAxisX(0);
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === date.getCurrentWeekNumber();
      })
    );
  };

  const getCurrentWeek = useCallback(() => {
    return (
      <>
        {currentWeek.map((dayOfTheCurrentWeek) => {
          return (
            <List
              id={dayOfTheCurrentWeek.id}
              key={dayOfTheCurrentWeek.id}
              disabled={date.getDisabledDates(dayOfTheCurrentWeek.dayOfTheYear)}
              title={dayOfTheCurrentWeek.dayOfTheWeek}
              subtitle={dayOfTheCurrentWeek.dayOfTheYear}
              last={days[dayOfTheCurrentWeek.id].numberOfTheWeek > dayOfTheCurrentWeek.numberOfTheWeek}
            />
          );
        })}
      </>
    );
  }, [currentWeek, days]);

  useEffect(() => {
    async function loadDays() {
      const days = await dayService.days();
      setDays(days);
      setCurrentWeek(
        days.filter((day) => {
          return day.numberOfTheWeek === date.getCurrentWeekNumber();
        })
      );
    }
    loadDays();
  }, []);

  return (
    <>
      <Helmet title="FreeTeuxDeux - Board" />
      <BoardTemplate
        primaryAxisX={primaryAxisX}
        primary={getCurrentWeek()}
        primaryNavLeft={
          <>
            <NavIcon primary icon="angle-left" onClick={() => setPrimaryAxisX(primaryAxisX + 14.3)} />
            <NavIcon icon="angle-double-left" onClick={() => handleNavWeekBack()} />
            <NavIcon icon="home" onClick={() => handleNavWeekOriginal()} />
          </>
        }
        primaryNavRight={
          <>
            <NavIcon primary icon="angle-right" onClick={() => setPrimaryAxisX(primaryAxisX - 14.3)} />
            <NavIcon icon="angle-double-right" onClick={() => handleNavWeekForward()} />
            <NavIcon icon="calendar-alt" />
          </>
        }
        secondaryNavLeft={
          <>
            <NavIcon primary icon="angle-left" onClick={() => alert("secondaryNavLeft")} />
          </>
        }
        secondaryNavRight={
          <>
            <NavIcon primary icon="angle-right" onClick={() => alert("secondaryNavRight")} />
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
