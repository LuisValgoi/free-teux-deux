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

  const handleNavWeekBack = () => {
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === currentWeek[0].numberOfTheWeek - 1;
      })
    );
  };

  const handleNavWeekForward = () => {
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === currentWeek[0].numberOfTheWeek + 1;
      })
    );
  };

  const handleNavWeekOriginal = () => {
    setCurrentWeek(
      days.filter((day) => {
        return day.numberOfTheWeek === date.getCurrentWeekNumber();
      })
    );
  };

  const getCurrentWeek = useCallback(() => {
    return (
      <>
        {currentWeek.map((currentDay, index) => {
          return (
            <List
              id={currentDay.id}
              key={currentDay.id}
              disabled={date.getDisabledDates(currentDay.dayOfTheYear)}
              title={currentDay.dayOfTheWeek}
              subtitle={currentDay.dayOfTheYear}
              last={days[index + 1] && days[index + 1].numberOfTheWeek > currentDay.numberOfTheWeek}
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
        primary={getCurrentWeek()}
        primaryNavLeft={
          <>
            <NavIcon primary icon="angle-left" onClick={() => handleNavWeekBack()} />
            <NavIcon icon="angle-double-left" />
            <NavIcon icon="home" onClick={() => handleNavWeekOriginal()} />
          </>
        }
        primaryNavRight={
          <>
            <NavIcon primary icon="angle-right" onClick={() => handleNavWeekForward()} />
            <NavIcon icon="angle-double-right" />
            <NavIcon icon="calendar-alt" />
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
